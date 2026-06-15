const { BasePage } = require('./basePage');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName) {
    await this.page.locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { InventoryPage };