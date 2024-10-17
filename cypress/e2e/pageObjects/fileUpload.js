import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the File Upload page', () => {
  cy.visit(Cypress.config("baseUrl") +'/upload');
});

When('I drag and drop a file onto the upload area', () => {
  const fileName = 'textfile.txt'; 
  cy.fixture(fileName).then(fileContent => {
    cy.get('iframe') 
      .trigger('dragenter')
      .trigger('dragover')
      .trigger('drop', { dataTransfer: { files: [new File([fileContent], fileName)] } });
  });
});

Then('I should see the file listed as uploaded', () => {
  cy.get('.uploaded-files') 
    .should('contain.text', 'textfile.txt'); 
});

When('I click the Browse files button and select a file', () => {
  const fileName = 'textfile.txt'; 
  cy.get('#browse') 
    .attachFile(fileName); 
});
