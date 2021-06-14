import data from "../fixtures/stories_data"
import cy from "cypress"
// import singleMovie from "../fixtures/single-movie"

const baseURL = 'http://hn.algolia.com/api/v1/search_by_date?query=javascript&tags=story'
// const baseURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
// const attributes = '&tags=story'
// const subjects = ['JavaScript', 'Vue.js', 'AngularJS', 'React', 'CSS3', 'HTML5', 'Sass']
Cypress.Commands.add('interceptStories', () => {
  // subjects.forEach(subject => {
  //   cy.intercept(baseURL+subject+attributes, data ).as('getStubbed')
  // })
    cy.intercept(baseURL, data).as('getStubbed')
    .visit('http://localhost:3000/')
})

// Cypress.Commands.add('interceptSingleMovie', () => {
//   cy.intercept(`${baseURL}/694919`, singleMovie).as('getSingleStub')
//     .visit('http://localhost:3000/694919')
//     .get('.movies-container').get('#694919').click()

// })