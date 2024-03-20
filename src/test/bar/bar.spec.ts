import { expect, test } from '@playwright/test';
import { BarPom } from './bar.pom';

test.describe('Bar', () => {
  test('should greet me after the greet button is clicked', async ({ page }) => {
    const bar = new BarPom(page);

    await bar.navigate();
    const greeting = bar.getGreeting();

    await expect(greeting).toBeEmpty();

    await bar.clickGreetButton();

    await expect(greeting).not.toBeEmpty();
  })
})
