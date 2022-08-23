import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '18px',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  loading: {
    height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '10px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));
