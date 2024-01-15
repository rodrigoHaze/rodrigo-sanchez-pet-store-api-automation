import { Locator, Page } from "@playwright/test";
import { basePage } from "../hooks/basepage";
const ExcelJS = require("exceljs");

export class BasicBehavior {
  changeTab(pageIndex: number, contextIndex?: number) {
    let context = basePage.browser.contexts()[0];
    let pages = context.pages();
    if (pageIndex < pages.length && pageIndex >= 0) {
      basePage.page = pages[pageIndex];
    } else {
      console.log("Out Of Limits");
    }
  }
  async waitElement(selector: string) {
    await basePage.page.waitForSelector(selector);
  }
  async waitAndGetElement(selector: string) {
    await basePage.page.waitForSelector(selector);
    const element = basePage.page.locator(selector);
    return element;
  }
  async clickElement(selector: string) {
    await basePage.page.waitForSelector(selector);
    const element = basePage.page.locator(selector);
    await element.click();
  }
  async writeTextField(selector: string, text: string) {
    await this.clickElement(selector);
    const item = basePage.page.locator(selector);
    item.fill(text);
  }
  async cleanInput(selector: string) {
    await basePage.page.waitForSelector(selector);
    const item = basePage.page.locator(selector);
    item.clear();
  }
  async getText(locator: Locator) {
    return await locator.innerText();
  }
  async getHTML(locator: Locator) {
    return await locator.innerHTML();
  }
}

export async function createExcel(headers: string[], fileName: string) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Test-Report");
  // Agregar nombres en la primera fila
  worksheet.addRow(headers);
  // Guardar el archivo Excel inicial
  await workbook.xlsx.writeFile(fileName + ".xlsx");
  console.log("Sheet Created");
}
export async function addRowExcel(scenarioData: any, fileName: string) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(fileName + ".xlsx");
  const worksheet = workbook.getWorksheet("Test-Report");
  worksheet.addRow([
    scenarioData.id,
    scenarioData.featureName,
    scenarioData.name,
    scenarioData.uri,
    scenarioData.tags,
    scenarioData.steps,
    scenarioData.status,
    scenarioData.duration,
    scenarioData.retried,
    scenarioData.failure,
  ]);
  await workbook.xlsx.writeFile(fileName + ".xlsx");
  console.log("Sheet Updated");
}
export function cleanErrorMessage(error: string) {
  // Remove ANSI escape codes
  const withoutAnsiCodes = error.replace(/\x1B\[\d+m/g, "");

  // Split the message into lines
  const lines = withoutAnsiCodes.split("\n");

  // Filter out lines from the stack trace you don't want or just take the first few lines
  const filteredLines = lines.filter((line, index) => {
    // Example: Skip lines that are part of the internal modules, adjust according to your needs
    return !line.includes("node_modules/");
  });

  // Join the cleaned lines back into a single string
  return filteredLines.join("\n");
}

function getArrayAsString(array: string[]) {
  return array.join("\n");
}
