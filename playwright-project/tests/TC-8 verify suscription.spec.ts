import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await expect(page.locator('#footer')).toContainText('Subscription');
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).fill('qatester@email.com');
  await page.getByRole('button', { name: '' }).click();
});