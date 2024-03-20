import { type Page } from '@playwright/test';

export class BazPom {
  constructor(private page: Page) {}

  async navigate() {
    return this.page.goto('/baz');
  }

  async clickRequestBazesButton() {
    await this.page.locator('.t-baz-request-btn').click();
  }

  async waitForBazes() {
    await this.page.waitForSelector('.t-baz-item');
  }

  async countBazes() {
    return this.page.locator('.t-baz-item').count();
  }
}
