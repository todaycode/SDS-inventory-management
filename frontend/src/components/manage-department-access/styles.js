import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  content: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  manageDepartmentForm: {
    width: '100%',
    marginTop: '20px',
  },
  errorsWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  successWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  successTest: {
    color: '#17c504',
    fontSize: '21px',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#f50202',
  },
  inputRoot: {
    width: '100%',
  },
  inputsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  submitButtonWrapper: {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
  },
});

export default useStyles;
