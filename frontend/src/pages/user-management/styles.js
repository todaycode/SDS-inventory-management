import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '70vh',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    height: '100%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tabsWrapper: {
    marginTop: '40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  tabChildrenWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  page: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
});

export default useStyles;
