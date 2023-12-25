Feature: WebDriver University Functionality

  Scenario: CONTACT US Form
    Given the user opens the CONTACT US form
    When the user enters valid information
    Then the form is submitted successfully

  Scenario: LOGIN PORTAL
    Given the user navigates to the LOGIN PORTAL
    When the user enters valid username and password
    Then access is granted

  Scenario: BUTTON CLICKS
    Given the user is on the BUTTON CLICKS page
    When the user performs all types of clicks
    Then all clicks are registered successfully

  Scenario: TO DO LIST
    Given the user has a list of tasks
    When the user adds and deletes tasks using Webdriver methods
    Then the list updates correctly

  Scenario: PAGE OBJECT MODEL
    Given the user is familiar with the Page Object Model
    When the user applies POM concepts to model website pages
    Then the pages are modeled correctly

  Scenario: ACCORDION & TEXT AFFECTS
    Given the user clicks on one of the accordion panels
    When the user waits for the text to appear
    Then the user sees the text toggling as expected

  Scenario: DROPDOWN, CHECKBOXES & RADIO BUTTONS
    Given the user is presented with dropdowns, checkboxes, and radio buttons
    When the user selects different options
    Then the selections are reflected correctly

  Scenario: AJAX LOADER
    Given the user encounters an Ajax Loader
    When the user waits for the loader to finish
    Then the user can interact with the elements loaded

  Scenario: ACTIONS
    Given the user needs to perform complex actions
    When the user attempts double clicks, clicks and holds, or drags and drops
    Then the actions are performed successfully

  Scenario: SCROLLING AROUND
    Given the user needs to scroll to a specific element
    When the user scrolls to that element
    Then the user can interact with it successfully

  Scenario: POPUP & ALERTS
    Given the user encounters popups and alerts
    When the user attempts to close or handle them
    Then the popups and alerts are managed successfully

  Scenario: IFRAME
    Given the user needs to interact with elements within an IFRAME
    When the user switches context to the IFRAME
    Then the user can interact with the elements within the IFRAME

  Scenario: HIDDEN ELEMENTS
    Given the user suspects the presence of hidden elements
    When the user inspects and interacts with these elements
    Then the hidden elements are handled correctly

  Scenario: DATA, TABLES & BUTTON STATES
    Given the user needs to work with data from a table
    When the user reads and possibly writes data to and from the table
    Then the data is handled correctly

  Scenario: AUTOCOMPLETE TEXTFIELD
    Given the user starts typing in the autocomplete text field
    When the user selects an item from the autocomplete suggestions
    Then the selected item reflects the user's needs

  Scenario: FILE UPLOAD
    Given the user has a specific file to upload
    When the user chooses the file and submits it
    Then the file is uploaded successfully

  Scenario: DATEPICKER
    Given the user is presented with a datepicker
    When the user selects a day, month, and year
    Then the selected date is accepted and displayed correctly
