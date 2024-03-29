
const theme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#eeeeee',
    },
    background: {
      default: '#000000'
    }
  },
  
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css?family=Montserrat');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    MuiPaper: {
      backgroundColor:'blue',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 1024,
      lg: 1200,
      xl: 1300,
    },
  },
};

export default theme;