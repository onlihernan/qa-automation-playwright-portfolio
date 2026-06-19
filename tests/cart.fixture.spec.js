const { test, expect } = require('../fixtures');
const { CartPage } = require('../pages/cartPage');

test.describe('Cart - using pageWithCartItem fixture', () => {

  test('should show the pre-added product in cart', async ({ pageWithCartItem }) => {
    const cartPage = new CartPage(pageWithCartItem);

    await pageWithCartItem.click('.shopping_cart_link');

    await cartPage.validateProductInCart('Sauce Labs Backpack');
    await cartPage.validatePrice('$29.99');
    await cartPage.validateQuantity('1');
  });

});