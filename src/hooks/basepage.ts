import { Browser, BrowserContext, Page } from "@playwright/test";
export const basePage = {
  //@ts-ignore
  page: undefined as Page,
  //@ts-ignore
  browser: undefined as Browser,
  //@ts-ignore
  context: undefined as BrowserContext,
};
