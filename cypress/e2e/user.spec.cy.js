import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  // it.skip('Login - Success', () => {   "O código:'.skip' é para pular e também não executar esse bloco de códigos"
  // it.only('Login - Success', () => {   "O código:'.only' é para executar somente esse bloco de códigos"

  it.only('User Info Update - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.register()
  })

  it('Login - Fail', () => {
     
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})