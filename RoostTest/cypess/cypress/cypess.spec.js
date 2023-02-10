

describe('User visits homepage', () => {
  it('successfully loads and has a red background', () => {
    cy.visit('/')
    cy.contains('Welcome to our site!')
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})