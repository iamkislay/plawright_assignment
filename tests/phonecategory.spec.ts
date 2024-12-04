import { test, expect } from '@playwright/test';
test('phone category test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
  
    
    await page.locator('//*[@id="itemc"]').click();
  
    await expect(page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a')).toBe('Samsung galaxy s6');
    await expect(page.locator('//*[@id="tbodyid"]/div[5]/div/div/h4/a')).toBe('Iphone 6 32gb');
    
    
  });
