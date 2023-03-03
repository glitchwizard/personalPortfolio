import React, {useCallback, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Particles from 'react-particles';
import { particleSettings } from './components/particlesSettings';
import styles from './components/App.module.css';
import { loadFull } from 'tsparticles';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import theme_settings from './theme';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('react-app-root'));

let theme = createTheme(theme_settings);
theme = responsiveFontSizes(theme);

const Background = () => {
  const [areParticlesLoaded, setAreParticlesLoaded] = useState(false);
  const particlesInit = useCallback(async (engine) => {
  // console.log(engine);
  // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  useEffect(() => {
    setAreParticlesLoaded(true);
  });

  const particlesLoaded = useCallback(async () => {
    // await console.log(container);
  }, []);

  return (
    <div>
      <CssBaseline />
      { areParticlesLoaded ?
        <Particles
          className={styles.particleWrapper}
          canvasClassName={styles.particleCanvas}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ particleSettings }
        />:
        <span />
      }
    </div>
  );
};


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Background />
      <App id="appRoot"/>
    </ThemeProvider>

  </React.StrictMode>
);
