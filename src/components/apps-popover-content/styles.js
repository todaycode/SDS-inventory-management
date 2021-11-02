import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  popover: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    padding: '20px',
  },
  heading: {
    color: '#00324E',
    fontSize: '21px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default useStyles;
