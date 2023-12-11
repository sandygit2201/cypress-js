// import fakerHelper from '../../../support/helpers/faker-helper'
import fakerHelper from "../../../support/helpers/faker-helper";

describe("create new customer", () => {
  it("create customer", () => {
    cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/login");

    // create customer
    cy.contains("Bank Manager Login").click();
    cy.contains("Add Customer").should("be.visible");
    cy.contains("Add Customer ").click();
    cy.contains("First Name").should("be.visible");

    const firstName = fakerHelper.getFirstName();
    const lastName = fakerHelper.getLastName();
    const customerName = `${firstName} ${lastName}`;

    cy.get('[ng-model="fName"]').type(firstName);
    cy.get('[ng-model="lName"]').type(lastName);
    cy.get('[ng-model="postCd"]').type(fakerHelper.getPostCode());

    cy.xpath("//button[text()='Add Customer']").click();

    cy.on("window:alert", (text) => {
      cy.log("Message displayed on alert window::" + text);
      expect(text).to.contain("Customer added successfully with customer id");
    });

    cy.contains("Open Account").click();
    cy.contains("Currency").should("be.visible");

    cy.get("#userSelect").select(customerName);
    cy.get("#currency").select("Rupee");
    cy.contains("Process").click();

    cy.contains("Home").click();
    cy.contains("Customer Login").click();

    cy.get("#userSelect").select(customerName);
    cy.contains("Login").click();
    cy.contains(`Welcome ${customerName}`).should("be.visible");

    cy.get("[ng-class='btnClass2']").click();
    cy.contains("Amount to be Deposited").should("be.visible");

    const depositAmount = 100;

    cy.get("[ng-model='amount']").type(depositAmount);

    cy.get("[type='submit']").last().click();

    cy.contains("Deposit Successful").should("be.visible");

    cy.get("button[ng-class='btnClass3']").click();
    cy.contains("Amount to be Withdrawn").should("be.visible");

    const withdrawlAmount = 50;

    cy.get('[placeholder="amount"]').type(withdrawlAmount);

    cy.xpath("//button[text()='Withdraw']").click();

    cy.contains("Transaction successful").should("be.visible");

    cy.contains("Home").click();
    cy.contains("Bank Manager Login").click();
    cy.contains("Customers").click();
    cy.get('input[placeholder="Search Customer"]').type(firstName);

    cy.xpath("//button[text()='Delete']").click();
  });
});
