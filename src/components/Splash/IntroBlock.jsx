import React from 'react';
import styles from './IntroBlock.module.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function IntroBlock() {

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Paper className={styles.componentStyle}>
      <Typography variant='h2'>
        CHARLES
      </Typography>
      <Divider my={5}>
        <Typography variant='h4'>
          McGOWAN
        </Typography> 
      </Divider>
      <Grid container
        justifyContent='center'
        id='mainBlock'
        rowSpacing={3}
        spacing={2}
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
                    sx={{p:0.5, m:0.5, fontSize: {md:'1vw', sm:'1.75vw', xs:'2.5vw'}}}

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
                      sx={{p:0.5, fontSize: {md:'1vw', sm:'1.75vw', xs:'2.5vw'}}}
                    >
                      {skill}
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <Divider />
          </Grid>
          <Collapse
            in={greaterThanMid}
          >
            <Grid 
              item 
              sx={{my:2, mx:3}} 
              xs={12}
              // display={{xs:'none',md:'inherit'}}
            >
              <Typography variant="body2" align={'justify'}>
                A creative solution generator, bringing to the table a truly 
                diverse set of skills, with real-world experience as a 
                full-stack web developer and software engineer, mechanical engineer, 
                visual artist, musician, entertainer, and builder. 
                <p />
                Each of these areas provides unique perspective and abilities, 
                tackling challenges in innovative ways. 
              </Typography>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default IntroBlock;