import { type Page } from '@playwright/test';

export class BarPom {
  constructor(private page: Page) {}

  async navigate() {
    return this.page.goto('/bar');
  }

  getGreeting() {
    return this.page.locator('.t-greeting').first();
  }

  async clickGreetButton() {
    await this.page.locator('.t-greet-btn').click();
  }
}
