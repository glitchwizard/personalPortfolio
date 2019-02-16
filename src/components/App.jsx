import React from 'react';
import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';

function App() {
  return (
    <div className="mainPage">
      <style jsx>{`
        .mainPage {
        font-family: sans-serif;
        }
    `}
      </style>
      <Splash />
      <Portfolio />
      <About />
    </div>
  );
}

// note, want 'Scto Grotesk A' font eventually

export default App;