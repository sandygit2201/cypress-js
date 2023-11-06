class DepositPage{

    depositAmount(amount){
        
        cy.get("[ng-model='amount']").type(amount)
        cy.get("[type='submit']").last().click()
    }
    
}

export default new DepositPage()