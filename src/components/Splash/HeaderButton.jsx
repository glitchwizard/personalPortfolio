import React from 'react';
import PropTypes from 'prop-types';

function HeaderButton({buttonText}) {
  return (
    <div className="componentStyle">
      <style jsx>{`
      .componentStyle {
        border: 1px solid #606060;
        padding: 15px;
        margin: 15px;
        display: inline-block;
        color: white;
      }

      .componentStyle:hover {
        background-color: #292929;
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