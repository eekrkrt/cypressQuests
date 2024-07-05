const { defineConfig } = require("cypress");
const addDownloadPlugin = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
  },
  env: {
    baseUrl: 'https://filebin.net/',

  },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", { addDownloadPlugin });
    
    },
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportFilename: 'aggregated-report.html',
      reportTitle: 'Cypress Image Upload Test Report'
    }



});


