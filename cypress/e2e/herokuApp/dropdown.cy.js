describe('dropdown',()=>{

    it('dropdown example',()=>{

        cy.visit('https://the-internet.herokuapp.com/dropdown')

        cy.wait(3000)  
        cy.get('#dropdown')
          .select(2)
        cy.wait(2000)  
          
    })

    it.only('dropdown example - way2automation',()=>{

        cy.visit('https://www.way2automation.com/way2auto_jquery/index.php')

        cy.wait(3000)  
        cy.get('[name="country"]')
          .select('Bahrain')
        cy.wait(3000)  
          
    })

    
})