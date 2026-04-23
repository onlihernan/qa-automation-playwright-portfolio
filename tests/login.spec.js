const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const loginData = require('../data/loginData');

loginData.forEach((data) => {

  test(`login test: ${data.testName}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(data.username, data.password);

    if (data.expected === 'success') {

      await expect(loginPage.inventoryContainer).toBeVisible();

    } else {

      await expect(page.locator('.error-message-container')).toBeVisible();

    }

  });

});