describe('Home Page', () => {
  beforeEach(() => {
    cy.interceptStories()
    cy.visit('/')
  });

  it('Should be at base url', () => {
    cy.url().should('eq', 'http://localhost:3000/' )
  })

  it('Should display an article', () => {
    cy.get('main').get('div').get('article').should('be.visible')
  });
});