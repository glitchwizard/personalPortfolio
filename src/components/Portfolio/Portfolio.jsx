/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

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
    margin: 1,
    marginTop: 3,
    paddingTop: 2,
    paddingBottom: 2,
    width: '95%',
    boxShadow: 1,
    borderRadius: 2,
    // border: '1px solid blue',
  };

  const portfolioInnerBlock = {
    margin: 2,
    padding: 2,
    width: '38vh',
    flexGrow: 2,
    borderRadius: '3px',
    minWidth: '450px',
  };

  return (
    <Grid item sx={portfolioStyle}>
      <div className={styles.portfolioBlockContainerWrapper}>
        <h1>PORTFOLIO</h1>
        <hr style={{ margin: '25px' }} />
        <div className={styles.portfolioBlockContainer}>
          <div className={styles.portfolioBlockContainer}>
            <Coding
              cssClass={portfolioInnerBlock}
              gitHubUser={gitHubUser}
              gitHubRepos={gitHubRepos}
              areGitHubReposLoaded={areGitHubReposLoaded}
              isGitHubUserLoaded={isGitHubUserLoaded}
            />
             
            <Art cssClass={portfolioInnerBlock} />
            <Engineering cssClass={styles.portfolioOuterBlock} />
          </div>
        </div>
      </div>
    </Grid>
  );
};

Portfolio.propTypes = {
  buttonText: PropTypes.string
};

export default Portfolio;
