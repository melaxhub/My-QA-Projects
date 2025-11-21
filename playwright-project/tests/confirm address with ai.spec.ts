import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //...
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('qatester@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('qapassword');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Get the user's address from their profile (after login, navigate to account)
  //await page.getByRole('link', { name: ' Logout' }).click();
  //await page.getByRole('link', { name: ' Signup / Login' }).click();
  //await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('qatester@email.com');
  //await page.getByRole('textbox', { name: 'Password' }).fill('qapassword');
  //await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Account' }).click();
  
  // Extract the registered address details
  const registeredAddress = await page.locator('text=Your delivery address').textContent();
  
  // Go back to products and add to cart
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByText('Add to cart').first().click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  
  // Get the delivery address from checkout page
  const deliveryAddress = await page.locator('#address_delivery').textContent();
  
  // Verify that delivery address matches the registered address
  expect(deliveryAddress).toContain(registeredAddress?.trim() || '');
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
  await page.getByRole('link', { name: 'Continue' }).click();
});