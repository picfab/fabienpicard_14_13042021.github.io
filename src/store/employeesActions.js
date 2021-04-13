import { FETCH_SAVE_EMPLOYEES,ADD_EMPLOYEE, } from './employeesReducer'

export const fetchSaveEmployeesAction = (employees) => ({
  type: FETCH_SAVE_EMPLOYEES,
  payload: [...employees ]
})
export const addEmployeeAction = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: { ...employee }
})

