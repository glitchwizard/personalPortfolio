import {Button} from '@mui/material';
import React from 'react';
import styles from './Header.module.css';

let Header = () => {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSubChunk}>
        <div className={styles.headerLinkBlock}>
          <Button href="#Portfolio" variant="outlined" size="large">PORTFOLIO</Button>
          <Button href="#About" variant="outlined" size="large">ABOUT</Button>
          {/* TODO: <a href="#Contact"><Button /></a> */}
        </div>
      </div>  
    </div>
  );
};
  
Header.propTypes = {
};
  
export default Header;