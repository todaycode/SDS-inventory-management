import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  sidebarIconsWrapper: {
    height: '100vh',
    width: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
  },
  iconWrapper: {
    marginBottom: '20px',
    '&:hover': {
      background: '#FAFAFA',
      cursor: 'pointer',
    },
  },
});

export default useStyles;
