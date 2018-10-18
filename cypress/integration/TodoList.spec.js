describe('TodoList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('shows TodoList', () => {
    cy.get('[data-test="TodoList"]').should('exist')
  })

  it('marks the todo item as done if the checkbox is clicked', () => {
    cy.get(':nth-child(1) > div > .mr2')
      .as('checkbox')
      .click()
    cy.get('@checkbox').should('be.checked')
  })
})
