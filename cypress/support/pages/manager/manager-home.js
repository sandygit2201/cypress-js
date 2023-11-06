class ManagerHomePage{

    navigateToAddCustomer(){
        cy.contains('Add Customer ').click()
        cy.contains('First Name').should('be.visible')
    }

    navigateToOpenAccount(){
        cy.contains('Open Account').click()
        cy.contains('Currency').should('be.visible')
    }

    navigateToCustomers(){
        cy.contains('Customers').click()
        cy.contains('Delete Customer').should('be.visible')
    }
    
}

export default new ManagerHomePage()