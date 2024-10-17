Feature: Shadow DOM Guid Generator and Confirmation
  As a user
  I want to generate a GUID and copy it to the clipboard using the Shadow DOM component

  Scenario: Generate a GUID and copy to clipboard
    Given I am on the Shadow DOM page
    When I click on the settings icon
    And I click on the copy icon
    Then I should see the GUID copied to the clipboard
    And the GUID in the clipboard should match the input field value
