const { test } = require('../fixtures');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { users } = require('../data/userData');
const { products } = require('../data/productData');

const product = products[0];

users.forEach((user) => {
  test(`E2E purchase flow - ${user.firstName}`, async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.validateProductInCart(product.name);
    await cartPage.validatePrice(product.price);
    await cartPage.validateQuantity(product.quantity);
    await cartPage.goToCheckout();
    await checkoutPage.fillCheckoutForm(user.firstName, user.lastName, user.postalCode);
    await checkoutPage.validateOverview();
    await checkoutPage.finish();
    await checkoutPage.validateSuccessfulPurchase();
  });
});