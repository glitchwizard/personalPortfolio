import React from 'react';
import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="mainPage">
      <style jsx>{`
        .mainPage {
          font-family: "Montserrat", sans-serif;
          position: relative;
        }
      @import url("https://fonts.googleapis.com/css?family=Montserrat");

      .pageItems {
        position: absolute;
        top: 0px;
      }

      .particleWrapper {

      }

      .particleCanvas {

      }
      `}
      </style>
        <Particles 
          className="particleWrapper"
          canvasClassName="particleCanvas"
          height="100vh" 
          width="100vw"
          style={{
            zIndex: "-1",
            position: "fixed",
            top: '0px',
            margin: '0',
            padding: '0'
          }}/> 
      <div className='pageItems'>
        <Splash />
        <Portfolio />
        <About />
      </div>
    </div>
  );
}


export default App;