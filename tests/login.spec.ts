import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.pause();
  await page.getByTestId('nav-form-elements').click();
  await page.getByTestId('username-input').click();
  await page.getByTestId('username-input').fill('test@gmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('admin');
  await page.getByTestId('remember-checkbox').click();
  await page.getByTestId('login-submit').click();
  await expect(page.getByTestId('success-message').getByRole('paragraph')).toContainText('Form submitted successfully! This message will disappear in 3 seconds.');
  await page.pause();
})