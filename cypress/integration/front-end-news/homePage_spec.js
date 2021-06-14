/* 
TODO: 
Home Page:
stub data
validate stubbed data
test url
validate render on article image and buttons and title
validate href
validate they open in new tab
validate render in nav
validate mobile view - could be a separate spec
validate mobile menu
validate redirect
validate saved button
validate read button
validate visited story (color)
validate hover
validate logo click
test navigating away and navigating back - confirming saved is still saved
make sure to do sad paths and error handling/redirect

then... do that for other pages
then... do unit tests on utilities if possible
*/


describe('Home Page', () => {
  beforeEach(() => {
    cy.interceptStories()
    cy.visit('/')
  });

  it('should display an article', () => {
    cy.get('main').get('div').get('article').should('be.visible')
  });

  it('should display an article with image', () => {
    cy.get('[data-cy=article-image]').should('be.visible')
  });

  it('should display an article with a posted date', () => {
    cy.get('[data-cy=article-date]').should('be.visible')
  });

  it('should display an article with a headline', () => {
    cy.get('[data-cy=article-headline]').should('be.visible')
  });

  it('should display option to mark as read', () => {
    cy.get('[data-cy=read-option]').should('be.visible')
  });

  it('should display option to mark as read', () => {
    cy.get('[data-cy=read-option]').should('be.visible')
  });

  it('should have clickable articles with a link', () => {
    cy.get('[data-cy="1"]').within(() => {
      cy.get('[data-cy=article-image]').click()
      .should('have.attr', 'target', '_blank')
    })
  });  
});