export const addEmployee = (employee) => new Promise((resolve,reject)=>{
  let employees = localStorage.getItem('employees')
  employees = employees?JSON.parse(employees):[]
  localStorage.setItem('employees', JSON.stringify([...employees,employee]));
  resolve(employee)
})

export const getEmployees = () => new Promise((resolve,reject)=>{
  const employees = localStorage.getItem('employees')
  console.log(employees);
  resolve(JSON.parse(employees))
})
