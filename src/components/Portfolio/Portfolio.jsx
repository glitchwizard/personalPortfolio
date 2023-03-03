/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PortfolioMenu from './PortfolioMenu';
import Box from '@mui/material/Box';

const Portfolio = () => {
  let [isGitHubUserLoaded, setisGitHubUserLoaded] = useState( false );
  let [gitHubUser, setgitHubUser] = useState( [] );
  let [areGitHubReposLoaded, setareGitHubReposLoaded] = useState( false );
  let [gitHubRepos, setgitHubRepos] = useState( [] );

  useEffect (() => {
    let userInfo = {};

    fetch('https://api.github.com/users/glitchwizard')
      .then(res => res.json())
      .then((userFetchResult) => {
        userInfo.user = userFetchResult;
        setgitHubUser(userFetchResult);
        setisGitHubUserLoaded(true);
      });
        
    fetch('https://api.github.com/users/glitchwizard/repos?sort=updated')
      .then(res => res.json())
      .then((repoListFetchResult) => {
        userInfo.repos = repoListFetchResult;
        setgitHubRepos(repoListFetchResult);
        setareGitHubReposLoaded(true);
      });
  }, [isGitHubUserLoaded, areGitHubReposLoaded]);

  return (
    <Box>
      <Typography variant='h1'>
        PORTFOLIO
      </Typography>
      <hr style={{ margin: '25px' }} />
      <PortfolioMenu />
      <Grid container 
        spacing={2} 
        columns={2}
        className={styles.portfolioBlockContainer}
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
      >
        <Grid item xs={2} md={1}>
          <Coding
            cssClass={styles.portfolioInnerBlock}
            gitHubUser={gitHubUser}
            gitHubRepos={gitHubRepos}
            areGitHubReposLoaded={areGitHubReposLoaded}
            isGitHubUserLoaded={isGitHubUserLoaded}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Art cssClass={styles.portfolioInnerBlock}/>
        </Grid>
        <Grid item sm={2} md={2}>
          <Engineering cssClass={styles.portfolioOuterBlock}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
