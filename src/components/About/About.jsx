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
                    min-height: 600px;
                }

                .imgContainerWrapper {
                    position: relative;
                    display: block;
                    padding: 0px;
                    margin: 0px;
                }

                .imgContainer {
                    border: 1px solid whiteC;
                    margin: 10px;
                    padding: 0px;
                    position: absolute;
                    overflow: hidden;
                    width: 40%;
                    height: 50vh;
                    max-width: 475px;
                    max-height: 475px;
                    min-height: 250px;
                    min-width: 250px;
                    right: 0px;
                    display: inline-block;
                    text-align: center;
                }

                .imgWall {
                    text-align: center; 
                    position: absolute; 
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -40%);
                    padding-top: 7%;
                }

                img {
                    margin: auto;
                    display: inline-block;
                    height: 10%;
                }
            `}
      </style>
        <div className="imgContainerWrapper">   
                <div className="imgContainer">
                    <div className="imgWall">
                        <img src="https://charlesvictus.files.wordpress.com/2016/12/10985961_10101827394927908_5039593149398642900_n.jpg" />
                    </div>
                </div>
        </div>
    </div>
  );
}

export default About;