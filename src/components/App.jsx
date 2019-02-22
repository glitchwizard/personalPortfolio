import React from 'react';
import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';

function App() {
  return (
    <div className="mainPage">
      <style jsx>{`
        .mainPage {
          font-family: "Montserrat", sans-serif;
          
        }
      @import url("https://fonts.googleapis.com/css?family=Montserrat");
      `}
      </style>
      <Splash />
      <Portfolio />
      <About />
    </div>
  );
}


export default App;