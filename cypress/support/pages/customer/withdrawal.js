class Withdrawals{

    withdraw(amount){
        cy.get('[placeholder="amount"]').type(amount)
        cy.xpath("//button[text()='Withdraw']").click()
    }
    
}

export default new Withdrawals()