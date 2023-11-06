describe("checkbox ", () => {
  it("checkbox", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    // cy.get('#username').type('tomsmith')
    // cy.get('#password').type('SuperSecretPassword!')
    // cy.get("[type='submit']").click()
    // cy.contains("Secure Area").should('be.visible')

    // get check box

    let checkboxXpath = '(//form[@id="checkboxes"]/input)[1]'
    
    cy.xpath(checkboxXpath)
      .invoke("prop", "checked")
      .then((state) => {
        cy.log(`checkbox is ${state ? "checked" : "not checked"}`);
        if (!state) {
            cy.xpath(checkboxXpath).click();  
        } 
      });
      cy.wait(5000)
  });
});
