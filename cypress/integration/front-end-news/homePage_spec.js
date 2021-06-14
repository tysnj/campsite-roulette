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


describe('The Test', () => {
  beforeEach(() => {
    cy.interceptStories()
  });

  it.only('should intercept the network request', () => {
    cy.wait('@getStubbed')
      .its('response.statusCode')
      .should('eq', 200)
    });

   it('should provide stubbed data', () => {
    cy.wait('@getStubbed')
    // cy.get('.movies-container')
    // .get('.card')
    // .should('have.length', 8)
    // .should('be.visible')
    }); 
});


describe('Home Page Loading', () => { 
  beforeEach(() => {
    cy.interceptStories()
    cy.wait('@getStubbed')
  });
});