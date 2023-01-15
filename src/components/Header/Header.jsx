import React from 'react';
import styles from './Header.module.css';
import HeaderButton from './HeaderButton';

let Header = () => {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSubChunk}>
        <div className={styles.headerLinkBlock}>
          <a href="#Portfolio"> <HeaderButton buttonText="PORTFOLIO"/></a>
          <a href="#About"><HeaderButton buttonText="ABOUT" /></a>
          {/* TODO: <a href="#Contact"><HeaderButton buttonText="CONTACT" /></a> */}
        </div>
      </div>  
    </div>
  );
};
  
Header.propTypes = {
};
  
export default Header;