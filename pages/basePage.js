class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async getTitle() {
    return await this.page.title();
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }
}

module.exports = { BasePage };