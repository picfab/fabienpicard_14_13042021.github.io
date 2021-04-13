import {mount} from 'enzyme';
// import {expect} from 'chai';
import { MemoryRouter } from 'react-router';

import {employeesReducer} from '../store/employeesReducer'
import {employeesSelector} from '../store/employeesSelector'
import { addEmployeeAction,fetchSaveEmployeesAction } from '../store/employeesActions'
import { FETCH_SAVE_EMPLOYEES,ADD_EMPLOYEE, } from '../store/employeesReducer'

const employee = {firstName:'toto'}
const employees = [{firstName:'toto'},{firstName:'Luke'}]

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: ADD_EMPLOYEE,
      payload: employee
    }
    expect(addEmployeeAction(employee)).toEqual(expectedAction)
  })

  it('should create an action to add a todo 2', () => {
    const expectedAction = {
      type: FETCH_SAVE_EMPLOYEES,
      payload: employees
    }
    expect(fetchSaveEmployeesAction(employees)).toEqual(expectedAction)
  })
})

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(employeesReducer(undefined, {})).toEqual([])
  })
  it('should handle ADD_TODO', () => {
    expect(
      employeesReducer([], {
        type: ADD_EMPLOYEE,
        payload: employee
      })
    ).toEqual([employee])
  })
  it('should handle Fetch_TODO', () => {
    expect(
      employeesReducer([], {
        type: FETCH_SAVE_EMPLOYEES,
        payload: employees
      })
    ).toEqual(employees)
  })

  // it('should create an action to add a todo 2', () => {
  //   const employees = [{firstName:'toto'},{firstName:'Luke'}]
  //   const expectedAction = {
  //     type: FETCH_SAVE_EMPLOYEES,
  //     payload:  [...employees ]
  //   }
  //   expect(JSON.stringify(fetchSaveEmployeesAction(employees))).to.been.equal(JSON.stringify(expectedAction))
  // })
})

