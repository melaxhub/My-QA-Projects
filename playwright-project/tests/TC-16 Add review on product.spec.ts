import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.locator('body')).toContainText('All Products');
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await expect(page.locator('section')).toContainText('Write Your Review');
  await page.getByRole('list').filter({ hasText: 'Write Your Review' }).click();
  await page.getByRole('list').filter({ hasText: 'Write Your Review' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('qa tester');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('qatest@email.com');
  await page.getByRole('textbox', { name: 'Add Review Here!' }).click();
  await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('running a qa test');
  await page.getByRole('button', { name: 'Submit' }).click();
});