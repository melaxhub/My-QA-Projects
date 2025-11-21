import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('qatester@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('qapassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Logged in as qa tester');
  await page.getByText('Add to cart').first().click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.locator('ol')).toContainText('Shopping Cart');
  await page.getByText('Proceed To Checkout').click();
  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('qa is testing');
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('qa test');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('1234567890');
  await page.getByRole('textbox', { name: 'ex.' }).click();
  await page.getByRole('textbox', { name: 'ex.' }).fill('123');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('textbox', { name: 'MM' }).fill('12');
  await page.getByRole('textbox', { name: 'YYYY' }).click();
  await page.getByRole('textbox', { name: 'YYYY' }).fill('1234');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await expect(page.getByText('Order Placed!')).toBeVisible();
  await expect(page.locator('#form')).toContainText('Order Placed!');
  await page.getByRole('link', { name: ' Logout' }).click();
});