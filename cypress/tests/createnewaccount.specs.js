/// <reference types="cypress" />

context('Create New Account', () => {
    beforeEach(() => {
        cy.visit('https://pt.tommy.com/')
    });
    describe('Create New Account tests', () => {
        it('should display new account form errors', () => {
            //cockies button
            cy.get('[data-testid="Button-primary"]').click()
            //Sign-inRegister
            cy.get('[data-testid="sign-in-button"]').click()
            cy.get('[data-testid=register]').click()
            
            //empty required field email
            cy.get('#create-account-email').type('eduardo.tex@gmail.com').clear().blur()
            cy.get("#create-account-email-helper-text").should("be.visible").and("contain", "You need to fill in this field")
            
            //empty required field password
            cy.get('#create-account-password').type('challengepwd123').clear().blur()
            cy.get("#create-account-password-helper-text").should("be.visible").and("contain", "You need to fill in this field")

            //required term and conditions
            cy.get('[data-testid="Button-primary"]').should('contain', 'Create an account').click()
            cy.get(".error-text").should("be.visible").and("contain", "Please confirm you accept the terms and conditions")
            
            //Invalid email format
            cy.get('#create-account-email').type('invalidgmail.com')
            cy.get('[data-testid="Button-primary"]').should('contain', 'Create an account').click()
            cy.get("#create-account-email-helper-text").should("be.visible").and("contain", "Sorry, that doesn't look like an email address")

            //Invalid password format
            cy.get('#create-account-password').type('cha')
            cy.get('[data-testid="Button-primary"]').should('contain', 'Create an account').click()
            cy.get("#create-account-password-helper-text").should("be.visible").and("contain", "Your password needs to be between 5 and 20 characters long")

            //Existing account
             cy.get('#create-account-email').clear().blur()
             cy.get('#create-account-email').type('testatafse+1@gmail.com')
             cy.get('#create-account-password').type('challengepwd123')
             cy.get('#agree-terms').check({force: true})
             //cy.get('[data-testid="checkbox-label]').check()
             
             cy.get('[data-testid="Button-primary"]').should('contain', 'Create an account').click()
             cy.get(".error-text").should("be.visible").and("contain", "Oops, it looks like there is already an account with that email address")

        });
        it('create account with valid data', () => {
            //cockies button
            cy.get('[data-testid="Button-primary"]').click()
            //Sign-inRegister
            cy.get('[data-testid="sign-in-button"]').click()
            cy.get('[data-testid=register]').click()
            
            //email
            cy.get('#create-account-email').type('testatafse+10@gmail.com')
            
            //password
            cy.get('#create-account-password').type('challengepwd123')

            //agree terms
            cy.get('#agree-terms').check({force: true})

            //Submit form
            cy.get('[data-testid="Button-primary"]').should('contain', 'Create an account').click()
            
            //verify successfull account creation
            cy.get(".my-account__title").should("be.visible").and("contain", "My Account")
            
        });
        it('registered user add new address', () => {
            //cockies button
            cy.get('[data-testid="Button-primary"]').click()
            //Sign-inRegister
            cy.get('[data-testid="sign-in-button"]').click()
            
            cy.get('#signin-email').type('testatafse+1@gmail.com')
            cy.get('#signin-password').type('challengepwd123')
            
            //Sign in
            cy.get('[data-testid="Button-primary"]').should('contain', 'Sign in').click()

            //Go to account page
            cy.get(".header-my-account-wrapper",{timeout:10000}).click()
            
            cy.get(".my-account__navigation > li:nth-child(3) > a").should('contain', 'Address Book').click({force: true})
            //cy.get(".my-account__navigation > li:nth-child(3) > a").click()
            
            cy.get('[data-testid="address-add-button"]').click()

            cy.get('#firstName').type('Test')
            cy.get('#lastName').type('Cypress')
            cy.get('#address1').type('Stree adress number 123')
            cy.get('#city').type('Porto')
            cy.get('#state').type('Porto')
            cy.get('#zipCode').type('4000-100')

            cy.get('[data-testid="address-save-button"]').should('contain', 'Save').click()

            cy.get('#country').select('Portugal').should('have.value','PT')

            //delete address after creation so the test can be rerun without creating too much garbage data
            cy.get('[data-testid="address-delete-button"]').click()

        });
    });
});