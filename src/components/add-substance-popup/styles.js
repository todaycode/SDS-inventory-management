import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
  },
  tableHeading: {
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0,6)',
    border: 'none',
    marginBottom: '10px',
  },
  addActionWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    width: '60%',
    background: '#00324E',
    color: '#fff',
    marginBottom: '10px',
  },
  searchInputsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 10px',
  },
  inputRoot: {
    width: '40%',
  },
  sdsSearchInput: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '38px',
    padding: '0 16px',
    border: '1px solid rgba(0, 0, 0, 0.38)',
    borderRadius: '0px',
    background: 'rgba(0, 0, 0, 0.04)',
  },
});

export default useStyles;
