import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('User should be login successfully with valid credentials', async ({ page }) => {
   await page.goto('/login');

   const loginPage = new LoginPage(page);

   await loginPage.login('tomsmith', 'SuperSecretPassword!');
   await page.waitForURL('**/secure');
   await expect(page).toHaveURL(/\/secure/);
});