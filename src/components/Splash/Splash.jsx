import React from 'react';
import IntroBlock from './IntroBlock';
import styles from './Splash.module.css';
import Header from '../Header/Header';
import Grid from '@mui/material/Grid';

function Splash() {

  const componentStyle = {
    margin: 1,
    paddingTop: 2,
    paddingBottom: 2,
    display: 'block',
    // border: '1px solid yellowgreen',
    width: '100%',
    maxWidth: '1224px',
  };

  return (
    <Grid item sx={componentStyle}>
      <Header />
      <div className={styles.imgBlock}>
        <IntroBlock/> 
        <img className={styles.splashImg} src="https://charlesvictus.files.wordpress.com/2016/12/cropped-12241623_10101849344650488_8524571144034335838_n12.jpg" />
      </div>
    </Grid>
  );
}
 
export default Splash;