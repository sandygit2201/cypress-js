import appHomePage from '../home'
class CustomerLoginPage {
  loginAsCustomer(customerName) {
    appHomePage.navigateToCustomerLogin();
    cy.get("#userSelect").select(customerName);
    cy.contains("Login").click();
    cy.contains(`Welcome ${customerName}`).should("be.visible");
  }
}

export default new CustomerLoginPage();
