import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
  },
  tableRow: {
    '&:hover': {
      background: '#e0e7fa',
      cursor: 'pointer',
    },
  },
  tableHeading: {
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0,6)',
    border: 'none',
    marginBottom: '10px',
  },
  iconWrapper: {
    cursor: 'pointer',
  },
});

export default useStyles;
