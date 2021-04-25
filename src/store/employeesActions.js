import { FETCH_SAVE_EMPLOYEES, ADD_EMPLOYEE } from './employeesReducer'

/**
 * Use this function for set all employees in redux store.
 * @category Redux
 * @param  {array} List employees in Database
 */
export const fetchSaveEmployeesAction = (employees) => ({
  type: FETCH_SAVE_EMPLOYEES,
  payload: [...employees],
})

/**
 * Use this function for set add an employee in redux store.
 * @category Redux
 * @param  {object} List employees in Database
 */
export const addEmployeeAction = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: { ...employee },
})
