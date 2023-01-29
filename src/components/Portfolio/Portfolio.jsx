/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';

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
  }, [isGitHubUserLoaded, gitHubRepos, gitHubUser, areGitHubReposLoaded]);
  
  return (
    <div className={styles.Portfolio}>
      <div className={styles.portfolioBlockContainerWrapper}>
        <h1>PORTFOLIO</h1>
        <hr style={{ margin: '25px' }} />
        <div className={styles.portfolioBlockContainer}>
          <div className={styles.portfolioBlockContainer}>
            <Coding
              cssClass={styles.portfolioInnerBlock}
              gitHubUser={gitHubUser}
              gitHubRepos={gitHubRepos}
              areGitHubReposLoaded={areGitHubReposLoaded}
              isGitHubUserLoaded={isGitHubUserLoaded}
            />
             
            <Art cssClass={styles.portfolioInnerBlock} />
            <Engineering cssClass={styles.portfolioOuterBlock} />
          </div>
        </div>
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  buttonText: PropTypes.string
};

export default Portfolio;
