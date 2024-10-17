import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the dynamic table page", () => {
  cy.visit(Cypress.config("baseUrl") + "/dynamictable");
});

When("I fetch the CPU load for Chrome from the dynamic table", function () {
  // Fetch CPU value for Chrome from the dynamic table
  cy.get('div[role="row"]')
    .contains("Chrome") // Find the row containing 'Chrome'
    .should("exist")
    .parentsUntil('div[role="rowgroup"]') // Get the parent that holds the entire row
    .within(() => {
      cy.get('div[role="cell"]')
        .eq(3) // Select the 4th column, which contains CPU
        .invoke("text")
        .then((cpuValueFromTable) => {
          // Store the value in context for later comparison
          this.cpuValueFromTable = cpuValueFromTable.trim();
        });
    });
});

Then("I compare it with the CPU load shown in the yellow label", function () {
  // Fetch CPU value from the yellow label
  cy.get(".bg-warning")
    .invoke("text")
    .then((labelText) => {
      // Extract CPU value from the label text (e.g., "Chrome CPU: 6.3%")
      const matches = labelText.match(/Chrome CPU: (\d+\.\d+)%/);
      const cpuValueFromLabel = matches ? matches[1] : null;

      // Store the value in context
      this.cpuValueFromLabel = cpuValueFromLabel;
    });
});

Then("the values should match", function () {
  // Assert that the two CPU values are the same
  expect(this.cpuValueFromTable).to.equal(this.cpuValueFromLabel);
});
