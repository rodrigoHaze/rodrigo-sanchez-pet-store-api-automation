import { Given, When, Then } from "@cucumber/cucumber";
import { BasicBehavior } from "../../utils/utils";
import constants from "../constants/constants";
////1) Scenario:  CONTACT US Form # src/tests/features/webDriverUniversity.feature:4
const behavior = new BasicBehavior();

Given("the user opens the CONTACT US form", async function () {
  await behavior.waitElement(
    "[id=" + constants.MAIN_LINKS_AND_IDS.contactUs.id + "]"
  );
  await behavior.clickElement(
    "[id=" + constants.MAIN_LINKS_AND_IDS.contactUs.id + "]"
  );
});

When("the user enters valid information", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the form is submitted successfully", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//2) Scenario: LOGIN PORTAL # src/tests/features/webDriverUniversity.feature:8

Given("the user navigates to the LOGIN PORTAL", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user enters valid username and password", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("access is granted", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//3) Scenario: BUTTON CLICKS # src/tests/features/webDriverUniversity.feature:13

Given("the user is on the BUTTON CLICKS page", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user performs all types of clicks", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("all clicks are registered successfully", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//4) Scenario: TO DO LIST # src/tests/features/webDriverUniversity.feature:18

Given("the user has a list of tasks", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When(
  "the user adds and deletes tasks using Webdriver methods",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

Then("the list updates correctly", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//5) Scenario: PAGE OBJECT MODEL # src/tests/features/webDriverUniversity.feature:23

Given("the user is familiar with the Page Object Model", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user applies POM concepts to model website pages", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the pages are modeled correctly", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//6) Scenario: ACCORDION & TEXT AFFECTS # src/tests/features/webDriverUniversity.feature:28

Given("the user clicks on one of the accordion panels", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user waits for the text to appear", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the user sees the text toggling as expected", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//7) Scenario: DROPDOWN, CHECKBOXES & RADIO BUTTONS # src/tests/features/webDriverUniversity.feature:33

Given(
  "the user is presented with dropdowns, checkboxes, and radio buttons",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

When("the user selects different options", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the selections are reflected correctly", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//8) Scenario: AJAX LOADER # src/tests/features/webDriverUniversity.feature:38

Given("the user encounters an Ajax Loader", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user waits for the loader to finish", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the user can interact with the elements loaded", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//9) Scenario: ACTIONS # src/tests/features/webDriverUniversity.feature:43

Given("the user needs to perform complex actions", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When(
  "the user attempts double clicks, clicks and holds, or drags and drops",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

Then("the actions are performed successfully", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//10) Scenario: SCROLLING AROUND # src/tests/features/webDriverUniversity.feature:48

Given("the user needs to scroll to a specific element", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user scrolls to that element", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the user can interact with it successfully", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//11) Scenario: POPUP & ALERTS # src/tests/features/webDriverUniversity.feature:53

Given("the user encounters popups and alerts", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user attempts to close or handle them", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the popups and alerts are managed successfully", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//12) Scenario: IFRAME # src/tests/features/webDriverUniversity.feature:58

Given(
  "the user needs to interact with elements within an IFRAME",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

When("the user switches context to the IFRAME", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then(
  "the user can interact with the elements within the IFRAME",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

//13) Scenario: HIDDEN ELEMENTS # src/tests/features/webDriverUniversity.feature:63

Given("the user suspects the presence of hidden elements", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
When("the user inspects and interacts with these elements", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the hidden elements are handled correctly", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//14) Scenario: DATA, TABLES & BUTTON STATES # src/tests/features/webDriverUniversity.feature:68

Given("the user needs to work with data from a table", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When(
  "the user reads and possibly writes data to and from the table",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

Then("the data is handled correctly", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//15) Scenario: AUTOCOMPLETE TEXTFIELD # src/tests/features/webDriverUniversity.feature:73

Given(
  "the user starts typing in the autocomplete text field",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

When(
  "the user selects an item from the autocomplete suggestions",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);

Then("the selected item reflects the user's needs", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//16) Scenario: FILE UPLOAD # src/tests/features/webDriverUniversity.feature:78

Given("the user has a specific file to upload", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user chooses the file and submits it", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the file is uploaded successfully", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

//17) Scenario: DATEPICKER # src/tests/features/webDriverUniversity.feature:83

Given("the user is presented with a datepicker", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("the user selects a day, month, and year", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then(
  "the selected date is accepted and displayed correctly",
  async function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);
