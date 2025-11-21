import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // ...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await expect(page.locator('b')).toContainText('Test Cases');
});