import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.locator('body')).toContainText('All Products');
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('polo');
  await page.getByRole('button', { name: '' }).click();
  await expect(page.locator('body')).toContainText('Searched Products');
  await expect(page.locator('body')).toContainText('Polo');
});