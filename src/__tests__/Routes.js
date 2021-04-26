/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { MemoryRouter } from 'react-router-dom'
import { waitFor } from '@testing-library/react'
import Routes from '../routes'
import Home from '../views/Home'
import Employees from '../views/Employees'

describe('When We use React-router-dom', () => {
  const mockFunction = () => null
  const employees = []
  let wrapper
  beforeEach(() => {
    wrapper = null
  })

  it('Then Url is /', async () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes
          urls={{
            home: <Home addEmployee={mockFunction} />,
            employees: (
              <Employees employees={employees} addAllEmployees={mockFunction} />
            ),
          }}
        />
      </MemoryRouter>
    )
    await waitFor(() => expect(wrapper.find(Home)).to.have.lengthOf(1))
  })
  it('Then Url is /employees', async () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/employees']}>
        <Routes
          urls={{
            home: <Home addEmployee={mockFunction} />,
            employees: (
              <Employees employees={employees} addAllEmployees={mockFunction} />
            ),
          }}
        />
      </MemoryRouter>
    )

    await waitFor(() => expect(wrapper.find(Employees)).to.have.lengthOf(1))
  })
})
