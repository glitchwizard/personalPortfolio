import React, {useCallback, useEffect, useState} from 'react';
import Splash from './Splash/Splash';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import styles from './App.module.css';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { particleSettings } from './particlesSettings';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme_settings from './theme';

const theme = createTheme(theme_settings);

const App = () => {

  const [areParticlesLoaded, setAreParticlesLoaded] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // await console.log(container);
  }, []);

  useEffect(() => {
    setAreParticlesLoaded(true);
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.mainPage}>
        { areParticlesLoaded ?
          <Particles
            className={styles.particleWrapper}
            canvasClassName={styles.particleCanvas}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={ particleSettings }
          /> :
          <span />
        }
        <div className={styles.pageItems}>
          <Splash />
          <span id="Portfolio" />
          <Portfolio id="Portfolio" />
          <span id="About" />
          <About id="About" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;