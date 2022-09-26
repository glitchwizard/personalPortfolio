import React from 'react';
import PropTypes from 'prop-types';
import styles from './Art.module.css';

const Art = ({cssClass}) => (
  <div className={`${cssClass} ${styles.art}`}>
    <h2>ART</h2>

    <hr />

    <h3>Albums I've recorded on:</h3>

    <iframe
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

    <iframe
      className={styles.iFrameDivBandcamp}
      src="https://bandcamp.com/EmbeddedPlayer/album=3523553161/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/"
      seamless
    >
      <a href="http://targetfortomorrow.bandcamp.com/album/the-devastator">
        The Devastator by Target For Tomorrow
      </a>
    </iframe>

    <h3>Music I've Produced:</h3>

    <h2>Justin Gibson - The Long Goodbye</h2>

    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/dIFQiKJHTDo"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <h3>Artists I've Managed:</h3>

    <div>
      <h2 width="50%">ToX!c</h2>

      <br />

      <iframe
        src="https://open.spotify.com/embed/artist/7DUfcJTCKJEz9Eh5yFevo9"
        width={'100%'}
        height="380"
      ></iframe>
    </div>
  </div>
);

Art.propTypes = {
  cssClass: PropTypes.object
};

Art.defaultProps = {};

export default Art;
