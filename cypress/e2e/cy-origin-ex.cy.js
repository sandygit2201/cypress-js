describe('cy-origin exmaple',()=>{

    it('microsoft auth example',()=>{

        let userName = Cypress.env("adminUsername");
        let password = Cypress.env("adminPassword");
        const adminURL = 'https://www.adminapp.com';
    
        cy.session([userName, password], () => {
          const userCredentials = {
            username: userName,
            password: password,
          };
          cy.visit(adminURL);
          cy.xpath('//div[text()="Sign in with"]/following-sibling::div/img').click(
            { force: true },
          );

          let label = "signinwith"
          let user = "signinwith"
          let xpath = `//div[text()="${label}"]/following-sibling::div/img`
          
          cy.contains(`Hello ${user}`).should('be.visible')

          cy.origin(
            "login.microsoftonline.com",
            { args: userCredentials },
            ({ username, password }) => {
              cy.contains("Sign in").should("be.visible");
              cy.get('input[type="email"]').clear().type(username);
              cy.wait(2000);
              cy.get('input[type="submit"]').click();
              cy.contains("Enter password").should("be.visible");
              cy.wait(2000);
              cy.get('input[name="passwd"]').clear().type(password);
              cy.wait(2000);
              cy.get("input[value='Sign in']").click();
              cy.wait(2000);
              cy.contains("Stay signed in?").should("be.visible");
              cy.get('input[value="No"]').click();
            },
          );
          cy.url().should("equal", adminURL + "dashboard");
          cy.contains("Welcome to  amdin").should("be.visible");
        });
        cy.viewport(1600, 1200);
           
    })

})

     