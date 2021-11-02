import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    background: '#00324E',
  },
  loginFormWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    width: '40%',
    background: '#ffffff',
    padding: '100px',
    borderRadius: '5px',
  },
  fieldWrapper: {
    marginBottom: '30px',
  },
  submitButton: {
    width: '100%',
    textAlign: 'center',
  },
  errorText: {
    fontSize: '13px',
    color: '#f21212',
  },
  errorsRow: {
    width: '100%',
  },
});

export default useStyles;
