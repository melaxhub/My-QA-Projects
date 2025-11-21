import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('body')).toContainText('Category');
  await expect(page.getByRole('heading', { name: 'Category' })).toBeVisible();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toBeVisible();
  await expect(page.locator('section')).toContainText('Women - Dress Products');
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Tshirts' }).click();
  await expect(page.locator('section')).toContainText('Men - Tshirts Products');
  await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toBeVisible();
});