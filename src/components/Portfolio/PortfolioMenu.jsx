import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';


const PortfolioMenu = ({handleIsActive, isActive}) => {

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {['Coding', 'Art', 'Mechanical Engineering'].map((buttonText,index) => (
          <Grid item key={index}>
            <Button 
              variant={isActive[buttonText] ? 'contained' : 'outlined'} 
              size="large"
              onClick={() => {handleIsActive(buttonText);}}
            >
              {buttonText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

PortfolioMenu.propTypes = {
  handleIsActive: PropTypes.any,
  isActive: PropTypes.any
};

export default PortfolioMenu;