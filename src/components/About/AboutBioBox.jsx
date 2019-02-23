import React from 'react';

function AboutBioBox() {
  return (
    <div className="componentStyle">
      <style jsx>{`
        .componentStyle {
        border: 1px solid white;
        margin: 25px;
        padding: 15px;
        width: calc(50%);
        background-color: rgba(0,0,0,0.5);
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