import React from 'react';
import HeaderButton from './HeaderButton';
import IntroBlock from './IntroBlock';

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

      .headerContainer {
        min-height: 80px;
        display: block;
      }

      .headerSubChunk {
        position: relative;
        display: block;
      }

      .headerLinkBlock {
        position: absolute;
        top: 0;
        right: 0;
      }
    
    `}
      </style>
      <div className="headerContainer">
        <div className="headerSubChunk">
          <div className="headerLinkBlock">
            <HeaderButton buttonText="PORTFOLIO"/>
            <HeaderButton buttonText="ABOUT" />
            <HeaderButton buttonText="CONTACT" />
          </div>
        </div>
      </div>

      <div>
          <img style={{width: '100%'}} src="https://charlesvictus.files.wordpress.com/2016/12/cropped-12241623_10101849344650488_8524571144034335838_n12.jpg" />

        <hr/>
        <IntroBlock/>  
      </div>
      <hr/>
    </div>
  );
}

export default Splash;