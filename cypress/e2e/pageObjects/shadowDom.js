import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the Shadow DOM page", () => {
  cy.visit(Cypress.config("baseUrl") + "/shadowdom");
});

When("I click on the settings icon", () => {
  cy.get("guid-generator").shadow().find("#buttonGenerate").click();
});

When("I click on the copy icon", () => {
  cy.get("guid-generator").shadow().find("#editField").invoke("val").as("generatedGUID");

  cy.window().then((win) => {
    if (!win.navigator.clipboard) {
      win.navigator.clipboard = {};
    }
    
    cy.stub(win.navigator.clipboard, "writeText").as("writeTextStub").resolves();
    cy.stub(win.navigator.clipboard, "readText").as("readTextStub").resolves("mock-guid");
  });

  cy.get("guid-generator").shadow().find("#buttonCopy").click();
});

Then("I should see the GUID copied to the clipboard", () => {
  cy.get("@generatedGUID").then((generatedGUID) => {
    cy.get("@writeTextStub").should("have.been.calledOnceWith", generatedGUID);
  });

  cy.window().then((win) => {
    win.navigator.clipboard.readText().then((clipboardValue) => {
      expect(clipboardValue).to.equal("mock-guid");
    });
  });
});
