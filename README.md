# QA-Assessment

Here's a comprehensive **README** file to document all steps required to execute the Cypress tests using the **Cypress Cucumber Preprocessor** and **BDD** framework.

## Prerequisites

Ensure you have the following tools installed:

1. **Node.js** (version 12 or higher)
   - Install Node.js from [here](https://nodejs.org/).
2. **Cypress** (version 10 or higher)
   - Cypress can be installed using `npm` or `yarn`.
3. **Cypress Cucumber Preprocessor**
   - This preprocessor allows Cypress to execute feature files written in Gherkin syntax.

## Installation

Follow these steps to set up the repository locally and install all necessary dependencies:

1. **Clone the Repository**:
   git clone <repository-url>
   cd <repository-folder>

2. **Install Dependencies**
   Ensure that all required packages, including Cypress and the Cucumber preprocessor, are installed.

   ```bash
   npm install
   ```

3. **Cypress Configuration**:
   Ensure the `cypress.config.js` contains the correct configuration for the base URL, feature files, and step definitions. Example:
   ```javascript
   const { defineConfig } = require("cypress");
   ```

## Running the Tests

You can run the tests via Cypress's test runner or headlessly from the terminal.

### Run Cypress Test Runner (Interactive Mode)

```bash
npx cypress open
```

1. This opens the Cypress Test Runner.
2. Select the test you want to run from the list (e.g., `dynamicTable.feature` or `sampleApp.feature`).

## File Structure

The project follows the **Page Object Model** (POM) approach for maintainability.

## Notes & Observations

### 1. **Empty Input Issue**:
   Cypress `type()` function does not allow typing an empty string. In cases where empty input is required for testing (e.g., failed login due to empty username), a workaround was used:
   - **Solution**: Instead of `.type('')`, ensure Cypress skips typing if the value is empty.

### 2. **Timeouts and Dynamic Content**:
   The `dynamicTable` test interacts with dynamic content, which may require increasing the default timeout for certain assertions. If the content is not loaded quickly enough, you may face test failures due to timeouts.
   - **Solution**: Use Cypress’s `cy.wait()` or adjust the global timeout configuration.


