import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the dynamic table page", () => {
  cy.visit(Cypress.config("baseUrl") + "/dynamictable");
});

When("I fetch the CPU load for Chrome from the dynamic table", function () {
  cy.contains("span", "Chrome")
    .parent()
    .within(() => {
      cy.contains("[role=cell]", "%")
        .invoke("text")
        .then((cpuText) => {
          this.cpuValueFromTable = cpuText.trim();
        });
    });
});

Then("I compare it with the CPU load shown in the yellow label", function () {
  cy.get(".bg-warning")
    .invoke("text")
    .then((labelText) => {
      expect(labelText).to.contain(this.cpuValueFromTable);
    });
});
