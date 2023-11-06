import managerHomePage from "./manager-home";
class AddCustomerPage {
  crateCustomer(customerData) {
    managerHomePage.navigateToAddCustomer();
    cy.get('[ng-model="fName"]').type(customerData.firstName);
    cy.get('[ng-model="lName"]').type(customerData.lastName);
    cy.get('[ng-model="postCd"]').type(customerData.postCode);
    cy.xpath("//button[text()='Add Customer']").click();
  }
}

export default new AddCustomerPage();
