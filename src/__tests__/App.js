/* eslint-disable no-undef */
import React from 'react'

import { mount } from 'enzyme'
import { expect } from 'chai'
import { MemoryRouter } from 'react-router-dom'
import { waitFor } from '@testing-library/react'
import Home from '../views/Home'
import Employees from '../views/Employees'
import App from '../App'
import { localStorageMock } from '../__mocks__/localStorage'

describe('Given the good page', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  const mockSetState = jest.fn()

  jest.mock('react', () => ({
    useState: (initial) => [initial, mockSetState],
  }))

  let wrapper

  beforeEach(() => {
    wrapper = null
  })

  describe('When the url is /', () => {
    it('Then have the Home component', async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      )
      await waitFor(() => expect(wrapper.find(Home)).to.have.length(1))
      await waitFor(() => expect(wrapper.find(Employees)).to.have.length(0))
    })
  })
  describe('When the url is /employees', () => {
    it('Then have the Employees component', async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/employees']}>
          <App />
        </MemoryRouter>
      )
      await waitFor(() => expect(wrapper.find(Employees)).to.have.length(1))
      await waitFor(() => expect(wrapper.find(Home)).to.have.lengthOf(0))
    })
  })
})
