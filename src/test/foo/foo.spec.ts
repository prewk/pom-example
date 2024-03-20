import { expect, test } from '@playwright/test';
import { FooPom } from './foo.pom';

test.describe('Foo', () => {
  test('should greet me', async ({ page }) => {
    const foo = new FooPom(page);

    await foo.navigate();

    await expect(foo.getInfoText()).toContainText('Lorem');
  })
})
