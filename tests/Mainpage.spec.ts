import { test, expect } from '@playwright/test';

test('main page test', async ({ page }) => {
  
  await page.goto('https://www.demoblaze.com/');


  const title = await page.locator('//*[@id="nava"]').textContent();
  await expect(title?.trim()).toBe('PRODUCT STORE');

  await expect(page.locator('text=Categories')).toBeVisible();
  await expect(page.locator('text=Phones')).toBeVisible();
  await expect(page.locator('text=Laptops')).toBeVisible();
  await expect(page.locator('text=Monitors')).toBeVisible();
});
