import {Button, Grid} from '@mui/material';
import React from 'react';
// import styles from './Header.module.css';

let Header = () => {

  return (
    <Grid 
      container 
      spacing={2} 
      my={1}
      justifyContent='right'
    >
      <Grid item>
        <Button href="#Portfolio" variant="outlined" size="large">PORTFOLIO</Button>
      </Grid>
      <Grid item>
        <Button href="#About" variant="outlined" size="large">ABOUT</Button>
      </Grid>
    </Grid>
  );
};
  
Header.propTypes = {
};
  
export default Header;