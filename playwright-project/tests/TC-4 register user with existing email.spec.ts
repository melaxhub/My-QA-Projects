import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.locator('#form')).toContainText('New User Signup!');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('qatester');
  await page.getByRole('textbox', { name: 'Name' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Name' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Name' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Name' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Name' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Name' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Name' }).fill('qa tester');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('qatester@email.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.locator('#form')).toContainText('Email Address already exist!');
});