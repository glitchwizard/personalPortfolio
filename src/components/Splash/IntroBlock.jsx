import React from 'react';
import styles from './IntroBlock.module.css';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

function IntroBlock() {
  return (
    <Paper className={styles.componentStyle}>
      <Typography variant='h4'>CHARLES McGOWAN</Typography>
      <hr/>
      <p />
      <Typography variant='body2'>
        ENGINEER // DEVELOPER // ARTIST
      </Typography>
      <br />
      <Typography variant='body2'>
        CONSULTANT // ENTERTAINER // BUILDER
      </Typography>
    </Paper>
  );
}

export default IntroBlock;