import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    padding: '20px 0px',
    marginTop: '20px',
    boxShadow: '0px 5px 30px 10px rgba(34, 60, 80, 0.2);',
    borderRadius: '4px',
  },
  locationNameWrapper: {
    width: '80%',
    marginTop: '40px',
  },
  locationName: {
    fontSize: '16px',
    color: '#00324E',
  },
  heading: {
    color: '#00324E',
    textAlign: 'center',
  },
  informationBlockHeadingWrapper: {
    width: '90%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    background: '#00324E',
    padding: '0 5%',
    marginTop: '20px',
  },
  informationBlockHeading: {
    color: '#e0e7fa',
    fontWeight: 'bold',
  },
  infoRow: {
    width: '80%',
    display: 'flex',
    padding: '0 10%',
    marginTop: '20px',
    justifyContent: 'space-between',
    borderBottom: '1px solid gainsboro',
  },
  informationTitle: {
    width: '40%',
    color: '#00324E',
  },
  informationValue: {
    color: '#00324E',
    width: '40%',
  },
  ghsIconsWrapper: {
    marginTop: '10px',
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 10%',
  },
  signalWord: {
    fontSize: '18px',
    color: '#00324E',
    fontWeight: 'bold',
  },
  tableHeading: {
    fontSize: '18px',
    color: '#00324E',
    fontWeight: 'bold',
  },
});

export default useStyles;
