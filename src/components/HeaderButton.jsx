import React from 'react';
import PropTypes from 'prop-types';

function HeaderButton({buttonText}) {
  return (
    <div className="componentStyle">
      <style jsx>{`
      .componentStyle {
        border: 1px solid white;
        padding: 15px;
        margin: 15px;
        display: inline-block;  
      }
    `}
      </style>
      {buttonText}
    </div>
  );
}

HeaderButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default HeaderButton;