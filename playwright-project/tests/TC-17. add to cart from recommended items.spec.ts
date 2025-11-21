import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('body')).toContainText('recommended items');
  await page.locator('.item.active > div > .product-image-wrapper > .single-products > .productinfo > .btn').first().click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.locator('#product-4')).toContainText('Stylish Dress');
});