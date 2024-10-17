import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the Shadow DOM page", () => {
  cy.visit(Cypress.config("baseUrl") + "/shadowdom");
});

When("I click on the settings icon", () => {
    cy.get('guid-generator').shadow().find('#buttonGenerate').click();

//   cy.get('#buttonGenerate').shadow().click();
});

// When("I click on the copy icon", () => {
//   cy.get('guid-generator').shadow().find('#buttonCopy').click();
// });

// Then("I should see the GUID copied to the clipboard", () => {
//   cy.window().then((win) => {
//     win.navigator.clipboard.readText().then((text) => {
//       cy.get('guid-generator').shadow().find('#editField').invoke('val').should('equal', text);
//     });
//   });
// });

// Then("the GUID in the clipboard should match the input field value", () => {
//   cy.window().then((win) => {
//     win.navigator.clipboard.readText().then((clipboardText) => {
//       cy.get('guid-generator').shadow().find('#editField').invoke('val').should('equal', clipboardText);
//     });
//   });
// });
