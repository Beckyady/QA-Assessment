Feature: File Upload

  Scenario: Attach a file via drag and drop
    Given I visit the File Upload page
    When I drag and drop a file onto the upload area
    Then I should see the file listed as uploaded

  Scenario: Attach a file using the Browse files button
    Given I visit the File Upload page
    When I click the Browse files button and select a file
    Then I should see the file listed as uploaded
