import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
  cy.visit(Cypress.config("baseUrl") + "/sampleapp");
});

When("I fill in the username {string}", (username) => {
  if (username === "") {
    cy.get('input[name="UserName"]').clear();
  } else {
    cy.get('input[name="UserName"]').type(username);
  }
});

When("I fill in the password {string}", (password) => {
  cy.get('input[name="Password"]').type(password);
});

When("I click the login button", () => {
  cy.get("#login").click();
});

Then("I should see the message {string}", (successMessage) => {
  cy.get("#loginstatus").should("contain.text", successMessage);
});

Then("I should see the error message {string}", (errorMessage) => {
  cy.get("#loginstatus").should("contain.text", errorMessage);
});
