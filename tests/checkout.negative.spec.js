const { test } = require('../fixtures');
const { expect } = require('@playwright/test');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

test.describe('Checkout - Negative Cases', () => {

  test('should show error when first name is missing', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.goToCheckout();

    await checkoutPage.fillCheckoutForm('', 'Perez', '2804');
    await expect(loggedInPage.locator('[data-test="error"]')).toBeVisible();
  });

  test('should show error when last name is missing', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.goToCheckout();

    await checkoutPage.fillCheckoutForm('Juan', '', '2804');
    await expect(loggedInPage.locator('[data-test="error"]')).toBeVisible();
  });

  test('should show error when postal code is missing', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.goToCheckout();

    await checkoutPage.fillCheckoutForm('Juan', 'Perez', '');
    await expect(loggedInPage.locator('[data-test="error"]')).toBeVisible();
  });

});