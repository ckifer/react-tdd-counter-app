const { By, Key, until } = require('selenium-webdriver');
import {
  E2E_URL,
  SELENIUM_TIMEOUT,
  driver
} from './utilities/selenium-options';

beforeEach(done => {
  driver.get(E2E_URL).then(done);
});

afterAll(done => {
  driver.quit().then(done);
});

async function getElementById(id) {
  const el = await driver.wait(
    until.elementLocated(By.id(id)),
    SELENIUM_TIMEOUT
  );
  return await driver.wait(until.elementIsVisible(el), SELENIUM_TIMEOUT);
}

async function getElementByXPath(xpath) {
  const el = await driver.wait(
    until.elementLocated(By.xpath(xpath)),
    SELENIUM_TIMEOUT
  );
  return await driver.wait(until.elementIsVisible(el), SELENIUM_TIMEOUT);
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
