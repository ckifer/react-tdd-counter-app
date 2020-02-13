const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
require('selenium-webdriver/chrome');
require('chromedriver');

var chromeCapabilities = Capabilities.chrome();
//setting chrome options
var chromeOptions = {
  args: ['--headless', '--test-type']
};
chromeCapabilities.set('chromeOptions', chromeOptions);

const url = 'http://localhost:3000';

let driver;
const waitUntilTime = 20000;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

beforeAll(done => {
  driver = new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
  driver.get(url).then(done);
});

beforeEach(done => {
  driver.get(url).then(done);
});

afterAll(done => {
  driver.quit().then(done);
});

async function getElementById(id) {
  const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime);
  return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}

async function getElementByXPath(xpath) {
  const el = await driver.wait(
    until.elementLocated(By.xpath(xpath)),
    waitUntilTime
  );
  return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}

describe('E2E - Selenium Webdriver', () => {
  it('Clicks increment button', async () => {
    // query element and click
    const el = await getElementByXPath('//*[@data-test="increment-button"]');
    el.click();
    const display = await getElementById('counter-display');
    // make assertion
    expect(await display.getText()).toContain('1');
  });

  it('Clicks the decrement button and error displays', async () => {
    //   // query element and click
    const el = await getElementByXPath('//*[@data-test="decrement-button"]');
    el.click();
    const display = await getElementById('counter-display');
    const errorDisplay = await getElementById('error-display');

    expect(await display.getText()).toContain('0') &&
      expect(errorDisplay).toExist();
  });

  it('increment then decrement', async () => {
    //   // query element and click
    const inc = await getElementByXPath('//*[@data-test="increment-button"]');
    const dec = await getElementByXPath('//*[@data-test="decrement-button"]');
    inc.click();
    inc.click();
    dec.click();
    const display = await getElementById('counter-display');

    expect(await display.getText()).toContain('1');
  });
});
