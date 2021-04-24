import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import Table from 'table-hrnet'
import { Link } from 'react-router-dom'
import { getEmployeesDb } from '../Controller/dataEmployees'
import { cols } from '../data/tableData'
import { useStyles } from '../data/styles'

/**
 * The view of employees
 * @module Employees
 * @component
 * @category Views
 * @param {object} props Length of table data
 * @prop {function} props.addEmployee Function for add employee in database
 * @prop {array} props.employees Array of employees object
 */
export default function Employees({ employees, addAllEmployees }) {
  const classes = useStyles()

  useEffect(() => {
    getEmployeesDb().then((data) => {
      if (data) {
        addAllEmployees(data)
      }
    })
  }, [addAllEmployees])

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
Employees.propTypes = {
  /** Function for add employee in database */
  addAllEmployees: PropTypes.func.isRequired,
  /** Array of employees object */
  // eslint-disable-next-line react/forbid-prop-types
  employees: PropTypes.array.isRequired,
}
