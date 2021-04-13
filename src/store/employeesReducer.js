const initialState = []

export const FETCH_SAVE_EMPLOYEES = 'FETCH_SAVE_EMPLOYEES'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

export function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SAVE_EMPLOYEES:
      return [...action.payload]

    case ADD_EMPLOYEE:
      return [...state,action.payload]

    default:
      return state
  }
}

