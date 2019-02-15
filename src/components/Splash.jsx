import React from 'react';
import HeaderButton from './HeaderButton';

function Splash() {
  return (
    <div className="componentStyle">
      <style jsx>{`
      .componentStyle {
        height: 90vh;
        border: 1px solid white;
        margin: 8px;
      }
      img {
          z-index: -2;
          overflow: hidden;
          object-fit: cover;
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
          border: 2px white solid;
      }
    `}
      </style>
        <HeaderButton buttonText="PORTFOLIO" />
        <HeaderButton buttonText="ABOUT" />
        <HeaderButton buttonText="CONTACT" />
          <img src="https://charlesvictus.files.wordpress.com/2016/12/cropped-12241623_10101849344650488_8524571144034335838_n12.jpg" />
    </div>
  );
}

export default Splash;