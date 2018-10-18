describe('TodoList', () => {
  it('shows TodoList', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="TodoList"]').should('exist')
  })
})
