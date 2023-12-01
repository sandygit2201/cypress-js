describe('Drag and drop',()=>{

    it('Drag and drop test',()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.wait(3000)
        cy.get('#menu-fried-chicken').drag('#plate-items')
        cy.wait(2000)
        cy.get('#menu-hamburger').drag('#plate-items')
        cy.wait(2000)
        cy.get('#menu-ice-cream').drag('#plate-items')
        cy.wait(2000)
    })
    
})