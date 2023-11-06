import managerHomePage from "./manager-home";
class CustomersPage{

    deleteCustomer(firstName){
        managerHomePage.navigateToCustomers();
        cy.get('input[placeholder="Search Customer"]').type(firstName)
        cy.xpath("//button[text()='Delete']").click()
    }
    
}

export default new CustomersPage()