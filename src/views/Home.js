import {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {states,departements} from '../data/selectData'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addEmployeeAction } from '../store/employeesActions'
import {addEmployee} from '../Controller/dataEmployees'
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    maxWidth: 290,
    marginLeft:'auto',
    marginRight:'auto',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  labelSelect:{
    background: '#fff',
    padding: '0 5px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  adressBox: {
    padding: theme.spacing(1),
    boxSizing:'border-box',
    border:'1px solid #000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    '& > *': {
      width: '100%',
      boxSizing:'border-box',
    },
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  close: {
    position: 'absolute',
    top : '-15px',
    right: '-15px',
    width: '30px',
    height: '30px',
    cursor:'pointer',
  },
}));


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


/**
 * the application component
 * @module Home
 * @component
 * @example
 * return ( <Home/> )
 */
export default function Home() {
  const dispatch = useDispatch()

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [employee, setEmployee] = useState({"firstName":"","lastName":"","dateOfBirth":"","startDate":"","department":"","street":"","city":"","state":"AL","zipCode":""});


  const saveEmployee = ()=>{
    addEmployee(employee)
    .then(data=>{
      dispatch(addEmployeeAction(data))
      setOpen(true)
    })
  }

  const handleClose = () => {
    setOpen(false);
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.close} onClick={handleClose}>
      <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="#000" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z"></path><path fill="#fff" d="M377.6 321.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z"></path></g></svg>
      </div>
      <p id="simple-modal-description">Employee Created!</p>
    </div>
  );

  return (
      <div className="App">
        <form className={classes.root} noValidate autoComplete="off">
          <h1>HRnet</h1>
          <Link className='link' to={`/employees`}>
            View Current Employees
            </Link>
          <h2>Create Employee</h2>
          <TextField id="firstname" label="First Name" variant="outlined" value={employee.firstName} onChange={(e)=>setEmployee({...employee,firstName:e.target.value})}/>
          <TextField id="lastname" label="Last Name" variant="outlined"  value={employee.lastName} onChange={(e)=>setEmployee({...employee,lastName:e.target.value})}/>
          <TextField
            id="birth"
            label="Date of Birth"
            type="datetime-local"
            variant="outlined"
            className={classes.textField}
            value={employee.dateOfBirth}
            onChange={(e)=>setEmployee({...employee,dateOfBirth:e.target.value})}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="start"
            label="Start Date"
            type="datetime-local"
            variant="outlined"
            value={employee.startDate}
            onChange={(e)=>setEmployee({...employee,startDate:e.target.value})}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className={classes.adressBox}>
            <h2 className='adressBox__title'>Address</h2>
            <TextField id="street" label="Street" variant="outlined"  value={employee.street} onChange={(e)=>setEmployee({...employee,street:e.target.value})}/>
            <TextField id="city" label="City" variant="outlined"  value={employee.city} onChange={(e)=>setEmployee({...employee,city:e.target.value})}/>
            <FormControl variant="outlined"  className={classes.formControl}>
              <InputLabel htmlFor="state" className={classes.labelSelect}>State</InputLabel>
              <Select
                native
                value={employee.state}
                onChange={(e)=>setEmployee({...employee,state:e.target.value})}
                inputProps={{
                  name: 'state',
                  id: 'state'
                }}
              >
                {states.map(option=> <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
            </FormControl>
            <TextField
              id="zipcode"
              label="Zipcode"
              variant="outlined"
              type="number"
              value={employee.zipCode} onChange={(e)=>setEmployee({...employee,zipCode:e.target.value})}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
            <FormControl variant="outlined"  className={classes.formControl}>
              <InputLabel htmlFor="department" className={classes.labelSelect}>Department</InputLabel>
              <Select
                native
                value={departements.state}
                onChange={(e)=>setEmployee({...employee,department:e.target.value})}
                inputProps={{
                  name: 'department',
                  id: 'department'
                }}
              >
                {states.map(option=> <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
            </FormControl>
            <Button id='addEmployee' variant="contained" onClick={saveEmployee}>Save</Button>
        </form>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
  )
}




