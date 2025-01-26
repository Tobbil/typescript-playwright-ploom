import { Page } from "@playwright/test";

export default class BasePage {
  readonly page: Page;
  readonly url: string;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("");
  }
}
