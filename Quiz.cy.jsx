const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    // Specify the component testing framework
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  e2e: {
    // Specify the base URL for end-to-end testing
    baseUrl: 'http://localhost:3000',
    // Define where to find your end-to-end tests
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
});