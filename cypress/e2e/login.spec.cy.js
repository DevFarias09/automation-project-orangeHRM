describe('Orange HRM Tests', () => {
  // it.skip('Login - Success', () => {   "O código:'.skip' é para pular e também não executar esse bloco de códigos"
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
   it('Login - Fail', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.get("[name='username']").type('Test')
     cy.get("[name='password']").type('Test')
     cy.get("[type='submit']").click()
     cy.get("[role='alert']")
   })
})