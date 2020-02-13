const { Builder, Capabilities } = require('selenium-webdriver');
require('selenium-webdriver/chrome');
require('chromedriver');

export const E2E_URL = 'http://localhost:3000';
export const SELENIUM_TIMEOUT = 20000;

var chromeCapabilities = Capabilities.chrome();
//setting chrome options
var chromeOptions = {
  args: ['--headless', '--test-type']
};
chromeCapabilities.set('chromeOptions', chromeOptions);

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

export const driver = new Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();
