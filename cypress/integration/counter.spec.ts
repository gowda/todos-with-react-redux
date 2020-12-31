describe('TodoMVC - counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('without any item', () => {
    beforeEach(() => {
      cy.get('.new-todo').type('test todo{enter}');
      cy.get('.toggle-all').click();
    });

    it('shows count', () => {
      cy.get('.todo-count').should('have.text', '0 items left');
    });
  });

  describe('when single item present', () => {
    beforeEach(() => {
      cy.get('.new-todo').type('test todo{enter}');
    });

    it('shows count', () => {
      cy.get('.todo-count').should('have.text', '1 item left');
    });
  });

  describe('when multiple items present', () => {
    beforeEach(() => {
      cy.get('.new-todo').type('test todo 1{enter}');
      cy.get('.new-todo').type('test todo 2{enter}');
    });

    it('shows count', () => {
      cy.get('.todo-count').should('have.text', '2 items left');
    });

    describe('with completed', () => {
      beforeEach(() => {
        cy.get('.todo-list li .toggle').eq(0).click();
      });

      it('shows count for todo only', () => {
        cy.get('.todo-count').should('have.text', '1 item left');
      });
    });
  });
});
