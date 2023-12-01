describe("to describe test scenario", () => {
  before("run before all tests starts", () => {
    cy.log("Before");
  });

  beforeEach("runs before every test", () => {
    cy.log("Before Each");
  });

  it("define the test1", () => {
    cy.log("Test 1");
  });

  it("define the test2", () => {
    cy.log("Test 2");
  });
  it("define the test3", () => {
    cy.log("Test 3");
  });

  afterEach("runs after every test is executed", () => {
    cy.log("After Each");
  });

  after("once all the tests executed in the test file", () => {
    cy.log("After");
  });
});

// before
// beforeEach
// it
// afterEach
// beforeEach
// it
// afterEach
// beforeEach
// it
// afterEach
// after
