import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.locator('#form')).toContainText('Login to your account');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('qatester@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('qapassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Logged in as qa tester');
  await page.getByRole('link', { name: ' Logout' }).click();
});