import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contentBox: {
    width: '80%',
    marginTop: '45px',
  },
  searchInputsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 10px',
    marginBottom: '20px',
  },
  inputRoot: {
    width: '40%',
  },
  sdsSearchInput: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '24px',
    padding: '0 16px',
    border: '1px solid rgba(0, 0, 0, 0.38)',
    borderRadius: '5px',
    background: 'rgba(0, 0, 0, 0.04)',
  },
});

export default useStyles;
