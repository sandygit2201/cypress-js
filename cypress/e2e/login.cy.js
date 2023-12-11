
// Read data from .env file 
describe("test", () => {
  it("login", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type(Cypress.env('USERNAME'));
    cy.get("#password").type(Cypress.env('PASSWORD'));

    cy.wait(2000)
  });
});