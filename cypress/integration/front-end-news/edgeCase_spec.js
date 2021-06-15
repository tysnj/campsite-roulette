describe('Error Handling and Page Loading', () => {

  it('Should load placeholders while getting data', () => {
    cy.visit('/')
    cy.get('.placeholderContainer').should('be.visible')
  });

  it('Should be redirected to home page on visiting bad url', () => {
    cy.visit('/foo')
    cy.url().should('eq', 'http://localhost:3000/' )
  })

  it('should not display error if there is no error', () => {
      cy.visit('/').get('main')
      .contains(`Something's gone wrong. Please try again`)
      .should('not.exist')
  });
});