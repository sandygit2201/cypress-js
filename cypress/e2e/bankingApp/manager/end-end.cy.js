import addCustomerPage from '../../../support/pages/manager/add-customer'
import appHomePage from '../../../support/pages/home'
import customerHomePage from '../../../support/pages/customer/customer-home'
import customerLoginPage from '../../../support/pages/customer/customer-login'
import customersPage from '../../../support/pages/manager/customers'
import depositPage from '../../../support/pages/customer/deposit'
import fakerHelper from '../../../support/helpers/faker-helper'
import managerHomePage from '../../../support/pages/manager/manager-home'
import openAccountPage from '../../../support/pages/manager/open-accuont'
import withdrawalPage from '../../../support/pages/customer/withdrawal'

describe('customer flow End to end',()=>{

    it('test 1',()=>{
        cy.visit('/')
        appHomePage.loginAsManager()
        const fName = fakerHelper.getFirstName()
        const lName = fakerHelper.getLastName()
        const customerFullName = `${fName} ${lName}`

        const customerDetails ={
            firstName:fName,
            lastName:lName,
            postCode:fakerHelper.getPostCode(),
            email:"a@b.com"
        }
        managerHomePage.navigateToAddCustomer()
        addCustomerPage.crateCustomer(customerDetails)
        
        const accountDetails ={
            customerName: customerFullName,
            currency:"Rupee"
        }
        managerHomePage.navigateToOpenAccount()
        openAccountPage.openAccount(accountDetails)

        appHomePage.navigateToHome()
        appHomePage.navigateToCustomerLogin()
        customerLoginPage.loginAsCustomer(customerFullName)

        
        const depositAmount =100
        const withdrawalAmount = 50
        

        customerHomePage.navigateToDeposit()
        depositPage.depositAmount(depositAmount)

        customerHomePage.navigateToWithdrawals()
        withdrawalPage.withdraw(withdrawalAmount)


        appHomePage.navigateToHome()
        appHomePage.loginAsManager()
        managerHomePage.navigateToCustomers()
        customersPage.deleteCustomer(customerDetails)
        
        
    })

})