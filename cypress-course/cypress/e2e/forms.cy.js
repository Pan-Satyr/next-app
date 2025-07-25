describe('Form tests', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });
  it('Test subscribe form', () => {
    cy.contains(/Testing Forms/i);
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
    cy.get('@subscribe-input').type('alonsoram@gmail.com');
    cy.contains(/Successfully subbed/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Successfully subbed: alonsoram@gmail.com!/i).should('exist');
    cy.wait(3000);
    cy.contains(/Successfully subbed: alonsoram@gmail.com!/i).should(
      'not.exist'
    );
    cy.get('@subscribe-input').type('alonsoram@gmail.io'); //this field validation takes non-.com adresses as error, for testing purposes
    cy.contains(/Invalid email: alonsoram@gmail.io!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Invalid email: alonsoram@gmail.io!/i).should('exist');
    cy.wait(3000);
    cy.contains(/Invalid email: alonsoram@gmail.io!/i).should('not.exist');
    cy.contains(/fail!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/fail!/i).should('exist');
  });
});
