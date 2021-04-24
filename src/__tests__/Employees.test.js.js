import React from 'react'

import { mount } from 'enzyme'
import { expect } from 'chai'
import { MemoryRouter } from 'react-router-dom'
// import { act,create } from 'react-dom/test-utils';
import sinon from 'sinon'

import Employees from '../views/Employees'
import { localStorageMock } from '../__mocks__/localStorage'

// eslint-disable-next-line no-undef
describe('Given the employees page', () => {
  // eslint-disable-next-line no-undef
  describe('When had employee', () => {
    // eslint-disable-next-line no-undef
    it('Then addEmployee function send the form value', (done) => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem(
        'employees',
        JSON.stringify([{ firstName: 'Fabien' }])
      )
      const employees = []
      const addAllEmployees = sinon.spy((emp) => {
        const empParse = JSON.parse(emp)
        employees.push(...empParse)
      })

      mount(
        <MemoryRouter>
          <Employees employees={employees} addAllEmployees={addAllEmployees} />
        </MemoryRouter>
      )

      setTimeout(() => {
        expect(employees.length).to.have.been.equal(1)
        done()
      }, 200)
    })
  })
})
