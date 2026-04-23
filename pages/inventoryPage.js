class InventoryPage {

  constructor(page) {
    this.page = page;

    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.backpackName = page.locator('.inventory_item_name').first();
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