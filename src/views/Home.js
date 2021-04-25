import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import moment from 'moment'
import { states, departments } from '../data/selectData'
import { addEmployeeDb } from '../Controller/dataEmployees'
import { useStyles } from '../data/styles'
import Logo from '../Components/Logo'
import { closeSvg } from '../data/svg'
import { addEmployeeAction } from '../store/employeesActions'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

/**
 * The Home view with the form for add an employee.
 * @see  {@link https://material-ui.com/ Material UI} For the Material UI component used on this view.
 * @module Home
 * @category Views
 * @component
 */
export default function Home() {
  const dispatch = useDispatch()

  const fieldsRequired = ['firstName', 'lastName', 'dateOfBirth']
  const [errorFirstName, setErrorFirstName] = useState({
    error: false,
    message: 'First name is required',
  })
  const [errorLaststName, setErrorLaststName] = useState({
    error: false,
    message: 'Last name is required',
  })
  const [errorBirthDay, setErrorBirthDay] = useState({
    error: false,
    message: 'Date of Birthday  is required',
  })

  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const initialValue = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  }
  const [employee, setEmployee] = useState(initialValue)

  const saveEmployee = () => {
    const verifRequired = Object.entries(employee).filter(
      ([key, value]) => !value && fieldsRequired.includes(key)
    )
    // Verif if not fields required is empty
    if (verifRequired.length > 0) {
      verifRequired.forEach((x) => {
        if (x[0] === 'firstName') {
          setErrorFirstName({ ...errorFirstName, error: true })
        }
        if (x[0] === 'lastName') {
          setErrorLaststName({ ...errorLaststName, error: true })
        }
        if (x[0] === 'dateOfBirth') {
          setErrorBirthDay({ ...errorBirthDay, error: true })
        }
      })
    } else {
      addEmployeeDb(employee).then((data) => {
        dispatch(addEmployeeAction(data))
        setOpen(true)
        setErrorFirstName({ ...errorFirstName, error: false })
        setErrorLaststName({ ...errorLaststName, error: false })
        setErrorBirthDay({ ...errorBirthDay, error: false })
      })
    }
  }

  const handleClose = () => {
    setOpen(false)
    setEmployee(initialValue)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClose()
          }
        }}
        role='button'
        tabIndex={-1}
        className={classes.close}
        id='close-success-modal'
        onClick={handleClose}>
        {closeSvg}
      </div>
      <p id='simple-modal-description'>Employee Created!</p>
    </div>
  )

  return (
    <div className='App'>
      <form className={classes.root} noValidate autoComplete='off'>
        <h1 className={classes.h1}>
          <Logo /> HRnet
        </h1>
        <Button component={Link} color='primary' to='/employees'>
          View Current Employees
        </Button>
        <h2>Create Employee</h2>
        <TextField
          id='firstName'
          label='First Name'
          variant='outlined'
          helperText={errorFirstName.error ? errorFirstName.message : ''}
          error={errorFirstName.error}
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
        />
        <TextField
          id='lastName'
          label='Last Name'
          helperText={errorFirstName.error ? errorFirstName.message : ''}
          error={errorFirstName.error}
          variant='outlined'
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
        />
        <TextField
          id='dateOfBirth'
          label='Date of Birth'
          helperText={errorBirthDay.error ? errorBirthDay.message : ''}
          error={errorBirthDay.error}
          type='date'
          variant='outlined'
          className={classes.textField}
          value={
            !employee.dateOfBirth
              ? employee.dateOfBirth
              : moment(employee.dateOfBirth, 'MM/DD/YYYY').format('yyyy-MM-DD')
          }
          onChange={(e) => {
            setEmployee({
              ...employee,
              dateOfBirth: moment(e.target.value, 'yyyy-MM-DD').format(
                'MM/DD/YYYY'
              ),
            })
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id='startDate'
          label='Start Date'
          type='datetime-local'
          variant='outlined'
          value={
            !employee.startDate
              ? ''
              : moment(employee.startDate, 'MM/DD/YYYY hh:mm').format(
                  'yyyy-MM-DDThh:mm:ss'
                )
          }
          onChange={(e) => {
            setEmployee({
              ...employee,
              startDate: moment(e.target.value, 'yyyy-MM-DDThh:mm:ss').format(
                'MM/DD/YYYY HH:mm'
              ),
            })
          }}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className={classes.adressBox}>
          <h2 className='adressBox__title'>Address</h2>
          <TextField
            id='street'
            label='Street'
            variant='outlined'
            value={employee.street}
            onChange={(e) =>
              setEmployee({ ...employee, street: e.target.value })
            }
          />
          <TextField
            id='city'
            label='City'
            variant='outlined'
            value={employee.city}
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          />
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel htmlFor='state' className={classes.labelSelect}>
              State
            </InputLabel>
            <Select
              native
              value={employee.state}
              onChange={(e) =>
                setEmployee({ ...employee, state: e.target.value })
              }
              inputProps={{
                name: 'state',
                id: 'state',
              }}>
              {states.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <TextField
            id='zipcode'
            label='Zipcode'
            variant='outlined'
            type='number'
            value={employee.zipCode}
            onChange={(e) =>
              setEmployee({ ...employee, zipCode: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel htmlFor='department' className={classes.labelSelect}>
            Department
          </InputLabel>
          <Select
            native
            value={employee.department}
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
            inputProps={{
              name: 'department',
              id: 'department',
            }}>
            {departments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button
          id='addEmployee'
          variant='contained'
          color='primary'
          onClick={saveEmployee}>
          Save
        </Button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {body}
      </Modal>
    </div>
  )
}
