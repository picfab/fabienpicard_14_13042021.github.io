import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { MemoryRouter } from 'react-router-dom'
import Home from '../views/Home'

// eslint-disable-next-line no-undef
describe('When had employee', () => {
  // eslint-disable-next-line no-undef
  it('Then addEmployee function send the form value', (done) => {
    const employees = []
    const addEmployee = sinon.spy((emp) => employees.push(emp))

    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Home employees={employees} addEmployee={addEmployee} />
      </MemoryRouter>
    )

    const firstName = wrapper.find('input#firstName')
    firstName.simulate('focus')
    firstName.simulate('change', { target: { value: 'Fabien' } })
    firstName.simulate('blur')
    const lastName = wrapper.find('input#lastName')
    lastName.simulate('focus')
    lastName.simulate('change', { target: { value: 'Picard' } })
    lastName.simulate('blur')
    const dateOfBirth = wrapper.find('input#dateOfBirth')
    dateOfBirth.simulate('focus')
    dateOfBirth.simulate('change', { target: { value: '2021-04-15' } })
    dateOfBirth.simulate('blur')

    const button = wrapper.find('button#addEmployee').first()

    button.simulate('click')
    setTimeout(() => {
      expect(addEmployee).to.have.been.calledWith({
        firstName: 'Fabien',
        lastName: 'Picard',
        dateOfBirth: '04/15/2021',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
      })
      expect(employees.length).to.have.been.equal(1)

      done()
    }, 200)
  })
})
