const { defineConfig } = require("cypress");
const addDownloadPlugin = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      on("task", { addDownloadPlugin });
    },
    env: {
      baseUrl: 'https://filebin.net/',

    }
  }
});


