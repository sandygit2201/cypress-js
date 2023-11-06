import managerHomePage from "./manager-home";
class OpenAccountPage {
  openAccount(accountDetails) {
    managerHomePage.navigateToOpenAccount();
    cy.get("#userSelect").select(accountDetails.customerName);

    cy.get("#currency").select(accountDetails.currency);

    cy.contains("Process").click();
  }
}

export default new OpenAccountPage()