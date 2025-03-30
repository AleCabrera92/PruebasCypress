describe('Pruebas de login', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Form Authentication').click()
  })

  it('Login correcto con usuario válido', () => {
    cy.get('#username').should('be.visible').type('tomsmith')
    cy.get('#password').should('be.visible').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  })

  it('Login incorrecto con usuario no válido', () => {
    cy.get('#username').should('be.visible').type('tomsmithy')
    cy.get('#password').should('be.visible').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
  })

  it('Login incorrecto con contraseña no válida', () => {
    cy.get('#username').should('be.visible').type('tomsmith')
    cy.get('#password').should('be.visible').type('SuperSecretPassword!!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your password is invalid!')
  })

})