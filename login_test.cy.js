describe('page object model concept',()=>{
    it("login test case",()=>{
        //visit website
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click();
    })
    // github
    it.only("login test case",()=>{
        //visit website
        cy.visit('https://github.com/login')
        cy.get('#login_field').type('mayankraghav3814@gmail.com')
        cy.get('#password').type('Myk@123')
        cy.get('input[type="submit"]').click();
    })

})