Feature: Dynamic Table Test
  As a user
  I want to confirm that the CPU load for Chrome in the table matches the figure in the yellow label.


  Scenario: Verify Chrome CPU load value matches with the yellow label
    Given I am on the dynamic table page
    When I fetch the CPU load for Chrome from the dynamic table
    Then I compare it with the CPU load shown in the yellow label
    And the values should match
