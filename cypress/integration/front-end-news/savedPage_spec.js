describe('Saved Page', () => {
  it('Should be at the url /saved', () => {
    cy.visit('/saved')
    cy.url().should('eq', 'http://localhost:3000/saved' )
  })
  
    it('Should display that there are no saved stories', () => {
      cy.interceptStories()
      cy.visit('/')
      cy.wait(2000)
      cy.get('[data-cy=saved-link]').click()
      cy.get('main').contains('No saved stories!')
    })

  it('Should display the saved story', () => {
    cy.interceptStories()
    cy.visit('/')
    cy.wait(2000)
    cy.saveStory()
    cy.get('[data-cy=saved-link]').click()
    cy.wait(2000)
    cy.get('[data-cy=article-image]').should('be.visible')
  });
});