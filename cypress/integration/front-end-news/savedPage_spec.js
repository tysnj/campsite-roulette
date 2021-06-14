describe('Saved Page', () => {
  it('Should be at the url /saved', () => {
    cy.visit('/saved')
    cy.url().should('eq', 'http://localhost:3000/saved' )
  })

  it('Should display the saved story', () => {
    cy.interceptStories()
    cy.visit('/')
    cy.saveStory()
    cy.get('[data-cy=saved-link]').click()
    cy.get('[data-cy=article-image]').should('be.visible')

  });

});