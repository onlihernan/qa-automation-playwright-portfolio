const { test: base } = require('@playwright/test');
const { LoginPage } = require('./pages/loginPage');
const { InventoryPage } = require('./pages/inventoryPage');

const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await use(page);
  },

  pageWithCartItem: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addProductToCart('Sauce Labs Backpack');

    await use(page);
  }
});

module.exports = { test };