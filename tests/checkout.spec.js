const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { users } = require('../data/userData');
const { products } = require('../data/productData');

const product = products[0];

users.forEach((user) => {

  test(`E2E purchase flow - ${user.firstName}`, async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    
    await cartPage.validateProductInCart(product.name);
    await cartPage.validatePrice(product.price);
    await cartPage.validateQuantity(product.quantity);

    await cartPage.goToCheckout();

    await checkoutPage.fillCheckoutForm(
    user.firstName,
    user.lastName,
    user.postalCode
  );

await checkoutPage.validateOverview();

await checkoutPage.finish();
await checkoutPage.validateSuccessfulPurchase();
  });

});