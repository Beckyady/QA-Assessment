import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit the Alerts page", () => {
  cy.visit(Cypress.config("baseUrl") + "/alerts");
});

When("I click on the Alert button", () => {
  cy.get("#alertButton").click();
});

Then("I should see an alert dialog and confirm it", () => {
  cy.on("window:alert", (alertText) => {
    const expectedText = "Today is a working day.\nOr less likely a holiday.";

    expect(alertText).to.eq(expectedText);
  });
});

When("I click on the Confirm button", () => {
  cy.get("#confirmButton").click();
});

Then("I should see a confirm dialog and accept it", () => {
  cy.on("window:confirm", (confirmText) => {
    const expectedText = "Today is a Friday.\nDo you agree?";
    expect(confirmText).to.eq(expectedText);
    return true;
  });
});

When("I click on the Prompt button", () => {
  cy.get("#promptButton").click();
});

Then("I should answer the prompt with {string} and confirm it", (answer) => {
  cy.window().then((win) => {
    cy.stub(win, "prompt").returns(answer);
  });
  cy.on("window:prompt", (promptText) => {
    const expectedPromptText = `Chose "cats" or 'dog'`;
    expect(promptText).to.eq(expectedPromptText);
  });
});
