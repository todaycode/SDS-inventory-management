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
});

export default useStyles;
