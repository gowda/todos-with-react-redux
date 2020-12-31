describe('TodoMVC - mark all as completed', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.new-todo').type('test todo 1{enter}');
    cy.get('.new-todo').type('test todo 2{enter}');
    cy.get('.new-todo').type('test todo 3{enter}');
  });

  it('clicking marks every item as complete', () => {
    cy.get('.toggle-all').click();
    cy.get('.todo-list li').eq(0).should('have.class', 'completed');
    cy.get('.todo-list li').eq(1).should('have.class', 'completed');
    cy.get('.todo-list li').eq(2).should('have.class', 'completed');
  });

  it('marking every item as complete checks the button', () => {
    cy.get('.todo-list li .toggle').eq(0).click();
    cy.get('.todo-list li .toggle').eq(1).click();
    cy.get('.todo-list li .toggle').eq(2).click();
    cy.get('.toggle-all').should('be.checked');
  });

  describe('when all items are completed', () => {
    beforeEach(() => {
      cy.get('.toggle-all').click();
    });
    it('marking every item as todo unchecks the button', () => {
      cy.get('.todo-list li .toggle').eq(0).click();
      cy.get('.todo-list li .toggle').eq(1).click();
      cy.get('.todo-list li .toggle').eq(2).click();
      cy.get('.toggle-all').should('not.be.checked');
    });

    it('marking single item as todo unchecks the button', () => {
      cy.get('.todo-list li .toggle').eq(0).click();
      cy.get('.toggle-all').should('not.be.checked');
    });
  });
});
