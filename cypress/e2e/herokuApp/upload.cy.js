describe('file Upload',()=>{

    it('work with iframe',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/uploads/dummy.pdf')
        cy.wait(5000)
        

    })

    
})