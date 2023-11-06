class AppHomePage{

    loginAsManager(){
        cy.contains('Bank Manager Login').click()
        cy.contains('Add Customer').should('be.visible')
    }

    navigateToCustomerLogin(){
        cy.contains('Customer Login').click()
        cy.contains('Your Name').should('be.visible')
    }

    navigateToHome(){
        cy.contains('Home').click()
    }
}

export default new AppHomePage()