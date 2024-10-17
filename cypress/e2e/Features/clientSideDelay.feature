
Feature: Client Side Delay Test
  As a user
  I want to wait for the label to load after clicking the button
  So that I can ensure the label appears after a client-side delay

  Scenario: Wait for label to load after clicking button
    Given I am on the client delay page
    When I click the button to load the label
    Then I wait for the label to appear
    And I click on the loaded label
