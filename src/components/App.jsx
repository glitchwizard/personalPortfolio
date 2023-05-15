import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Box>
      <Grid container spacing={2} 
        justifyContent='center' 
        id='mainPageGridContainer'
        sx={{px: 2}}
      >
        <Grid item id="mainPageGridItem" zeroMinWidth>
          <Grid container 
            id='pageItemContainer'
            spacing={3}
            justifyContent='center'
          >
            <Grid item 
              xs={12} 
              md={8} 
              id='splashContainer'
            >
              <Splash />
            </Grid>
            <Grid item xs={12} md={10}>
              <span id="Portfolio" />
              <Portfolio id="Portfolio" />
            </Grid>
            <Grid item xs={12} md={10}>
              <span id="About" />
              <About id="About" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;