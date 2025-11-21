import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByText('Add to cart').first().click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.locator('ol')).toContainText('Shopping Cart');
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Register / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('qatester@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('qapassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Logged in as qa tester');
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('qa tester');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('1234567890');
  await page.getByRole('textbox', { name: 'ex.' }).click();
  await page.getByRole('textbox', { name: 'ex.' }).fill('123');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('textbox', { name: 'MM' }).fill('12');
  await page.getByRole('textbox', { name: 'YYYY' }).click();
  await page.getByRole('textbox', { name: 'YYYY' }).fill('1234');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download Invoice' }).click();
  const download = await downloadPromise;
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});