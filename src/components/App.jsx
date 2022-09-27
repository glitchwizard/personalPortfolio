import React, {useCallback} from 'react';
import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import styles from './App.module.css';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className={styles.mainPage}>
      <Particles
        className={styles.particleWrapper}
        canvasClassName={styles.particleCanvas}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000000',
              opacity: 0.1,
            },
          },
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.9,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className={styles.pageItems}>
        <Splash />
        <span id="Portfolio" />
        <Portfolio id="Portfolio" />
        <span id="About" />
        <About id="About" />
      </div>
    </div>
  );
};


export default App;