import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the client delay page", () => {
  cy.visit(Cypress.config("baseUrl") + "/clientdelay");
});

When("I click the button to load the label", () => {
  cy.get("#ajaxButton").click();
});

Then("I wait for the label to appear", () => {
  cy.get(".bg-success", { timeout: 15000 }).should("be.visible");
});

Then("I click on the loaded label", () => {
  cy.get(".bg-success").click();
});
