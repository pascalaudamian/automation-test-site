import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test('Page title and main heading', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Automation Testing Practice Site');
    await page.pause();
    await expect(page.locator('h2')).toContainText('Automation Test Site');
    await page.pause();
  });

  test('Navigation links are visible and correct', async ({ page }) => {
    await page.goto('/');
    const navItems = [
      'Home',
      'Form Elements',
      'Tables',
      'Dynamic Content',
      'Dialogs & Popups',
      'AJAX Requests',
      'Drag & Drop',
      'iFrames',
      'Locator Practice',
    ];

    for (const item of navItems) {
      await expect(page.getByRole('link', { name: item })).toBeVisible();
    }
    await page.pause();
  });

  test('Section with test page descriptions is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Available Test Pages')).toBeVisible();
    await expect(page.locator('text=Practice with various form elements')).toBeVisible();
    await expect(page.locator('text=Test with sortable and filterable tables')).toBeVisible();
    await page.pause();
  });
});
