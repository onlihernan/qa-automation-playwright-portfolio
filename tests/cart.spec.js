const { test } = require('../fixtures');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');

test('validate cart with added product', async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);

  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.goToCart();
  await cartPage.validateProductInCart('Sauce Labs Backpack');
  await cartPage.validatePrice('$29.99');
  await cartPage.validateQuantity('1');
});