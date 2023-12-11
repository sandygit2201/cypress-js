describe("custom command test", () => {
  const baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  beforeEach("login before each test", () => {
    cy.loginAndSaveSession("Admin", "admin123");
    cy.visit(baseURL)
  });

  it("verify for time at work", () => {
    cy.visit(baseURL)
    cy.contains("Time at Work").should("be.visible");
  });

  it("Employees on Leave Today", () => {
    cy.visit(baseURL)
    cy.contains("Employees on Leave Today").should("be.visible");
  });
});
