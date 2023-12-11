import addCustomerPage from "../../../support/pages/manager/add-customer";
import appHomePage from "../../../support/pages/home";
import customerHomePage from "../../../support/pages/customer/customer-home";
import customerLoginPage from "../../../support/pages/customer/customer-login";
import customersPage from "../../../support/pages/manager/customers";
import depositPage from "../../../support/pages/customer/deposit";
import fakerHelper from "../../../support/helpers/faker-helper";
import openAccountPage from "../../../support/pages/manager/open-accuont";
import withdrawalPage from "../../../support/pages/customer/withdrawal";

describe("customer flow End to end", () => {
    const fName = "Harry";
    const lName = "Potter";
    const customerFullName = `${fName} ${lName}`;
    
    const customerDetails = {
      firstName: fakerHelper.getFirstName(),
      lastName: fakerHelper.getLastName(),
      postCode: fakerHelper.getPostCode(),
      email: "a@b.com",
    };

    beforeEach('invoke application',()=>{
        cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/login");        
    })

    it("create customer", () => {
    appHomePage.loginAsManager();    

   
    addCustomerPage.crateCustomer(customerDetails);
  });
  
  it("create account for customer", () => {
    appHomePage.loginAsManager()
    const accountDetails = {
      customerName: customerFullName,
      currency: "Rupee",
    };
    openAccountPage.openAccount(accountDetails);
  });
  
  it("deposit amount", () => {
    customerLoginPage.loginAsCustomer(customerFullName);
    const depositAmount = 100;
    customerHomePage.navigateToDeposit();
    depositPage.depositAmount(depositAmount);
  });
  
  it("withdraw amount", () => {
    customerLoginPage.loginAsCustomer(customerFullName);
    const withdrawalAmount = 50;
    customerHomePage.navigateToWithdrawals();
    withdrawalPage.withdraw(withdrawalAmount);
  });
  
  it("delete customer", () => {
    appHomePage.loginAsManager();
    
    customersPage.deleteCustomer(fName);
  });
});
