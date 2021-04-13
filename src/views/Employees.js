import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux'
import { fetchSaveEmployeesAction } from '../store/employeesActions'
// import { useHistory } from 'react-router-dom'
import { employeesSelector } from '../store/employeesSelector'
import {getEmployees} from '../Controller/dataEmployees'
import Table from 'table-hrnet'
import {cols} from '../data/tableData'
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    maxWidth: 960,
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
}))
export default function Employees(){
  const classes = useStyles();

  const employees = useSelector(employeesSelector)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log('USEFFECT');
      getEmployees()
      .then(data=>{
        console.log(data);
        if(data){
          dispatch(fetchSaveEmployeesAction(data))
        }
      })
  },[dispatch])
  console.log(employees,'employees');
  return <div>
    <div className={classes.root}>
    <h1>Current Employees</h1>
    <Table cols={cols} data={employees}/>
    <Link className='link' to={`/`}>
            Home
            </Link>
    </div>
    {/* {employees.map((emp,i)=><div>{JSON.stringify(emp)}<br/></div>)} */}
  </div>
}
