import {jsData, vueData, angularData, reactData, htmlData, cssData, sassData} from '../fixtures/stories_data'

const jsEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=javascript&tags=story"
const vueEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=Vue.js&tags=story"
const angularEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=AngularJS&tags=story"
const reactEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=React&tags=story"
const cssEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=CSS3&tags=story"
const htmlEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=HTML5&tags=story"
const sassEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=Sass&tags=story"

Cypress.Commands.add('interceptStories', () => {
  cy.fixture('../fixtures/js_response.json')
    .then(data => {
      cy.intercept('GET', jsEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('../fixtures/vue_response.json')
    .then(data => {
      cy.intercept('GET', vueEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('../fixtures/angular_response.json')
    .then(data => {
      cy.intercept('GET', angularEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('../fixtures/react_stories.json')
    .then(data => {
      cy.intercept('GET', reactEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('../fixtures/css_response.json')
    .then(data => {
      cy.intercept('GET', cssEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('../fixtures/html_stories.json')
    .then(data => {
      cy.intercept('GET', htmlEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('../fixtures/sass_stories.json')
    .then(data => {
      cy.intercept('GET', sassEndpoint, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })  
  })
  
Cypress.Commands.add('swoopStories', () => { 
  cy.intercept(jsEndpoint, jsData).as('getJS')
  cy.intercept(vueEndpoint, vueData).as('getVue')
  cy.intercept(angularEndpoint, angularData).as('getAngular')
  cy.intercept(reactEndpoint, reactData).as('getReact')
  cy.intercept(htmlEndpoint, htmlData).as('getHtml')
  cy.intercept(cssEndpoint, cssData).as('getCss')
  cy.intercept(sassEndpoint, sassData).as('getSass')
  cy.wait(['@getJS', '@getVue', '@getAngular', '@getReact', '@getHtml', '@getCss', '@getSass'], {timeout: 35000})
  .visit('http://localhost:3000/')
})

Cypress.Commands.add('stealStories', () => {
  cy.intercept(jsEndpoint, { fixture: 'js_stories.json' }).as('getJS')
  cy.intercept(vueEndpoint, { fixture: 'vue_stories.json' }).as('getVue')
  cy.intercept(angularEndpoint, { fixture: 'angular_stories.json' }).as('getAngular')
  cy.intercept(reactEndpoint, { fixture: 'react_stories.json' }).as('getReact')
  cy.intercept(htmlEndpoint, { fixture: 'html_stories.json' }).as('getHtml')
  cy.intercept(cssEndpoint, { fixture: 'css_stories.json' }).as('getCss')
  cy.intercept(sassEndpoint, { fixture: 'sass_stories.json' }).as('getSass')
  cy.wait(['@getJS', '@getVue', '@getAngular', '@getReact', '@getHtml', '@getCss', '@getSass'], {timeout: 35000})
  .visit('http://localhost:3000/')
})

Cypress.Commands.add('saveStory', () => {
  cy.get('[data-cy="0"]').within(() => {
    cy.get('[data-cy=save-option]').click({force: true})
  });
})

Cypress.Commands.add('markStoryRead', () => {
  cy.get('[data-cy="0"]').within(() => {
    cy.get('[data-cy=read-option]').click({force: true})
  });
})