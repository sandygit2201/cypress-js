describe("Handle js alerts", () => {
  beforeEach("open alerts page", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("JavaScript Alerts").should("be.visible");
  });

  it("Handle simple JS alert", () => {
    cy.contains("Click for JS Alert").click();
    cy.contains("You successfully clicked an alert").should("be.visible");
  });

  it("Handle confirm JS window - accept alert", () => {
    cy.contains("Click for JS Confirm").click();

    cy.contains("You clicked: Ok").should("be.visible");
  });

  it("Handle confirm JS window - cancel alert", () => {

    cy.on("window:confirm", () => false);
    cy.contains("Click for JS Confirm").click();
    cy.contains("You clicked: Cancel").should("be.visible");
  });

  // debug for not accepting alert
  it("Handle confirm JS window - verify alert message", () => {
    cy.screenshot();


    cy.on("window:alert", (text) => {
      cy.log("Message displayed on alert window::" + text);
      expect(text).to.eql("I am a JS Confirm");
    });
    
    cy.contains("Click for JS Confirm").click();
    cy.contains('You clicked: Ok').should('be.visible')
  });

  it("Handle prompt JS window - Enter message on prompt", () => {
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns("Cypress session");
    });
    cy.contains("Click for JS Prompt").click();  
    cy.contains("You entered: Cypress session").should("be.visible");
  });
});
