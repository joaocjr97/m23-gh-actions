const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    reportFilename: "index.html",
    html: true,
    json: true
  }
});