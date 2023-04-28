/* eslint-disable react/no-multi-comp */
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
import useMediaQuery from '@mui/material/useMediaQuery';

const root = ReactDOM.createRoot(document.getElementById('react-app-root'));

let theme = createTheme(theme_settings);
theme = responsiveFontSizes(theme);

// eslint-disable-next-line no-unused-vars
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

const BreakPointIndicator = () => {
  const greaterThanXLarge = useMediaQuery(theme.breakpoints.up('xl'));
  const greaterThanLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const greaterThanMid = useMediaQuery(theme.breakpoints.up('md'));
  const greaterThanSmall = useMediaQuery(theme.breakpoints.up('sm'));
  const greaterThanXSmall = useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <div style={{position: 'absolute', top: 0}}>
      { greaterThanXLarge ?
        <span>-</span>:
        <span display='none'></span>
      }
      { greaterThanLarge ?
        <span>-</span>:
        <span display='none'></span>
      }
      { greaterThanMid ?
        <span>-</span>:
        <span display='none'></span>
      }
      { greaterThanSmall ?
        <span>-</span>:
        <span display='none'></span>
      }
      { greaterThanXSmall ?
        <span>-</span>:
        <span display='none'></span>
      }
    </div>
  );
};



root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BreakPointIndicator />
      <App id="appRoot"/>
    </ThemeProvider>
  </React.StrictMode>
);
