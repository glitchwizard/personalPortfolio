import React from 'react';

function App() {
  return (
    <div className="mainPage">
      <style jsx>{`
      .mainPage {
      font-family: Scto Grotesk A, sans-serif;
      background-color: black;
      color: white;
      width: 100%;
      min-height: 100%;
      margin: 0px;
      padding: 0px;
      }

      body {
          margin: 0px;
          padding: 0px;
      }

      div {
          margin: 100px;
          padding: 0;
      }

      p {
          color: red;
      }
    `}
      </style>
      <div>
        <p>
              test DIV
        </p> 
      </div>
    THIS IS A TEST FONT.
    </div>
  );
}

// note, want 'Scto Grotesk A' font eventually

export default App;