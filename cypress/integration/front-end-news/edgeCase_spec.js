describe('Error Handling and Page Loading', () => {

  it('Should load placeholders while getting data', () => {
    cy.visit('/')
    cy.get('.placeholderContainer').should('be.visible')
  });

  it('Should be redirected to home page on visiting bad url', () => {
    cy.visit('/foo')
    cy.url().should('eq', 'http://localhost:3000/' )
  })

  it('Should not display error if there is no error', () => {
      cy.visit('/').get('main')
      .contains(`Something's gone wrong. Please try again`)
      .should('not.exist')
  });

  it('Should direct the user to more news if they want', () => {
    cy.visit('/').get('[data-cy=footer-link]').click()
    .should('have.attr', 'href', 'https://hn.algolia.com/?q=front-end+technology')
    .should('have.attr', 'target', '_blank')
    
});
});