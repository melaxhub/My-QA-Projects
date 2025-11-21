import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.locator('body')).toContainText('All Products');
  await expect(page.locator('body')).toContainText('Blue Top');
  await page.getByText('Add to cart').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await expect(page.locator('body')).toContainText('Men Tshirt');
  await page.getByText('Add to cart').nth(2).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.locator('body')).toContainText('Blue Top');
  await expect(page.locator('body')).toContainText('Men Tshirt');
});