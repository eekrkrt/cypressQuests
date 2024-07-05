/// <reference types="cypress" />

describe('Plugin test - upload file', () => {  //describe = context
    const fileName = 'cypress/fixtures/test-image.png';
    const downloadDir = 'cypress/downloads/';


    beforeEach('run before each tests', () => {
        cy.visit(Cypress.env("baseUrl"))
    })

    it('upload a photo', () => {

        cy.get('input[type="file"]').selectFile(fileName);
        cy.contains('test-image.png').should('be.visible');;
        cy.get(':nth-child(10) > .me-3 > .btn').click()
        cy.get('.modal-body > .nav > .me-3 > .btn').click() // tar
      //  cy.get(':nth-child(2) > .btn').click()  //zi[]
        cy.get('.mt-4 > .btn-danger').click()

    })
})