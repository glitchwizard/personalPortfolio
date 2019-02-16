import React from 'react';

function About() {
  return (
    <div className="componentStyle">
      <style jsx>{`
                .componentStyle {
                    border: 1px solid white;
                    margin: 8px;
                    margin-top: 25px;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    display: block;
                }

                .imgContainerWrapper {
                    position: relative;
                    border: 1px solid green;
                    display: block;
                    padding: 0px;
                    margin: 0px;
                    min-height: 295px;
                }

                .imgContainer {
                    border: 1px solid blue;
                    margin: 0px;
                    padding: 0px;
                    position: absolute;
                    overflow: hidden;
                    max-width: 500px;
                    max-height: 500px;
                    min-height: 250px;
                    min-width: 250px;
                    right: 0px;
                    display: inline-block;
                }
            `}
      </style>
        <div className="imgContainerWrapper">   
            OUTSIDE SECOND BLOCK
            <div className="imgContainer">
            INSIDE SECOND BLOCK
            </div>
      </div>
    </div>
  );
}

export default About;