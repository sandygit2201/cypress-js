describe('handle iframe',()=>{

    it('work with iframe',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.wait(2000)
        cy.viewport(2000, 1600)

        cy.visit('https://google.com')
        cy.wait(2000)
        cy.get('#mce_0_ifr').then(($iframe)=>{
            const body = $iframe.contents().find('body')
            cy.contains('save').filter(':visible')
            cy.wrap(body).xpath('//body[@id="tinymce"]/p').as('txtarea')
            cy.wait(2000)
            cy.get('@txtarea').type('Hello world')
            cy.wait(2000)
            
        })
        

    })

    
})