/**
 * Use this function for add an employee. Need to connect the app in API.
 * @category API
 * @param   {object}  employee >The data of employee
 *
 * @return  {oject} the employee added in Database
 */
export const addEmployeeDb = (employee) =>
  new Promise((resolve) => {
    let employees = localStorage.getItem('employees')
    employees = employees ? JSON.parse(employees) : []
    localStorage.setItem('employees', JSON.stringify([...employees, employee]))
    resolve(employee)
  })

/**
 * Use this function for get employees. Need to connect the app in API.
 * @category API
 *
 * @return  {array} List employees in Database
 */
export const getEmployeesDb = () =>
  new Promise((resolve) => {
    const employees = localStorage.getItem('employees')
    resolve(employees ? JSON.parse(employees) : [])
  })
