   
/// <reference types="cypress" />

describe('first cypress test', () => {
    // describe: description of test1, 'describe' and 'it' come from mocha library

    it('URL TEST', ()=> {

        cy.visit('https://www.google.com/')
        cy.url().should('include', 'google')

    })

    it('title test', ()=> {

        cy.visit('https://www.google.com/')
        cy.title().should('include', 'ogle')
        cy.title().should('eq', 'google')
        

    })

})