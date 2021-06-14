describe('App', () => {
  beforeEach(() => {
    cy.interceptStories()
    cy.visit('/')
  });

  it('Should display a page with a nav bar', () => {
    cy.get('nav').should('be.visible')
  });

  it('Should display a page with an article section', () => {
    cy.get('main').should('be.visible')
  });

  it('Should display a page with an footer', () => {
    cy.get('footer').should('be.visible')
  })

})