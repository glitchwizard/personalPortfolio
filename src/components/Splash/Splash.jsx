import React from 'react';
import IntroBlock from './IntroBlock';
import styles from './Splash.module.css';
import Header from '../Header/Header';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Splash() {

  const componentStyle = {
  };

  return (
    <Box style={componentStyle}>
      <Grid 
        container 
        spacing={1}
        justifyContent='center'
      >
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={10} md={12}>
          <img 
            className={styles.splashImg} 
            src="https://charlesvictus.files.wordpress.com/2016/12/cropped-12241623_10101849344650488_8524571144034335838_n12.jpg" 
          />
          <Grid 
            container 
            spacing={1} 
            justifyContent={{xs: 'center', sm:'flex-start'}}
            sx={{
              position: 'absolute',
              top: '22%',
              left: 0,
            }}
          >
            <Grid 
              xs={2}
              sm={2}
              md={3}
            />
            <Grid 
              item 
              xs={10}
              sm={6}
              md={4}
              lg={4}
            >
              <IntroBlock/> 
            </Grid>
          </Grid>        
        </Grid>
      </Grid>
    </Box>
  );
}
 
export default Splash;