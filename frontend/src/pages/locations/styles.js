import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  locationInfo: {
    width: '100%',
    padding: '60px',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    height: '100%',
  },
  locationsWrapper: {
    width: '30%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 15px 35px rgba(51, 51, 51, 0.2)',
  },
  inputRoot: {
    width: '80%',
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
    marginTop: '40px',
  },
  addButton: {
    width: '80%',
    marginTop: '20px',
  },
  locationsBlock: {
    marginTop: '30px',
    width: '100%',
  },
  locationsHeading: {
    textAlign: 'center',
    marginBottom: '30px',
  },
});

export default useStyles;
