import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const PortfolioMenu = () => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="outlined" size="large">Coding</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="large">Art</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="large">Mechanical Engineering</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortfolioMenu;