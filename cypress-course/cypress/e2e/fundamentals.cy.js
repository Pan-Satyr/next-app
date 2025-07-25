describe('Navigates to fundamentals test and accordion functionality', () => {
  it('Visits page, checks header and accordion functionality', () => {
    cy.visit('/fundamentals');
    cy.getDataTest('fundamentals-header').should(
      'contain.text',
      'Testing Fundamentals'
    );
    cy.contains(/Your tests will exist in a describe block/i).should(
      'not.be.visible'
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      'be.visible'
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      'not.be.visible'
    );
  });
});
