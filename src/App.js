import { useState, useCallback } from 'react'
import Routes from './routes'
import Home from './views/Home'
import Employees from './views/Employees'

/**
 * The application component
 * @module App
 * @component
 */
export default function App() {
  const [employees, setEmployees] = useState([])

  const addEmployee = (emp) => {
    setEmployees([...employees, emp])
  }

  const addAllEmployees = useCallback((emps) => {
    setEmployees([...emps])
  }, [])

  return (
    <>
      <Routes
        urls={{
          home: <Home addEmployee={addEmployee} />,
          employees: (
            <Employees
              employees={employees}
              addAllEmployees={addAllEmployees}
            />
          ),
        }}
      />
    </>
  )
}
