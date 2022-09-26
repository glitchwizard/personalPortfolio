import React from 'react';
import HeaderButton from './HeaderButton';
import IntroBlock from './IntroBlock';
import styles from './Splash.module.css';

function Splash() {
  return (
    <div className={styles.componentStyle}>
      <div className={styles.headerContainer}>
        <div className={styles.headerSubChunk}>
          <div className={styles.headerLinkBlock}>
            <a href="#Portfolio"> <HeaderButton buttonText="PORTFOLIO"/></a>
            <a href="#About"><HeaderButton buttonText="ABOUT" /></a>
            {/* TODO: <a href="#Contact"><HeaderButton buttonText="CONTACT" /></a> */}
          </div>
        </div>  
      </div>

      <div className={styles.imgBlock}>
        <IntroBlock/>  
        <img className={styles.splashImg} src="https://charlesvictus.files.wordpress.com/2016/12/cropped-12241623_10101849344650488_8524571144034335838_n12.jpg" />
      </div>
    </div>
  );
}

export default Splash;