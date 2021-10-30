import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '50%',
    padding: '20px',
  },
  heading: {
    fontWeight: 'bolder',
  },
  infoWrapper: {
    boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
    padding: '20px',
    marginTop: '20px',
  },
  blockHeader: {
    borderBottom: '1px solid #E0E0E0',
    color: '#323232',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  infoBlock: {
    width: '40%',
    background: '#FAFAFA',
    borderBottom: '1px solid #7AA4CA',
    padding: '0px 16px',
    '&:hover': {
      background: '#e0e7fa',
      cursor: 'pointer',
    },
  },
  inputRoot: {
    width: '100%',
    marginBottom: '30px',
  },
  locationSearchInput: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '52px',
    padding: '0 16px',
    border: '1px solid rgba(0, 0, 0, 0.38)',
    borderRadius: '4px',
    background: 'rgba(0, 0, 0, 0.04)',
    width: '100%',
  },
});

export default useStyles;
