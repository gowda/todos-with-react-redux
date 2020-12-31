describe('TodoMVC - new todo', () => {
  beforeEach(() => cy.visit('http://localhost:3000'));

  it('focuses the input', () => {
    cy.focused().should('have.class', 'new-todo');
  });

  it('adds new todo on input & enter', () => {
    cy.get('.new-todo').type('test todo{enter}');
    cy.get('.todo-count').contains('1');
  });

  it('clears input after new todo is added', () => {
    cy.get('.new-todo').type('test todo{enter}');
    cy.get('.todo-count').contains('1');
    cy.get('.new-todo').should('have.text', '');
  });

  it('trims input before adding new todo', () => {
    cy.get('.new-todo').type('    test todo     {enter}');
    cy.get('.todo-count').contains('1');
    cy.get('.new-todo').should('have.text', '');
  });

  it('does not add new todo if blank', () => {
    cy.get('.new-todo').type('    {enter}');
    cy.get('.new-todo').should('have.text', '');
    cy.get('.main').should('not.exist');
    cy.get('.footer').should('not.exist');
  });
});
