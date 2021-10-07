import './App.css';
import { CssBaseline,Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
 
function App() {
  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={0} style={{ width:'100%'}}>
       <Grid items xs={12} md={4}>
            <List/>
       </Grid>
       <Grid items xs={12} md={8}>
            <Map/>
       </Grid>
    </Grid>
    </>
  );
}

export default App;
