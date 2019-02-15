import React from 'react';
import Splash from './Splash';

function App() {
  return (
    <div className="mainPage">
      <style jsx>{`
        .mainPage {
        font-family: Scto Grotesk A, sans-serif;
        }
    `}
      </style>
      <Splash />
    </div>
  );
}

// note, want 'Scto Grotesk A' font eventually

export default App;