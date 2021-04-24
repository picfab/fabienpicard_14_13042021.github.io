import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from '../data/styles'

/**
 * A spinner for wait
 * @module Spinner
 * @component
 * @see {@link https://material-ui.com/components/progress/ CircularProgress}
 */
export default function Spinner() {
  const classes = useStyles()

  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  )
}
