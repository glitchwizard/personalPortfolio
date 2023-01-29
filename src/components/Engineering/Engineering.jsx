import React from 'react';
import PropTypes from 'prop-types';
import styles from './Engineering.module.css';

// TODO: complete this component and refactor Portfolio component to use this

const photos = [
  {
    src: 'https://i.imgur.com/5OzaXLU.jpg',
  },
  {
    src: 'https://i.imgur.com/JfkKjhQ.jpg',
  },
  {
    src: 'https://i.imgur.com/8kiIoD5.jpg',
  },
  {
    src: 'https://i.imgur.com/k50soPQ.jpg',
  },
  {
    src: 'https://i.imgur.com/YQPF18K.jpg',
  },
  {
    src: 'https://i.imgur.com/CxoEzC2.jpg',
  },
];

const Engineering = ({cssClass}) => {
  <div className={`${cssClass} ${styles.engineering}`}>
    <h2>ENGINEERING</h2>
    <hr />
    <h3>Disney Parade Float Design</h3>
    Marshmallow Character - Disney Frozen Parade Shanghai
    <p>
      I was responsible for all mechanical design, and manufacturing
      specifications for the internals of this project. I designed the float
      chassis, puppet skeleton, and worked with the fab team to get the
      articulation smooth.
    </p>
    <p>
      I designed and created all documentation and 3D CAD work in Autodesk
      Inventor. The character Marshmallow was given to me by the client, and
      we used that as a starting point to build the rest of the cart. They
      wanted it 16 feet high, so after scaling it to the right size, we went
      to work.
    </p>
    <h4>Gallery:</h4>
    <div className={styles.marshmallowGalleryContainer}>
      <div className={styles.marshmallowGallery}>
        {photos.map((photo) => (
          <div className={styles.marshmallowGalleryPhoto} key={photo.src}>
            <img className={styles.marshImg} src={photo.src} />
          </div>
        ))}
      </div>
      <a className={styles.centeredItem} href="https://imgur.com/a/J8Ud4s5">
        See full size images here
      </a>
    </div>
    <h4>Video:</h4>
    <div className={styles.youtubeContainer}>
      <iframe
        className={styles.portfolioYoutube}
        src="https://www.youtube.com/embed/8IPPW_49P44"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>;
};

Engineering.propTypes = {
  cssClass: PropTypes.string,
};

export default Engineering;