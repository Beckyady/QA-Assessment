Feature: Handle browser alerts, confirms, and prompts

Scenario: Handle alerts, confirm, and prompt dialogs
  Given I visit the Alerts page
  When I click on the Alert button
  Then I should see an alert dialog and confirm it
  When I click on the Confirm button
  Then I should see a confirm dialog and accept it
  When I click on the Prompt button
  Then I should answer the prompt with "Test Answer" and confirm it
