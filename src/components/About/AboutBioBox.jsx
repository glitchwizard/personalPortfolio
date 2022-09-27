import React from 'react';
import styles from './AboutBioBox.module.css';

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
      </div>
    </div>
  );
}

export default AboutBioBox;