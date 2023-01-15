import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderButton.module.css';

function HeaderButton({buttonText}) {
  return (
    <div className={styles.componentStyle}>
      {buttonText}
    </div>
  );
}

HeaderButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default HeaderButton;