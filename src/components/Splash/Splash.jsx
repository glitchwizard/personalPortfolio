/* eslint-disable no-unused-vars */
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
        justifyContent='center'
        id='splashGridMainContainer'
        spacing={3}
      >
        <Grid item xs={12} id='splashGridHeaderItem'>
          <Header />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={10} 
          md={12} 
          id='splashGridImageItem'
        >
          <Grid 
            id='splashImageGridContainer'
            container 
            justifyContent={{xs: 'center', sm:'flex-start'}}
            sx={{
              borderRadius: '0.5em',
              backgroundImage: 'url("https://charlesvictus.files.wordpress.com/2016/12/cropped-12241623_10101849344650488_8524571144034335838_n1-1.jpg")',
              backgroundSize: 'cover',
              backgroundPositionX: 'center',
              backgroundPositionY: 'center',
            }}
          >
            <Grid 
              item
              id='imageLeftSpace'
              xs={0.5}
              sm={0.5}
              md={1}
            />
            <Grid 
              item 
              id='imageIntroBlockGridItem'
              xs={10}
              sm={10}
              md={7}
              lg={7}
              sx={{
                my: 12
              }}
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