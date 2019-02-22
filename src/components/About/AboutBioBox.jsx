import React from 'react';

function AboutBioBox() {
  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {
        border: 1px solid white;
        padding: 15px;
        width: 46%;
        background-color: rgba(0,0,0,0.5);
        top: 50px;
        position: absolute;
        left: 5%;
        top: 25%;
        min-width: 180px;
        }
        
        h1 {
          text-align: center;
        }
        .mainBioContainer {

        }
            `}
      </style>
      <div className="mainBioContainer">
        <h1>ABOUT</h1>
        <hr />
        <ul>
          <li><strong>Location: </strong> Portland Oregon</li>

        </ul>
      </div>
    </div>
  );
}

export default AboutBioBox;