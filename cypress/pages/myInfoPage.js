class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text--arrow",
            choicenNationality: ":nth-child(28)",
            choisenMarital: ".oxd-select-dropdown > :nth-child(3)"
        }
        return selectors
    }

    register() {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstName')
        cy.get(this.selectorsList().lastNameField).clear().type('LastName')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Employee')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriversLicense')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().choicenNationality).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().choisenMarital).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type('1992-03-18')

        // cy.get(selectorsList.genericField).eq(3).clear().type('Nickname')
        // cy.get(selectorsList.genericField).eq(7).clear().type('SsnNumberTest')
        // cy.get(selectorsList.genericField).eq(8).clear().type('SinNumberTest')

        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage