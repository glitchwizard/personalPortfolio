import React from 'react';
import styles from './IntroBlock.module.css';
import { Paper } from '@mui/material';

function IntroBlock() {
  return (
    <Paper className={styles.componentStyle}>
      <h2>CHARLES McGOWAN</h2>
      <hr/>
      <p>
        ENGINEER // DEVELOPER // ARTIST
      </p> 
      <br />
      CONSULTANT // ENTERTAINER // BUILDER
    </Paper>
  );
}

export default IntroBlock;