describe('Nav', () => {
  beforeEach(() => {
    cy.interceptStories()
    cy.visit('/')
  })

  it('Should display a logo in the nav bar', () => {
    cy.get('nav')
    .contains('Front-End News')
  })

  it('Should display pages in the nav bar', () => {
    cy.get('[data-cy=home-link]')
    .contains('Home')
    cy.get('[data-cy=saved-link]')
    .contains('Saved')
    cy.get('[data-cy=read-link]')
    .contains('Read')
  })

  it('Should navigate to Home when clicking logo', () => {
    cy.get('[data-cy=logo]').click()
    cy.url().should('eq', 'http://localhost:3000/' )
  })

  it('Should navigate to Home page when clicking Home', () => {
    cy.get('[data-cy=home-link]').click()
    cy.url().should('eq', 'http://localhost:3000/' )
  })

  it('Should navigate to Saved page when clicking Saved', () => {
    cy.get('[data-cy=saved-link]').click()
    cy.url().should('eq', 'http://localhost:3000/saved' )
  })

  it('Should navigate to Read page when clicking Read', () => {
    cy.get('[data-cy=read-link]').click()
    cy.url().should('eq', 'http://localhost:3000/read' )
  })

  it('Should have mobile view', () => {
    cy.viewport(600, 600)
    cy.get('[data-cy=mobile-menu]').should('be.visible')
  })

  it('Should have mobile menu that opens/closes', () => {
    cy.viewport(600, 600)
    cy.get('[data-cy=home-link]').should('not.be.visible')
    cy.get('[data-cy=saved-link]').should('not.be.visible')
    cy.get('[data-cy=read-link]').should('not.be.visible')
    cy.get('[data-cy=mobile-menu]').click()
    cy.wait(1000)
    cy.get('[data-cy=home-link]').should('be.visible')
    cy.get('[data-cy=saved-link]').should('be.visible')
    cy.get('[data-cy=read-link]').should('be.visible')
  })
})