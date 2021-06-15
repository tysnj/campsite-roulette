describe('User Interaction', () => {
  beforeEach(() => {
    cy.interceptStories()
    cy.visit('/')
    cy.saveStory()
    cy.markStoryRead()
  })

  it('Should allow user to undo save from Home page', () => {
    cy.get('[data-cy="0"]').within(() => {
      cy.get('[data-cy=save-option]').click({force: true})
    });
    cy.get('[data-cy=saved-link]').click()
    cy.wait(2000)
    cy.get('main').contains('No saved stories!')
  })

  it('Should allow user to undo mark as read from Home page', () => {
    cy.get('[data-cy="0"]').within(() => {
      cy.get('[data-cy=save-option]').click({force: true})
    });
    cy.get('[data-cy=read-link]').click()
    cy.wait(2000)
    cy.get('main').contains('No read stories!')
  })

})
