import React from 'react';
import styles from './AboutBioBox.module.css';
import Typography from '@mui/material/Typography';


function AboutBioBox() {
  return (
    <div className={styles.componentStyle}>
      <div className={styles.mainBioContainer}>
        <h1>ABOUT</h1>
        <hr />
        <ul>
          <li><strong>Location: </strong> Portland, Oregon</li>
        </ul>
        I'm happiest when I'm creating something. 
        <p>
          Creating art, friendship, community, and entertainment are my strongest desires. Leaving something better than I found it.
        </p> 
        <p>
          My dream is to inspire and help others be the greatest version of themselves.
        </p>
        <Typography variant="body2" align={'left'} sx={{my:1}}>
          While I am passionate about my different disciplines, 
          I recognize that there is always more to learn and that 
          I am still growing in each of them. I am grateful for 
          the opportunities I have had to explore and develop my skills, 
          and seek more in the future.
        </Typography>
      </div>
    </div>
  );
}

export default AboutBioBox;