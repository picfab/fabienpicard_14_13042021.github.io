import { makeStyles } from '@material-ui/core/styles'

/**
 * CSS in JS (JSS) Prefer use JSS for modify the style of material ui component.<br/>
 * You can use Material-UI's styling solution in your app, whether or not you are using Material-UI components.
 * @function
 * @see  {@link https://material-ui.com/styles/basics/ @material-ui/styles}
 * @category Styles
 * @param   {object}  theme  the theme for makeStyles
 *
 * @return  {object} The styles in JSS
 */
// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 290,
    marginLeft: 'auto',
    marginRight: 'auto',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiTextField-root, & .MuiFormControl-root, & button': {
      margin: theme.spacing(1),
    },
  },
  employees: {
    maxWidth: 966,
  },
  h1: {
    '& > svg': {
      width: '20px',
      height: '20px',
    },
  },
  labelSelect: {
    background: '#fff',
    padding: '0 5px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  adressBox: {
    padding: theme.spacing(1),
    borderRadius: 5,
    boxSizing: 'border-box',
    border: '1px solid #000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.23)',
    '& > *': {
      width: '100%',
      boxSizing: 'border-box',
    },
  },
  btn: {
    width: 200,
    '&.MuiButtonBase-root': {
      marginRight: 'auto',
      marginLeft: 'auto',
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
    top: '-15px',
    right: '-15px',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  },
  spinner: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
