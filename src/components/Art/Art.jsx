import React from 'react';
import PropTypes from 'prop-types';
import styles from './Art.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Art = ({ cssClass }) => {
  return (
    <Grid conatainer className={`${cssClass} ${styles.art}`}>
      <div>
        <Typography variant="h3">ART</Typography>

        <hr />

        <h3>Albums I've recorded on:</h3>
        <div className={styles.spotifyFlex}>
          <iframe
            loading="lazy"
            className={styles.iFrameDivSpotify}
            src="https://open.spotify.com/embed/album/7rYeayveuaNnZHEc0lbWGI"
          />

          <iframe
            className={styles.iFrameDivSpotify}
            src="https://open.spotify.com/embed/album/4Y9Dfy00JtIAvYyqto99h9"
          />

          <iframe
            className={styles.iFrameDivSpotify}
            src="https://open.spotify.com/embed/album/61PvIFaWkCLtEpuANofDWJ"
          />

          <iframe
            className={styles.iFrameDivSpotify}
            src="https://open.spotify.com/embed/album/3as5vNayNJ2l8CnZ5oHVEV"
          />
        </div>

        <div className={styles.bandcampContainer}>
          <iframe
            className={styles.iFrameDivBandcamp}
            src="https://bandcamp.com/EmbeddedPlayer/album=3523553161/size=large/bgcol=333333/linkcol=e32c14/tracklist=true/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://targetfortomorrow.bandcamp.com/album/the-devastator">
              The Devastator by Target For Tomorrow
            </a>
          </iframe>

        </div>

        <h3>Music I've Produced:</h3>

        <h2>Justin Gibson - The Long Goodbye</h2>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dIFQiKJHTDo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <h3>Artists I've Managed:</h3>

        <div>
          <h2 width="50%">ToX!c</h2>

          <br />

          <iframe
            src="https://open.spotify.com/embed/artist/7DUfcJTCKJEz9Eh5yFevo9"
            width={'100%'}
            height="380"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </Grid>
  );
};

Art.propTypes = {
  cssClass: PropTypes.string,
};

Art.defaultProps = {};

export default Art;
