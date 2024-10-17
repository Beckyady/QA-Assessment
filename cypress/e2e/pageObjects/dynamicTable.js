import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the dynamic table page", () => {
  cy.visit(Cypress.config("baseUrl") + "/dynamictable");
});

When("I fetch the CPU load for Chrome from the dynamic table", function () {
  cy.get('div[role="row"]')
    .contains("Chrome") 
    .should("exist")
    .parentsUntil('div[role="rowgroup"]') 
    .within(() => {
      cy.get('div[role="cell"]')
        .eq(3) 
        .invoke("text")
        .then((cpuValueFromTable) => {
          this.cpuValueFromTable = cpuValueFromTable.trim();
        });
    });
});

Then("I compare it with the CPU load shown in the yellow label", function () {
  cy.get(".bg-warning")
    .invoke("text")
    .then((labelText) => {
      const matches = labelText.match(/Chrome CPU: (\d+\.\d+)%/);
      const cpuValueFromLabel = matches ? matches[1] : null;

      this.cpuValueFromLabel = cpuValueFromLabel;
    });
});

Then("the values should match", function () {
  expect(this.cpuValueFromTable).to.equal(this.cpuValueFromLabel);
});
