import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

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
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'Other Id', 'DriversNumber', '2025-07-29')
    myInfoPage.fillStatus('1992-03-18')
    myInfoPage.saveForm()
  })
  
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})