import { expect } from 'chai'
import { addEmployeeDb, getEmployeesDb } from '../Controller/dataEmployees'
import { localStorageMock } from '../__mocks__/localStorage'

// eslint-disable-next-line no-undef
describe('When We use React-router-dom', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock })

  // eslint-disable-next-line no-undef
  it('Then I add a employee', (done) => {
    const employee = { firstName: 'Fabien' }
    addEmployeeDb(employee).then((data) => {
      expect(data).to.equal(employee)
      expect(
        JSON.parse(localStorage.getItem('employees')).length
      ).to.have.been.equal(1)
      done()
    })
  })
  // eslint-disable-next-line no-undef
  it('Then I get all employees', (done) => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    getEmployeesDb().then((data) => {
      expect(data[0].firstName).to.equal(employees[0].firstName)
      expect(
        JSON.parse(localStorage.getItem('employees')).length
      ).to.have.been.equal(1)
      done()
    })
  })
})
