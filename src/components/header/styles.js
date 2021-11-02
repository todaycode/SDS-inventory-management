import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    height: '58px',
    backgroundColor: '#00324E',
    width: '100%',
    alignItems: 'center',
  },
  actionsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '30px',
  },
  appsIcon: {
    fill: '#DADADA',
    cursor: 'pointer',
  },
});

export default useStyles;
