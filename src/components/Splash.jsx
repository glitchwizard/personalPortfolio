import React from 'react';
import HeaderButton from './HeaderButton';

function Splash() {
  return (
    <div className="componentStyle">
      <style jsx>{`
      .componentStyle {
        border: 1px solid white;
        margin: 8px;
        padding-top: 15px;
        padding-bottom: 15px;
      }
      img {
          width: 100%;
          margin-top: 0px;
          margin-bottom: 0px;
          max-height: 500px;
          border-top: 2px white solid;
          border-bottom: 2px white solid;
          min-height: 300px;
          overflow: hidden;
          object-fit: cover;

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