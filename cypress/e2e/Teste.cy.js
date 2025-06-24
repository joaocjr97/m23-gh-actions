/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { homePage } = require("../support/pages/home.page.js");

describe('Validações de Categorias', () => {

  beforeEach(() => {
    cy.login(email, senha)
  })

  it('categories should be visible', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'categories.json' }).as('getCategories')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length.greaterThan', 50)
  })

  it('categories should be empty', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'noCategories.json' }).as('getCategoriesEmpty')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length', 1)
  })

  it('categories should be empty with error', () => {
    cy.intercept('GET', '**/public/getCategories', { statusCode: 500 }).as('getCategoriesError')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length', 1)
  })
})