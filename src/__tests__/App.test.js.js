/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { MemoryRouter } from 'react-router'
import Home from '../views/Home'
import Employees from '../views/Employees'
import App from '../App'

describe('Given the home page', () => {
  describe('When the url is /', () => {
    it('Then have the Home component', (done) => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      )
      setTimeout(() => {
        expect(wrapper.find(Home)).to.have.length(1)
        expect(wrapper.find(Employees)).to.have.length(0)
        done()
      }, 100)
    })
  })
  describe('When the url is /employees', () => {
    it('Then have the Employees component', (done) => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/employees']}>
          <App />
        </MemoryRouter>
      )
      setTimeout(() => {
        expect(wrapper.find(Employees)).to.have.length(1)
        expect(wrapper.find(Home)).to.have.lengthOf(0)
        done()
      }, 200)
    })
  })
})
