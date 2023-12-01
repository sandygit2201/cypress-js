describe("intercept", () => {


  it("intercept GET Req", () => {
    cy.visit("https://reqres.in/");

    cy.intercept('GET',"/api/users").as("listUsersReq");

    cy.get("li[data-id='users']").click();

    cy.wait("@listUsersReq").then((resp) => {
      cy.log(JSON.stringify(resp.body));
    });
  });

  it("intercept", () => {
    cy.visit("https://reqres.in/");

    cy.intercept("PUT", "/api/users/2*").as("updateReq");

    cy.get("li[data-id='put']").click();

    cy.wait("@updateReq").then((resp) => {
      cy.log(JSON.stringify(resp));
    });
  });

  it.only("stub response ", () => {
    cy.visit("https://reqres.in/");

    cy.intercept("PUT", "/api/users/2",{day:"sunday"}).as("updateReq");

    cy.contains("Update").click();

    cy.wait('@updateReq').then((resp) => {
      cy.log(JSON.stringify(resp.body));
    });
  });
  
});
