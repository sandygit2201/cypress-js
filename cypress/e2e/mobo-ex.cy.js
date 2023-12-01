describe("cy-origin exmaple", () => {
  
  it("microsoft auth example", () => {
    // can be added in e2e.js
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit("https://mobo.koerber-technologies.com/");
    cy.get("#logonIdentifier").clear().type("abcd");
  });
});
