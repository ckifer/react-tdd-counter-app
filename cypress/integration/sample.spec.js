// end to end test using cypress

const url = 'http://localhost:3000';

describe('first E2E test', () => {
  it('Page loads', () => {
    // visit page
    const page = cy.visit(url);
    page.should('exist');
  });
});

describe('test functionality', () => {
  it('Clicks the increment button', () => {
    // visit page
    cy.visit(url);

    // query element and click
    cy.contains('Increment').click();

    // make assertion
    cy.get('#counter-display').should('contain.text', '1');
  });

  it('Clicks the decrement button and error displays', () => {
    // visit page
    cy.visit(url);

    // query element and click
    cy.contains('Decrement').click();

    // make assertion
    cy.get('#counter-display').should('contain.text', '0') &&
      cy.get('#error-display').should('exist');
  });

  it('increment then decrement', () => {
    // visit page
    cy.visit(url);

    // query element and click
    cy.contains('Increment')
      .click().click();
    cy.wait(100);
    cy.contains('Decrement')
      .click();

    // wait often
    cy.wait(100);

    // make assertion
    cy.get('#counter-display').should('contain.text', '1');
  });
});
