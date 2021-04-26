import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { MemoryRouter } from 'react-router-dom'
import { waitFor } from '@testing-library/react'
import sinon from 'sinon'
import Employees from '../views/Employees'
import { localStorageMock } from '../__mocks__/localStorage'

// eslint-disable-next-line no-undef
describe('Given the employees page', () => {
  // eslint-disable-next-line no-undef
  describe('When had employee', () => {
    // eslint-disable-next-line no-undef
    it('Then addEmployee function send the form value', async () => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem(
        'employees',
        JSON.stringify([{ firstName: 'Fabien' }])
      )
      const employees = []
      const addAllEmployees = sinon.spy((emp) => {
        employees.push(...emp)
      })
      mount(
        <MemoryRouter>
          <Employees employees={employees} addAllEmployees={addAllEmployees} />
        </MemoryRouter>
      )
      await waitFor(() => expect(employees.length).to.have.been.equal(1))
    })
  })
})
