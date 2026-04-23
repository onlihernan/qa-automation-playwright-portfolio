const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'on'
  },

  reporter: 'html'

});