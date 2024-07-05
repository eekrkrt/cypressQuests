/// <reference types="cypress" />

describe('MATENGO automation project', ()=>{

    it('create an account', ()=> {

        cy.visit('https://magento.softwaretestingboard.com/')
        cy.url().should('include', 'magento')
        cy.get('.panel > .header > :nth-child(3) > a').click()

        cy.get('#firstname').type('emre')
        cy.get('#lastname').type('kara')
        cy.get('#email_address').type('qkakakura@gmail.com')
        cy.get('#password').type('Emrekkk42*')
        cy.get('#password-confirmation').type('Emrekkk42*')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        
        cy.url().should('include', 'customer/account/')
        cy.title().should('eq', 'My Account')
        cy.get('.message-success > div').should('contain.text', 'Thank')

    })

    it('login', ()=> {

        cy.visit('https://magento.softwaretestingboard.com/')
        cy.url().should('include', 'magento')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('akakura@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Emrekkk42*')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        // Wait for the welcome message to appear
        cy.get('.logged-in').should('be.visible');
        // Assert that the welcome message contains the expected text
        cy.get('.logged-in').should('contain.text', 'Welcome');
    })

    it('tops', ()=> {

        cy.visit('https://magento.softwaretestingboard.com/')
        cy.url().should('include', 'magento')
        // ● Cliquer sur "tops" et sélectionner le premier produit
        cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover')
        cy.get('#ui-id-17').click()
        // ● Choisir une taille pour le produit sélectionné
        cy.get('.swatch-opt-724 > .size > .swatch-attribute-options > #option-label-size-143-item-170').click()





    })

    it.only('add cart', ()=> {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.url().should('include', 'magento')

        // ● Cliquer sur "tops" et 
        cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover')
        cy.get('#ui-id-17').click()

        //sélectionner le premier produit
        cy.get('img[alt="Cassius Sparring Tank"]').should('be.visible').and('have.attr', 'src').and('include', 'mt12-blue_main_1.jpg'); 
        cy.get('img[alt="Cassius Sparring Tank"]').click()

        // ● Choisir une taille pour le produit sélectionné

        cy.get('#option-label-size-143-item-170').should('be.visible')
        cy.get('#option-label-size-143-item-170').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#qty').clear().type('12')
        cy.get('#product-addtocart-button').click()





        // Locate the image element using its alt attribute
        // additional verification on the src attribute if needed

        


        // ● Ajouter le produit au panier
       // cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').trigger('mouseover')

        // ● Consulter le panier et modifier la quantité du produit
        





    })

    it('validation', ()=> {
       // ● Remplir les informations de facturation et de livraison
       // ● Valider la commande.
        



        
    })


})