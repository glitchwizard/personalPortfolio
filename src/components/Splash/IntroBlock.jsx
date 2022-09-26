import React from 'react';
import PropTypes from 'prop-types';
import styles from './IntroBlock.module.css';

function IntroBlock() {
  return (
    <div className={styles.componentStyle}>  
      <h2>CHARLES McGOWAN</h2>
      <hr/>
      <p>
        ENGINEER // DEVELOPER // ARTIST
      </p> 
      <br />
      CONSULTANT // ENTERTAINER // BUILDER
    </div>
  );
}

IntroBlock.propTypes = {
  buttonText: PropTypes.string,
};

export default IntroBlock;