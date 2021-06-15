describe('Error Handling and Page Loading', () => {

  it('Should load placeholders while getting data', () => {
    cy.get('.placeholderContainer').should('be.visible')
  });

  it('Should be redirected to this page on visiting bad url', () => {
    cy.visit('/foo')
    cy.url().should('eq', 'http://localhost:3000/' )
  })

  it('should display a specific error message when fetch yields a 500 status', () => {
    cy.intercept('http://hn.algolia.com/api/v1/search_by_date?query=JavaScript&tags=story', {
      statusCode: 500
    })
      .visit('http://localhost:3000/')
      .get('h2')
      .contains(`Something's gone wrong. Please try again`)
  });

  it('Should display a specific error message when fetch yields a 404 status', () => {
    cy.intercept('http://hn.algolia.com/api/v1/search_by_date?query=JavaScript&tags=story', {
      statusCode: 404
    })
      .visit('http://localhost:3000/')
      .get('h2')
      .contains(`Something's gone wrong. Please try again`)
  });

  it('Should redirect the user when they access an invalid URL', () => {
    cy.intercept('http://hn.algolia.com/api/v1/search_by_date?query=JavaScript&tags=story', {
      statusCode: 200
    })
      .visit('http://localhost:3000/foo')
      cy.url().should('eq', 'http://localhost:3000/' )
  });
});