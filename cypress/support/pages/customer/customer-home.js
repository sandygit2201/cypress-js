class CustomerHomePage{

    navigateToDeposit(){
        cy.get("[ng-class='btnClass2']").click()
        cy.contains('Amount to be Deposited').should('be.visible')
    }

    navigateToWithdrawals(){
        cy.get("button[ng-class='btnClass3']").click()
        cy.contains('Amount to be Withdrawn').should('be.visible')
   
    }

    

}

export default new CustomerHomePage()