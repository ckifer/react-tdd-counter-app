describe('first E2E test', () => {
  it('Is a first test', () => {
    // visit page
    cy.visit('http://localhost:3000');

    // query element
    cy.contains('Increment');
    // interact with element

    // make assertion
    expect(true).to.equal(true);
  });
});
