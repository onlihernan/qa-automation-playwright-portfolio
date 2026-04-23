const { expect } = require('@playwright/test');

class CartPage {

  constructor(page) {
    this.page = page;

    this.cartItemName = page.locator('.inventory_item_name');
    this.cartItemPrice = page.locator('.inventory_item_price');
    this.cartItemQuantity = page.locator('.cart_quantity');
  }

  async validateProductInCart(expectedName) {
  await expect(this.cartItemName).toHaveText(expectedName);
}

  async validatePrice(expectedPrice) {
  await expect(this.cartItemPrice).toHaveText(expectedPrice);
}

  async validateQuantity(expectedQuantity) {
  await expect(this.cartItemQuantity).toHaveText(expectedQuantity);
}

  async goToCheckout() {
  await this.page.click('#checkout');
  }
}

module.exports = { CartPage };