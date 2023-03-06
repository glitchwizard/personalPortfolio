import React from 'react';
import styles from './IntroBlock.module.css';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Container} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  ...theme.typography.body2,
  padding: theme.spacing(0.8),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const stackSpacing = 1;
const stackMargin = 1;
const stackDirection = { xs: 'column', md: 'row' };

function IntroBlock() {
  return (
    <Paper className={styles.componentStyle}>
      <Typography variant='h4'>
        CHARLES
      </Typography>
      <Divider my={10}>
        McGOWAN
      </Divider>
      <Typography variant='body2'>
        <Grid container
          spacing={0.5}
          justifyContent='center'
          ml={-2}
        >
          <Grid item xs={10}>
            <Container>
              <Stack 
                direction={stackDirection}
                divider={<Divider orientation='vertical' flexItem />}
                spacing={stackSpacing}
                id='IntroBlockStack1'
                margin={stackMargin}
              >
                <Item>
                  ENGINEER
                </Item>
                <Item>
                  DEVELOPER
                </Item>
                <Item>
                  ARTIST
                </Item>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={10}>
            <div >
              <Stack 
                direction={stackDirection}
                divider={<Divider orientation='vertical' flexItem />}
                spacing={stackSpacing}
                id='IntroBlockStack2'
                margin={stackMargin}
              >
                <Item>
                  CONSULTANT
                </Item>
                <Item>
                  ENTERTAINER
                </Item>
                <Item>
                  BUILDER
                </Item>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </Typography>
    </Paper>
  );
}

export default IntroBlock;