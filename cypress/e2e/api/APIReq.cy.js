describe("API requests", () => {
  let baseURL = "https://reqres.in/api/users";

  it("GET", () => {
    cy.request(baseURL+'?page=2').then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(res.body.data[0].id).to.eq(7);
    });
  });
  it("PUT", () => {
    let reqBody = { 
        name: 'morpheus123',
         job: 'zion resident'
         };
    cy.request('PUT', baseURL+'/2',reqBody).then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      
    });
  });
  it.only("POST", () => {
    let reqBody = { 
        name: 'sandy123',
         job: 'zion resident'
         };
    cy.request('POST', baseURL,reqBody).then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(201);
      
    });
  });
});
