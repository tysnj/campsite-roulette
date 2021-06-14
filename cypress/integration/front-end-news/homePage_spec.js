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
  // beforeEach(() => {
  //   cy.interceptStories()
  //   // cy.visit('/')
  // });

it('should intercept the network request', () => {
  cy.swoopStories()
  cy.get('main').get('div').get('article').should('have.length', 10)
  });

  
});