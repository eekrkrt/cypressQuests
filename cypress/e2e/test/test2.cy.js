/// <reference types="cypress" />

context('second test', ()=>{  
    beforeEach('run before each tests', ()=>{
        cy.visit('/')
    })

    it('test URL', ()=> {

        cy.url().should('include', 'google')

        cy.url().should('eq', 'https://www.google.com/')

    })

    it('test title', ()=> {

        cy.title().should('include', 'Goog')

        cy.title().should('eq', 'Google')

    })

    it('test accept cookies and search', ()=> {

        cy.get('button#L2AGLb div.QS5gu.sy4vM').click();

        cy.get('textarea#APjFqb').should('be.visible');

        cy.get('textarea#APjFqb').type('GALATASARAY{enter}')  

    })

})