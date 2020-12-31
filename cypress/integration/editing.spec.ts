describe('TodoMVC - editing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.new-todo').type('test todo 1{enter}');
    cy.get('.new-todo').type('test todo 2{enter}');
    cy.get('.new-todo').type('test todo 3{enter}');
  });

  it('focuses the input', () => {
    cy.get('.todo-list li').eq(1).dblclick();
    cy.get('.todo-list li').eq(1).should('have.class', 'editing');
    cy.get('.todo-list li .edit').should('be.visible');
    cy.get('.todo-list li .edit').should('be.focused');
    cy.get('.todo-list li .edit').should('have.value', 'test todo 2');
  });

  it('change todo & press enter', () => {
    cy.get('.todo-list li').eq(1).dblclick();
    cy.get('.todo-list li .edit').type(' updated{enter}');
    cy.get('.todo-list li').eq(1).should('have.text', 'test todo 2 updated');
    cy.get('.todo-count').contains('3');
  });

  it('trims input before updating todo', () => {
    cy.get('.todo-list li').eq(1).dblclick();
    cy.get('.todo-list li .edit').type(' updated     {enter}');
    cy.get('.todo-list li label')
      .eq(1)
      .should('have.text', 'test todo 2 updated');
    cy.get('.todo-count').contains('3');
  });

  it('does not update todo if blank', () => {
    cy.get('.todo-list li').eq(1).dblclick();
    cy.get('.todo-list li .edit').clear();
    cy.get('.todo-list li .edit').type('     {enter}');
    cy.get('.todo-list li label').eq(1).should('have.text', 'test todo 2');
  });
});
