import React from 'react';
import IntroBlock from './IntroBlock';
import styles from './Splash.module.css';
import Header from '../Header/Header';

function Splash() {
  return (
    <div className={styles.componentStyle}>
      <Header />
      <div className={styles.imgBlock}>
        <IntroBlock/>  
        <img className={styles.splashImg} src="https://charlesvictus.files.wordpress.com/2016/12/cropped-12241623_10101849344650488_8524571144034335838_n12.jpg" />
      </div>
    </div>
  );
}
 
export default Splash;