describe('custom command test',()=>{
   
    beforeEach('login before each test',()=>{
        cy.loginAndSaveSession('Admin','admin123')
        cy.visit('/')
    })

    it('verify for time at work',()=>{
        cy.visit('/')
        cy.contains('Buzz Latest Posts').should('be.visible')
    })

    it('Employees on Leave Today',()=>{
        cy.visit('/')
        cy.contains('Employee Distribution by Sub Unit').should('be.visible')
    })
    
})