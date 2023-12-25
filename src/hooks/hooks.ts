import { After, Before, BeforeAll } from "@cucumber/cucumber";
import { addRowExcel, cleanErrorMessage, createExcel } from "../utils/utils";
import constants from "../tests/constants/constants";
import { basePage } from "./basepage";
import { Browser, Page, chromium } from "@playwright/test";
BeforeAll(async function () {
  await createExcel(constants.EXCEL_HEADERS, constants.EXCEL_FILE_NAME);
  try {
    browser = await chromium.launch({
      headless: false,
    });
    basePage.browser = browser;
    page = await browser.newPage({
      viewport: {
        width: 1360,
        height: 728,
      },
      deviceScaleFactor: 1,
    });
    basePage.page = page;
    await basePage.page.goto(constants.BASE_URL!);
    await page.waitForLoadState("load");
  } catch (error) {
    console.log(error);
    basePage.page.reload();
  }
});
let browser: Browser;
let page: Page;
After(async function (scenario: any) {
  const steps = scenario.pickle.steps.map((step: any) => {
    return step.text;
  });
  const tags = scenario.pickle.tags.map((tag: any) => {
    return tag.name;
  });
  let failure;
  if (scenario.result.status === "FAILED") {
    failure = cleanErrorMessage(scenario.result.message);
  } else {
    failure = "";
  }
  let object: any = {
    id: scenario.pickle.id,
    featureName: scenario.gherkinDocument.feature.name,
    name: scenario.pickle.name,
    uri: scenario.pickle.uri,
    tags: tags,
    steps: steps,
    status: scenario.result.status,
    duration: scenario.result.duration.nanos,
    retried: scenario.willBeRetried,
    failure: failure,
  };
  await addRowExcel(object, constants.EXCEL_FILE_NAME);
});
