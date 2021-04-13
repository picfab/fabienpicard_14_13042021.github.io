import { createStore, combineReducers } from 'redux'
import { employeesReducer } from './employeesReducer'
export default createStore(
  combineReducers({
    employees: employeesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

