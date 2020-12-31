describe('TodoMVC - clear completed', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.new-todo').type('test todo 1{enter}');
    cy.get('.new-todo').type('test todo 2{enter}');
    cy.get('.new-todo').type('test todo 3{enter}');
  });

  describe('when no completed item', () => {
    it('is not visible', () => {
      cy.get('.clear-completed').should('not.exist');
    });
  });

  describe('when completed present', () => {
    beforeEach(() => {
      cy.get('.todo-list li .toggle').eq(0).click();
    });

    it('is visible', () => {
      cy.get('.clear-completed').should('be.visible');
    });

    it('clears completed', () => {
      cy.get('.clear-completed').click();
      cy.get('.todo-count').should('have.text', '2 items left');
    });
  });
});
