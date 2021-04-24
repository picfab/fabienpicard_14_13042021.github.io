/* eslint-disable react/no-children-prop */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * The react router logic
 * @module Routes
 * @component
 * @param {object}  urls  urls is an object with React elements in folder Views
 */
export default function Routes({ urls }) {
  const { home, employees } = urls
  return (
    <Router>
      <Switch>
        <Route exact path='/employees' children={employees} />
        <Route exact path='/' children={home} />
      </Switch>
    </Router>
  )
}
Routes.propTypes = {
  /** urls is an object with React elements in folder Views */
  // eslint-disable-next-line react/forbid-prop-types
  urls: PropTypes.object.isRequired,
}
