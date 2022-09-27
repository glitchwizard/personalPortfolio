import React from 'react';
import AboutBioBox from './AboutBioBox';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.componentStyle}>      
      <AboutBioBox />
      <div className={styles.imgContainerWrapper}>   
        <div className={styles.imgContainer}>
          <img className={styles.aboutImg} src="https://charlesvictus.files.wordpress.com/2016/12/10985961_10101827394927908_5039593149398642900_n.jpg" />
        </div>
      </div>
    </div>
  );
}

export default About;