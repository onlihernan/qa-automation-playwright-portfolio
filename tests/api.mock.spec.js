const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('API Mocking with page.route()', () => {

  test('should display mocked posts instead of real API response', async ({ page }) => {
    const mockedPosts = [
      { id: 1, title: 'Mocked Post One' },
      { id: 2, title: 'Mocked Post Two' },
    ];

    await page.route('**/jsonplaceholder.typicode.com/posts', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockedPosts),
      });
    });

    const filePath = path.resolve(__dirname, '../mock-test-page/index.html');
    await page.goto(`file://${filePath}`);

    await expect(page.locator('.post')).toHaveCount(2);
    await expect(page.locator('.post').first()).toHaveText('Mocked Post One');
    await expect(page.locator('.post').last()).toHaveText('Mocked Post Two');
  });

  test('should handle server error gracefully', async ({ page }) => {
    await page.route('**/jsonplaceholder.typicode.com/posts', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    });

    const filePath = path.resolve(__dirname, '../mock-test-page/index.html');
    await page.goto(`file://${filePath}`);

    await expect(page.locator('#posts-container')).toBeVisible();
  });

});