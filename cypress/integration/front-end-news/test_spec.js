describe('The Test', () => {
  beforeEach(() => {
    cy.interceptStories()
  });

  it('should intercept the network requests', () => {
    cy.wait('@getJS')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@getVue')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@getAngular')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@getReact')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@getHtml')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@getCss')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@getSass')
      .its('response.statusCode')
      .should('eq', 200)
  })
});