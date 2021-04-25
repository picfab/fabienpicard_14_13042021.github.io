const initialState = []

/**
 * Action for save all employees.
 * @category Redux
 * @var  {string}
 */
export const FETCH_SAVE_EMPLOYEES = 'FETCH_SAVE_EMPLOYEES'
/**
 * Action for add an employee
 * @category Redux
 * @var  {string}
 */
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
/**
 * @function
 * Reducer for employees store
 * @category Redux
 * @param  {array} state The list of employees
 * @param  {object} action The action for change the store
 * @prop  {string} action.type The type action for change the store with the correct action
 * @prop  {object} action.payload The payload for modify the store
 * @return {array} The new state
 */
export function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SAVE_EMPLOYEES:
      return [...action.payload]

    case ADD_EMPLOYEE:
      return [...state, action.payload]

    default:
      return state
  }
}
