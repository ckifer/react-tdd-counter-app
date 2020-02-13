describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('https://webdriver.io');
    const title = browser.getTitle();
    expect(title).toEqual(
      'WebdriverIO · Next-gen WebDriver test framework for Node.js'
    );
  });
});

describe('E2E - Webdriver.io', () => {
  it('Clicks increment button', () => {
    browser.url('http://localhost:3000/');
    // query element and click
    const el = $('//*[@data-test="increment-button"]');
    el.click();
    const display = $('#counter-display');
    // make assertion
    expect(display.getText()).toContain('1');
  });

  it('Clicks the decrement button and error displays', () => {
    browser.url('http://localhost:3000/');
    // query element and click
    const el = $('//*[@data-test="decrement-button"]');
    el.click();
    const display = $('#counter-display');
    const errorDisplay = $('#error-display');

    expect(display.getText()).toContain('0') && expect(errorDisplay).toExist();
  });

  it('increment then decrement', () => {
    browser.url('http://localhost:3000/');
    // query element and click
    const inc = $('//*[@data-test="increment-button"]');
    const dec = $('//*[@data-test="decrement-button"]');
    inc.click();
    inc.click();
    dec.click();
    const display = $('#counter-display');

    expect(display.getText()).toContain('1');
  });
});
