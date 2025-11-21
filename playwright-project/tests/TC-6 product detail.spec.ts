import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.locator('body')).toContainText('All Products');
  await page.getByRole('link', { name: ' View Product' }).nth(1).click();
  await expect(page.getByText('Men Tshirt Category: Men >')).toBeVisible();
});