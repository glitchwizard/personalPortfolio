import React from 'react';
import PropTypes from 'prop-types';
import styles from './Engineering.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import ImageList from '@mui/material/ImageList';
import {ImageListItem, Button, Paper, Link} from '@mui/material';

// TODO: complete this component and refactor Portfolio component to use this

const photos = [
  {
    img: 'https://i.imgur.com/CxoEzC2.jpg',
    title: 'fullView',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.imgur.com/YQPF18K.jpg',
  },
  {
    img: 'https://i.imgur.com/8kiIoD5.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.imgur.com/k50soPQ.jpg',
    cols: 2,
  },
  {
    img: 'https://i.imgur.com/JfkKjhQ.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.imgur.com/5OzaXLU.jpg',
    rows: 2,
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Engineering = ({cssClass}) => {
  return(
    <Box className={`${cssClass} ${styles.engineering}`}>
      <Grid
        container
        spacing={1}
        justifyContent="center"        
      >
        <Grid item xs={12}>
          <Typography variant='h3'>
            ENGINEERING
          </Typography>
          <hr />
        </Grid>      
        <Grid item>
          <Divider variant='middle'/>
        </Grid>
        <Grid container 
          spacing={2} 
          sx={{m:1}}
          justifyContent='center'
        >
          <Grid item xs={12} md={6}>
            <Card sx={{p:2}}>
              <CardContent>
                <Typography variant='h3'>
                  Disney Parade Float Design
                </Typography>
                <Divider variant='middle' sx={{my:1}}/>
                <Typography variant='h4'>
                  <b> Marshmallow Character </b>
                </Typography>
                <Typography variant='h6'>
                  Disney Frozen Parade Shanghai
                </Typography>
              </CardContent>
            </Card>
          </Grid> 
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='body1'>
                  I was responsible for all mechanical design, and manufacturing
                  specifications for the internals of this project. I designed the float
                  chassis, puppet skeleton, and worked with the fab team to get the
                  articulation smooth.
                </Typography>
                <Typography variant='body1'>
                  I designed and created all documentation and 3D CAD work in Autodesk
                  Inventor. The character Marshmallow was given to me by the client, and
                  we used that as a starting point to build the rest of the cart. They
                  wanted it 16 feet high, so after scaling it to the right size, we went
                  to work.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant='h2'>
              Gallery
            </Typography>
            <ImageList
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {photos.map((photo) => (
                <ImageListItem key={photo.img}
                  cols={photo.cols || 1}
                  rows={photo.rows || 1}>
                  <img
                    {...srcset(photo.img, 121, photo.rows, photo.cols)}
                    alt={photo.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))

              }
            </ImageList>
            <Link href="https://imgur.com/a/J8Ud4s5">
              <Button variant="outlined">
                See full size images here
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3"
            >
              Video
            </Typography>
            <Paper 
              className={styles.youtubeContainer}
            >
              <iframe
                className={styles.portfolioYoutube}
                src="https://www.youtube.com/embed/8IPPW_49P44"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Engineering.propTypes = {
  cssClass: PropTypes.string,
};

export default Engineering;