import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { screen, waitFor } from '@testing-library/react'
import Home from '../views/Home'

// eslint-disable-next-line no-undef
describe('When had employee', () => {
  let wrapper

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    wrapper = null
  })
  // eslint-disable-next-line no-undef
  it('Then addEmployee function send the invalid form value', async () => {
    const employees = []
    const addEmployee = sinon.spy((emp) => {
      employees.push(emp)
    })

    act(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <Home employees={employees} addEmployee={addEmployee} />
        </MemoryRouter>
      )
    })
    const button = wrapper.find('button#addEmployee').first()
    act(() => {
      button.simulate('click')
    })
    await waitFor(() =>
      expect(wrapper.text().includes('First name is required')).to.be.true()
    )
  })

  // eslint-disable-next-line no-undef
  it('Then addEmployee function send the form value', async () => {
    const employees = []
    const addEmployee = sinon.spy((emp) => {
      employees.push(emp)
    })

    act(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <Home employees={employees} addEmployee={addEmployee} />
        </MemoryRouter>
      )
    })

    const firstName = wrapper.find('input#firstName')

    act(() => {
      firstName.simulate('focus')
      firstName.simulate('change', { target: { value: 'Fabien' } })
      firstName.simulate('blur')
    })
    const lastName = wrapper.find('input#lastName')
    act(() => {
      lastName.simulate('focus')
      lastName.simulate('change', { target: { value: 'Picard' } })
      lastName.simulate('blur')
    })
    const dateOfBirth = wrapper.find('input#dateOfBirth')
    act(() => {
      dateOfBirth.simulate('focus')
      dateOfBirth.simulate('change', { target: { value: '2020-05-24' } })
      dateOfBirth.simulate('blur')
    })

    const button = wrapper.find('button#addEmployee').first()
    act(() => {
      button.simulate('click')
    })

    await waitFor(() => screen.getByText('Employee Created!'))
    expect(addEmployee).to.have.been.called.with({
      firstName: 'Fabien',
      lastName: 'Picard',
      dateOfBirth: '05/24/2020',
      startDate: '',
      department: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
    })
    expect(employees.length).to.have.been.equal(1)
  })
})
