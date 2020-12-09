/// <reference types="cypress" />

describe('parabank', () => {
    it('devem poder realizar um cadastro no sistema', () => {
        cy.visit('http://parabank.parasoft.com/parabank/register.htm');

        cy.get('[name="customer.firstName"]').type('Jose Guilherme');
        cy.get('input[name="customer.firstName"]').should('have.value', 'Jose Guilherme');

        cy.get('[name="customer.lastName"]').type('Prendin Costa');
        cy.get('input[name="customer.lastName"]').should('have.value', 'Prendin Costa');

        cy.get('[name="customer.address.street"]').type('Rua Joao Gualberto, 432');
        cy.get('input[name="customer.address.street"]').should('have.value', 'Rua Joao Gualberto, 432');

        cy.get('[name="customer.address.city"]').type('Curitiba');
        cy.get('input[name="customer.address.city"]').should('have.value', 'Curitiba');

        cy.get('[name="customer.address.state"]').type('Parana');
        cy.get('input[name="customer.address.state"]').should('have.value', 'Parana');

        cy.get('[name="customer.address.zipCode"]').type('81040300');
        cy.get('input[name="customer.address.zipCode"]').should('have.value', '81040300');

        cy.get('[name="customer.phoneNumber"]').type('99999999');
        cy.get('input[name="customer.phoneNumber"]').should('have.value', '99999999');

        cy.get('[name="customer.ssn"]').type('546546');
        cy.get('input[name="customer.ssn"]').should('have.value', '546546');

        cy.get('[name="customer.username"]').type('prendin4');
        cy.get('input[name="customer.username"]').should('have.value', 'prendin4');

        cy.get('[name="customer.password"]').type('testeteste');
        cy.get('input[name="customer.password"]').should('have.value', 'testeteste');

        cy.get('[name="repeatedPassword"]').type('testeteste');
        cy.get('input[name="repeatedPassword"]').should('have.value', 'testeteste');

        cy.get('[value="Register"]').click();
            
    });

    it('devem poder realizar um login no sistema', () => {
        cy.visit('http://parabank.parasoft.com/parabank/index.htm');
        cy.get('[name="username"]').type('prendin4');
        cy.get('[name="password"]').type('testeteste');
        cy.get('[value="Log In"]').click();
    });

    it('devem poder realizar uma tranferencia para outra conta', () => {
        cy.visit('http://parabank.parasoft.com/parabank/index.htm')
        cy.get('[name="username"]').type('prendin4')
        cy.get('[name="password"]').type('testeteste')
        cy.get('[value="Log In"]').click()

        cy.get('#leftPanel > ul > :nth-child(2) > a').click()
        cy.get('.ng-scope > :nth-child(1) > .ng-binding').click()

        cy.get('#leftPanel > ul > :nth-child(3) > a').click()
        cy.wait(3000)
        cy.get('#amount').type('100')
        cy.get('#amount').should('have.value', '100');

        cy.get(':nth-child(4) > .button').click();
        
    });


});