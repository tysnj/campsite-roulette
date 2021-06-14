describe('App', () => {
  beforeEach(() => {
    cy.interceptStories()
    cy.visit('/')
  })

  it('Should display a page with a nav bar', () => {
    cy.get('nav')
  })

})