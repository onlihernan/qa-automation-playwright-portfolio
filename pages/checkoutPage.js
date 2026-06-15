const { BasePage } = require('./basePage');
const { expect } = require('@playwright/test');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.postalCode, postalCode);
    await this.page.click(this.continueButton);
  }

  async validateOverview() {
    await expect(this.page.locator('.title')).toHaveText('Checkout: Overview');
  }

  async finish() {
    await this.page.click(this.finishButton);
  }

  async validateSuccessfulPurchase() {
    await expect(this.page.locator(this.successMessage)).toBeVisible();
  }
}

module.exports = { CheckoutPage };