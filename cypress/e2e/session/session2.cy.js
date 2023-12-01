describe("custom command test", () => {
  beforeEach("login before each test", () => {
    cy.loginAndSaveSession("Admin", "admin123");
    cy.visit('/')
  });

  it("verify for time at work", () => {
    cy.visit("/");
    cy.contains("Time at Work").should("be.visible");
  });

  it("Employees on Leave Today", () => {
    cy.visit("/");
    cy.contains("Employees on Leave Today").should("be.visible");
  });
});
