// import {jsData, vueData, angularData, reactData, htmlData, cssData, sassData} from '../fixtures/stories_data'

/*
const jsEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=javascript&tags=story"
const vueEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=Vue.js&tags=story"
const angularEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=AngularJS&tags=story"
const reactEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=React&tags=story"
const cssEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=CSS3&tags=story"
const htmlEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=HTML5&tags=story"
const sassEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query= Sass&tags=story"
*/

//Network Endpoints to Stub
const jsEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=JavaScript&tags=story";
const vueEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=Vue.js&tags=story";
const angularEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=AngularJS&tags=story";
const reactEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=React&tags=story";
const cssEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=CSS3&tags=story";
const htmlEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=HTML5&tags=story";
const sassEndpoint = "https://hn.algolia.com/api/v1/search_by_date?query=Sass&tags=story";


Cypress.Commands.add('interceptStories', () => {
  /*
  cy.fixture('js_stories.json')
    .then(data => {
      cy.intercept(jsEndpoint, {
        statusCode: 200,
        delay: 100,
        body: data
      })
    })
  cy.fixture('vue_stories.json')
    .then(data => {
      cy.intercept(vueEndpoint, {
        statusCode: 200,
        delay: 100,
        body: data
      })
    })
  cy.fixture('angular_stories.json')
    .then(data => {
      cy.intercept(angularEndpoint, {
        statusCode: 200,
        delay: 100,
        body: data
      })
    })
  cy.fixture('react_stories.json')
    .then(data => {
      cy.intercept(reactEndpoint, {
        statusCode: 200,
        delay: 100,
        body: data
      })
    })
  cy.fixture('css_stories.json')
    .then(data => {
      cy.intercept(cssEndpoint, {
        statusCode: 200,
        delay: 100,
        body: data
      })
    })
  cy.fixture('html_stories.json')
    .then(data => {
      cy.intercept(htmlEndpoint, {
        statusCode: 200,
        delay: 100,
        body: data
      })
    })
  cy.fixture('sass_stories.json')
    .then(data => {
      cy.intercept(sassEndpoint, {
        statusCode: 200,
        delay: 100,
        body: data
      })
    })
    */

    //Stub Network Data with Local JSON
    cy.intercept('GET', jsEndpoint, { fixture: 'js_response.json' })
    cy.intercept('GET', vueEndpoint, { fixture: 'vue_response.json' })
    cy.intercept('GET', angularEndpoint, { fixture: 'angular_response.json' })
    cy.intercept('GET', reactEndpoint, { fixture: 'react_response.json' })
    cy.intercept('GET', cssEndpoint, { fixture: 'css_response.json' })
    cy.intercept('GET', htmlEndpoint, { fixture: 'html_response.json' })
    cy.intercept('GET', sassEndpoint, { fixture: 'sass_response.json' })

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