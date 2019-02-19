import React from 'react';
import PropTypes from 'prop-types';

function IntroBlock({}) {
  return (
    <div className="componentStyle">
      <style jsx>{`
      .componentStyle {
        border: 1px solid white;
        padding: 15px;
        width: 30%;
        background-color: rgba(0,0,0,0.5);
        top: 50px;
        text-align: center;
        position: absolute;
        left: 5%;
        top: 25%;
        min-width: 180px;
      }
      .componentStyle:hover {
        background-color: #292929;
      }
    `}
      </style>
            
      <h2>CHARLES McGOWAN</h2>
      <hr/>
      <p>
              ENGINEER // WEB DEV // ARTIST
      </p> 
    </div>
  );
}

IntroBlock.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default IntroBlock;