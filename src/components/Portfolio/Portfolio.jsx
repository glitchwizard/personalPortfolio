import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

function Portfolio() {
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
                    text-align: center;
                }

                .componentStyle:hover {
                    background-color: #292929;
                }

                .portfolioBlockContainer {
                    display: inline-block;

                }
                .portfolioBlock {
                    min-width: 300px;
                    max-width: 425px;
                    min-height: 325px;
                    border: 1px solid white;
                    margin: 15px;
                    display: inline-block;
                    padding: 15px;
                }
                iframe {
                    width: 300px; 
                    height: 180px; 
                    frameborder: 0; 
                    allowtransparency: 'true'; 
                    allow: 'encrypted-media';
                }
            `}
      </style>
      <div className="portfolioBlockContainer">

        <div className="portfolioBlock coding">
                CODING
        </div>
        <div className="portfolioBlock art">
          <h2>ART</h2>
          <hr/>
          <h3>Albums I've recorded on:</h3>
          <iframe 
            src="https://open.spotify.com/embed/album/7rYeayveuaNnZHEc0lbWGI" ></iframe>
        </div>
        <div className="portfolioBlock engineering">
                ENGINEERING
        </div>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  // buttonText: PropTypes.string.isRequired,
};

export default Portfolio;