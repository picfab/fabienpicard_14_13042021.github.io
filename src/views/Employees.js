import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import Table from 'table-hrnet'
import { Link } from 'react-router-dom'
import { employeesSelector } from '../store/employeesSelector'
import { fetchSaveEmployeesAction } from '../store/employeesActions'
import { getEmployeesDb } from '../Controller/dataEmployees'
import { cols } from '../data/tableData'
import { useStyles } from '../data/styles'

/**
 * The view of employees
 * @module Employees
 * @component
 * @category Views
 * @param {object} props Length of table data
 */
export default function Employees() {
  const classes = useStyles()
  const employees = useSelector(employeesSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    getEmployeesDb().then((data) => {
      if (data) {
        dispatch(fetchSaveEmployeesAction(data))
      }
    })
  }, [dispatch])

  return (
    <div className={classNames(classes.root, classes.employees)}>
      <h1>Current Employees</h1>
      <Table cols={cols} data={employees} />
      <Button component={Link} className={classes.btn} color='primary' to='/'>
        Home
      </Button>
    </div>
  )
}
