import { expect, test } from '@playwright/test';
import { BazPom } from './baz.pom';

test.describe('Baz', () => {
  test('should request bazes from the API', async ({ page }) => {
    const baz = new BazPom(page);

    await baz.navigate();

    expect(await baz.countBazes()).toEqual(0);

    await baz.clickRequestBazesButton();

    await baz.waitForBazes();

    expect(await baz.countBazes()).toBeGreaterThan(0);
  })
})
