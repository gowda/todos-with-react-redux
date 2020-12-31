describe('TodoMVC - no todos', () => {
  beforeEach(() => cy.visit('http://localhost:3000'));

  it('hides the list', () => {
    cy.get('.main').should('not.exist');
  });

  it('hides the footer', () => {
    cy.get('.footer').should('not.exist');
  });
});
