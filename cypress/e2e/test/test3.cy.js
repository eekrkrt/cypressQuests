/// <reference types="cypress" />

describe('test suit', ()=>{
    beforeEach(() => {
        const baseUrl1 = Cypress.env('baseUrl1');
        const baseUrl2 = Cypress.env('baseUrl2');
        cy.visit(baseUrl1);

    })

    it('test url', ()=> {

        cy.url().should('include', 'sale')

        cy.url().should('eq', 'https://www.google.com/')

    })

    it('test title', ()=> {

        cy.url().should('include', 'sale')

        cy.title().should('eq', 'erisale')

    })

})