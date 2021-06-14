// import Cypress from "cypress"
import {jsData, vueData, angularData, reactData, htmlData, cssData, sassData} from '../fixtures/stories_data'

const jsEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=javascript&tags=story"
const vueEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=Vue.js&tags=story"
const angularEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=AngularJS&tags=story"
const reactEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=React&tags=story"
const cssEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=CSS3&tags=story"
const htmlEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query=HTML5&tags=story"
const sassEndpoint = "http://hn.algolia.com/api/v1/search_by_date?query= Sass&tags=story"

Cypress.Commands.add('interceptStories', () => {
  // cy.fixture('js_stories.json').as('jsData')
  // cy.fixture('vue_stories.json').as('vueData')
  // cy.fixture('angular_stories.json').as('angularData')
  // cy.fixture('react_stories.json').as('reactData')
  // cy.fixture('html_stories.json').as('htmlData')
  // cy.fixture('css_stories.json').as('cssData')
  // cy.fixture('sass_stories.json').as('sassData')

  
  cy.intercept(jsEndpoint,  jsData).as('getJS')
    .visit('/')
  cy.intercept(vueEndpoint,  vueData).as('getVue')
  cy.intercept(angularEndpoint,  angularData).as('getAngular')
  cy.intercept(reactEndpoint,  reactData).as('getReact')
  cy.intercept(htmlEndpoint,  htmlData).as('getHtml')
  cy.intercept(cssEndpoint,  cssData).as('getCss')
  cy.intercept(sassEndpoint,  sassData).as('getSass')
})