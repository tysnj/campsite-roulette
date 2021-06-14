// import Cypress from "cypress"
// import {jsData, vueData, angularData, reactData, htmlData, cssData, sassData} from '../fixtures/stories_data'

const jsEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=javascript&tags=story"
const vueEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=Vue.js&tags=story"
const angularEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=AngularJS&tags=story"
const reactEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=React&tags=story"
const cssEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=CSS3&tags=story"
const htmlEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=HTML5&tags=story"
const sassEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query= Sass&tags=story"

Cypress.Commands.add('interceptStories', () => {
  cy.fixture('js_stories.json')
    .then(data => {
      cy.intercept('GET', jsEndpoint, {
        statusCode: 201,
        delay: 100,
        result: data
      })
    })
  cy.fixture('vue_stories.json')
    .then(data => {
      cy.intercept('GET', vueEndpoint, {
        statusCode: 201,
        delay: 100,
        result: data
      })
    })
  cy.fixture('angular_stories.json')
    .then(data => {
      cy.intercept('GET', angularEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('react_stories.json')
    .then(data => {
      cy.intercept('GET', reactEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('css_stories.json')
    .then(data => {
      cy.intercept('GET', cssEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('html_stories.json')
    .then(data => {
      cy.intercept('GET', htmlEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('sass_stories.json')
    .then(data => {
      cy.intercept('GET', sassEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })  
  })
  
  // cy.fixture('js_stories.json').as('jsData')
  // cy.fixture('vue_stories.json').as('vueData')
  // cy.fixture('angular_stories.json').as('angularData')
  // cy.fixture('react_stories.json').as('reactData')
  // cy.fixture('html_stories.json').as('htmlData')
  // cy.fixture('css_stories.json').as('cssData')
  // cy.fixture('sass_stories.json').as('sassData')
  
  // cy.server();
  // cy.route({
    //     method: "GET",
    //     url: jsEndpoint
    // }).as("getJS");
    // cy.wait("@getJS", {timeout: 15000});
    // cy.visit("/");


    //   cy.intercept('GET', jsEndpoint, jsData).as('getJS')
    //   cy.intercept('GET', vueEndpoint, vueData).as('getVue')
    //   cy.intercept('GET', angularEndpoint, angularData).as('getAngular')
    //   cy.intercept('GET', reactEndpoint, reactData).as('getReact')
    //   cy.intercept('GET', htmlEndpoint, htmlData).as('getHtml')
    //   cy.intercept('GET', cssEndpoint, cssData).as('getCss')
    //   cy.intercept('GET', sassEndpoint, sassData).as('getSass')