import React from 'react';
import AboutBioBox from './AboutBioBox';

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
                    display: flex;
                    min-height: 500px;
                    flex-grow: 1;
                }

                .imgContainerWrapper {
                    width: 50%;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid white;
                    margin: 10px;
                }

                .imgContainer {
                    height: 100%;
                    left: 50%;
                    position: absolute;
                    overflow: hidden;
                    transform: translate(-50%, 0%);

                }

                .imgWall {
                }

                img {
                  min-height: 400px;
                  object-fit: cover;
                }
            `}
      </style>
      
      <AboutBioBox />
      <div className="imgContainerWrapper">   
        <div className="imgContainer">
          <img src="https://charlesvictus.files.wordpress.com/2016/12/10985961_10101827394927908_5039593149398642900_n.jpg" />
        </div>
      </div>
    </div>
  );
}

export default About;