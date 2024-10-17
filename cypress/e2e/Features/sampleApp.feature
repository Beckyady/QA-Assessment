Feature: Sample App Login
  As a user
  I want to login successfully


  Scenario: Successful login with correct username and password
    Given I am on the login page
    When I fill in the username "testuser"
    And I fill in the password "pwd"
    And I click the login button
    Then I should see the message "Welcome, testuser!"

  Scenario: Failed login with empty username
    Given I am on the login page
    When I fill in the username ""
    And I fill in the password "pwd"
    And I click the login button
    Then I should see the error message "Invalid username/password"

