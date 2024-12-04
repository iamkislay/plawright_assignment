import { test, expect } from '@playwright/test';

test('Signup test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
  
    
    await page.locator('//*[@id="signin2"]').click();
  
    
    await page.fill('//*[@id="sign-username"]', 'testuser');
    await page.fill('//*[@id="sign-password"]', 'TestPassword5656');
    await expect(page.locator('//*[@id="signInModal"]/div/div/div[3]/button[1]')).toBeVisible();
    await page.locator('//*[@id="signInModal"]/div/div/div[3]/button[2]').click();
    
    
  });
  