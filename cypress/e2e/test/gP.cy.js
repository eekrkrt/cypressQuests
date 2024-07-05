/// <reference types="cypress" />

describe('backmarket-registeration', ()=>{

    it('url test', ()=> {

        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.url().should('include', 'market')

    })

    it('title test', ()=> {

        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.title().should('include', 'ack')
        cy.title().should('eq', 'Rejoignez Back Market | Back Market | Back Market')

    })

    it('test accept cookies', ()=> {

        cy.visit('https://preprod.backmarket.fr/fr-fr/register')

        cy.get('[data-qa="accept-cta"] > .MkLAMntR').click();

    })

    it('inscription', ()=> {

        cy.visit('https://preprod.backmarket.fr/fr-fr/register')

        cy.get('[data-qa="accept-cta"] > .MkLAMntR').click();

        cy.get('#firstName').type('GALATA{enter}')

        cy.get('#lastName').type('SARAY{enter}')

        cy.get('#signup-email').type('galatasar@gmail.com{enter}')

        cy.get('#signup-password').type('verbaTim2098')

        cy.get('._2OVE0h6V').click();

        cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click();

    })



})