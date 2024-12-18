import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {
  
  // it.skip('Login - Success', () => {   "O código:'.skip' é para pular e também não executar esse bloco de códigos"
  // it.only('Login - Success', () => {   "O código:'.only' é para executar somente esse bloco de códigos"

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessAdmin()
    menuPage.accessPim()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()
    menuPage.accessPerformance()
    menuPage.accessDashboard()
    menuPage.accessDirectory()
    menuPage.accessMaintenance()
    cy.get('.oxd-button--ghost').click()
    menuPage.accessClaim()
    menuPage.accessBuzz()

    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first({ gender: "male" }), chance.last())
    myInfoPage.fillEmployeeDetails(chance.ssn({ ssnFour: true }), chance.ssn({ ssnFour: true }), chance.ssn({ dashes: false }), '2025-07-29')
    myInfoPage.fillStatus('1989-07-29')
    myInfoPage.saveForm()
  })
})

