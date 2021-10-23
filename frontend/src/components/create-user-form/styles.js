import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formWrapper: {
    width: '50%',
    borderRadius: '5px',
    boxShadow: '0px 0px 50px 2px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    marginTop: '80px',
  },
  formHeader: {
    color: '#000',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  formRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  textInput: {
    width: '45%',
  },
  submitButtonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    width: '50%',
    padding: '5px',
    background: '#00324E',
    color: '#fff',
    fontSize: '21px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    marginTop: '20px',
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
