describe('Articles', () => {
  beforeEach(() => {
    cy.interceptStories()
    cy.visit('/')
  });

  it('Should display with image', () => {
    cy.get('[data-cy=article-image]').should('be.visible')
  });

  it('Should display with a posted date', () => {
    cy.get('[data-cy=article-date]').should('be.visible')
  });

  it('Should display with a headline', () => {
    cy.get('[data-cy=article-headline]').should('be.visible')
  });

  it('Should display option to save', () => {
    cy.get('[data-cy=save-option]').should('be.visible')
  });

  it('Should display option to mark as read', () => {
    cy.get('[data-cy=read-option]').should('be.visible')
  });

  it('should be clickable articles with a link that opens in separate tab', () => {
    cy.get('[data-cy="1"]').within(() => {
      cy.get('[data-cy=article-image]').click()
      .should('have.attr', 'target', '_blank')
    })
  });  
});