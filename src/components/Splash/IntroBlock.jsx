import React from 'react';
import styles from './IntroBlock.module.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function IntroBlock() {
  return (
    <Paper className={styles.componentStyle}>
      <Typography variant='h4'>
        CHARLES
      </Typography>
      <Divider my={10}>
        McGOWAN
      </Divider>
      <Grid container
        justifyContent='center'
        id='mainBlock'
        rowSpacing={3}
      >
        <Grid item xs={12}
          id='blockRow1'
        >
          <Grid container
            justifyContent={'center'}
            id='blockRow1Container'
            spacing={0.5}
            wrap='nowrap'
          >
            {
              ['ENGINEER', 'DEVELOPER', 'ARTIST'].map((skill) => (
                <Grid key={skill} item>
                  <Paper
                    className={styles.itemStyle}
                    sx={{p:0.5, m:0.5}}
                  >
                    {skill}
                  </Paper>
                </Grid>
              ))
            }
          </Grid>
          <Grid item xs={12}>
            <Grid container 
              justifyContent={'center'}
              spacing={0.5}
              id='blockRow2Container'
              wrap='nowrap'
            >
              {
                ['CONSULTANT', 'ENTERTAINER', 'BUILDER'].map((skill) => (
                  <Grid key={skill} item>
                    <Paper 
                      className={styles.itemStyle}
                      sx={{p:0.5}}
                    >
                      {skill}
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default IntroBlock;