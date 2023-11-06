describe('handle iframe',()=>{

    it('work with iframe',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('#mce_0_ifr').then(($iframe)=>{
            const body = $iframe.contents().find('body')

            cy.wrap(body).xpath('//body[@id="tinymce"]/p').clear()
            cy.wrap(body).xpath('//body[@id="tinymce"]/p').type('Hello world')
        })

    })

    
})