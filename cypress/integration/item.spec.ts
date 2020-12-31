describe('TodoMVC - item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.new-todo').type('test todo 1{enter}');
  });

  it('clicking completion marks it as complete', () => {
    cy.get('.todo-list li .toggle').eq(0).click();
    cy.get('.todo-list li').eq(0).should('have.class', 'completed');
  });

  describe('when completed', () => {
    beforeEach(() => {
      cy.get('.todo-list li .toggle').eq(0).click();
    });

    it('clicking completion marks it as todo', () => {
      cy.get('.todo-list li .toggle').eq(0).click();
      cy.get('.todo-list li').eq(0).should('not.have.class', 'completed');
    });
  });

  it('double clicking on label opens editor', () => {
    cy.get('.todo-list li label').eq(0).dblclick();

    cy.get('.todo-list li').eq(0).should('have.class', 'editing');
    cy.get('.todo-list li .edit').should('be.visible');
  });
});
