import { type Page } from '@playwright/test';

export class FooPom {
  constructor(private page: Page) {}

  async navigate() {
    return this.page.goto('/foo');
  }

  getInfoText() {
    return this.page.locator('.t-info').first();
  }
}
