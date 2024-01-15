import { Browser, BrowserContext, Page } from "@playwright/test";
export const basePage = {
  //@ts-ignore
  page: undefined as Page,
  //@ts-ignore
  browser: undefined as Browser,
  //@ts-ignore
  context: undefined as BrowserContext,
};
/*export class BasePage {
  page: Page;
  browser: Browser;
  contect: BrowserContext;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  async start() {
    console.log("Browser 1");
    try {
      this.browser = await chromium.launch({
        headless: false,
      });
      this.page = await this.browser.newPage({
        viewport: {
          width: 1360,
          height: 728,
        },
        deviceScaleFactor: 1,
      });

      await basePage.page.goto(constants.BASE_URL!);
      await this.page.waitForLoadState("load");
    } catch (error) {
      console.log(error);
      this.page!.reload();
    }
  }
}*/
