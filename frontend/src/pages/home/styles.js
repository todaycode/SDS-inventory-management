import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  contentBox: {
    display: 'flex',
    width: '80%',
    marginTop: '30px',
  },
});

export default useStyles;
