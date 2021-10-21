import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  content: {
    width: '100%',
  },
  actionButtons: {
    display: 'flex',
    marginTop: '16px',
  },
  contactDetailsWrapper: {
    width: '100',
    marginTop: '16px',
  },
  contactDetailsBlock: {
    display: 'flex',
    border: '1px solid #d4d5d6',
    padding: '20px',
    marginTop: '10px',
  },
  responsibleInfoBlock: {
    width: '200px',
  },
  actionButton: {
    marginRight: '100px',
  },
  nameHeading: {
    fontSize: '32px',
    color: 'rgba(50, 50, 50, 1)',
  },
  contactDetailsHeading: {
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0,6)',
  },
  tableWrapper: {
    marginTop: '50px',
  },
  tableActions: {
    display: 'flex',
  },
  inputRoot: {
    width: '40%',
  },
  locationSearchInput: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '38px',
    padding: '0 16px',
    border: '1px solid rgba(0, 0, 0, 0.38)',
    borderRadius: '0px',
    background: 'rgba(0, 0, 0, 0.04)',
  },
  tableActionBtn: {
    borderRadius: '0px',
    height: '40px',
  },
  resultsCountBlock: {
    textTransform: 'uppercase',
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    border: '1px solid rgba(0, 0, 0, 0.38)',
    padding: '0px 10px',
  },
});

export default useStyles;
