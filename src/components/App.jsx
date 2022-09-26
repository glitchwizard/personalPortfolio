import React from 'react';
import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Particles from 'react-particles-js';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.mainPage}>
      <Particles 
        className={styles.particleWrapper}
        canvasClassName={styles.particleCanvas}
        height="100vh" 
        width="100vw"
        style={{
          zIndex: '-1',
          position: 'fixed',
          top: '0px',
          margin: '0',
          padding: '0'
        }}/> 
      <div className={styles.pageItems}>
        <Splash />
        <span id="Portfolio" />
        <Portfolio id="Portfolio"/>
        <span id="About" />
        <About id="About"/>
      </div>
    </div>
  );
}


export default App;