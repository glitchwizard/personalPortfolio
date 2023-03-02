import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <Grid container spacing={2} justifyContent='center' id='mainPageGridContainer'>
      <Grid item id="mainPageGridItem">
        <Grid container 
          id='pageItemContainer'
          spacing={12}>
          <Grid item>
            <Splash />
          </Grid>
          <Grid item>
            <span id="Portfolio" />
            <Portfolio id="Portfolio" />
          </Grid>
          <Grid item>
            <span id="About" />
            <About id="About" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;