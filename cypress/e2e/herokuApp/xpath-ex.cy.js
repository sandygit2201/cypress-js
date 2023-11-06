describe('an example for cypress xpath',()=>{

    it('Login script using cypress xpath',()=>{

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.xpath('//input[@name="username"]').type('tomsmith')
        cy.xpath('//input[@name="password"]').type('SuperSecretPassword!')
        cy.xpath("//button[@type='submit']").click()

        cy.contains('Secure Area').should('be.visible')

    })

    
})