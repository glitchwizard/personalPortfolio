/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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

  // eslint-disable-next-line no-unused-vars
  const portfolioStyle = {
    margin: 8,
    marginTop: 3,
    padding: (2, 4),
    width: '95%',
    boxShadow: 1,
    borderRadius: 2,
  };

  return (
    <Grid item sx={portfolioStyle}>
      <div className={styles.portfolioBlockContainerWrapper}>
        <Typography variant='h2'>
          PORTFOLIO
        </Typography>
        <hr style={{ margin: '25px' }} />
        <Grid container 
          spacing={1} 
          columns={2}
          className={styles.portfolioBlockContainer}
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
        >
          <Coding
            cssClass={styles.portfolioInnerBlock}
            gitHubUser={gitHubUser}
            gitHubRepos={gitHubRepos}
            areGitHubReposLoaded={areGitHubReposLoaded}
            isGitHubUserLoaded={isGitHubUserLoaded}
          />
          <Art cssClass={styles.portfolioInnerBlock} />
          <Engineering cssClass={styles.portfolioOuterBlock} />
        </Grid>
      </div>
    </Grid>
  );
};

Portfolio.propTypes = {
  buttonText: PropTypes.string
};

export default Portfolio;
