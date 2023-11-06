import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
