import React from 'react';
import AboutBioBox from './AboutBioBox';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid';

function About() {
  return (
    <Grid container
      justifyContent='center'
      id='mainBlock'
      spacing={{xs: 0, md: 2}}
      rowSpacing={2}
      sx={{
        mb: 2,
      }}

    >
      <Grid item xs={12} md={5} 
        id='blockRow1'
      > 
        <AboutBioBox />
      </Grid>
      <Grid 
        item 
        xs={12} md={5}
        id='blockRow2'
      >
        <Box 
          sx={{
            minHeight: {xs: '400px', md: '100%'},
            backgroundImage: 'url("https://charlesvictus.files.wordpress.com/2016/12/10985961_10101827394927908_5039593149398642900_n.jpg")',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            borderRadius: '0.5em',
          }} 
        />
      </Grid>
    </Grid>
  );
}

export default About;

{/* <div className={styles.imgContainer}>
          <Box 
            className={styles.aboutImg} 

          />
        </div> */}