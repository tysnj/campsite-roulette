describe('Read Page', () => {
  it('Should be at the url /read', () => {
    cy.visit('/read')
    cy.url().should('eq', 'http://localhost:3000/read' )
  })
  
    it('Should display that there are no read stories', () => {
      cy.interceptStories()
      cy.visit('/')
      cy.wait(2000)
      cy.get('[data-cy=read-link]').click()
      cy.get('main').contains('No read stories!')
    })

  it('Should display the read story', () => {
    cy.interceptStories()
    cy.visit('/')
    cy.wait(2000)
    cy.markStoryRead()
    cy.get('[data-cy=read-link]').click()
    cy.wait(2500)
    cy.get('[data-cy=article-image]').should('be.visible')
  });
});
