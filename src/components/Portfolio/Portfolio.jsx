import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';

const Portfolio = () => {
  const [error, setError] = useState(null);
  const [isGitHubUserLoaded, setisGitHubUserLoaded] = useState( false );
  const [gitHubUser, setgitHubUser] = useState( [] );
  const [areGitHubReposLoaded, setareGitHubReposLoaded] = useState( false );
  const [gitHubRepos, setgitHubRepos] = useState( [] );
  
  useEffect (() => {
    let localUserInfo;

    if (localStorage.getItem('localUserInfo')){
      localUserInfo = JSON.parse(localStorage.getItem('localUserInfo'));
      setgitHubUser(localUserInfo.user);
      setgitHubRepos(localUserInfo.repos);
      setisGitHubUserLoaded(true);
      setareGitHubReposLoaded(true);
    }
    
    if (localUserInfo && new Date().toDateString() !== localUserInfo.date){
      localUserInfo = null;
    }

    if (!localUserInfo){
      fetch('https://api.github.com/users/glitchwizard')
        .then(res => res.json())
        .then(
          (result) => {
            setisGitHubUserLoaded(true);
            setgitHubUser(result);
            localUserInfo.user = result;
            console.log(localUserInfo);
          },
          (error) => {
            setisGitHubUserLoaded(true);
            setError(error);
          });
          
      fetch('https://api.github.com/users/glitchwizard/repos?sort=updated')
        .then(res => res.json())
        .then(
          (result) => {
            setareGitHubReposLoaded(true);
            setgitHubRepos(result.slice(0,20));
            localUserInfo.repos = result;
            console.log(localUserInfo);
          },
          (err) => {
            setareGitHubReposLoaded(true);
            setError(err);
          });
    }
  });
  
  return (
    <div className={styles.Portfolio}>
      <div className={styles.portfolioBlockContainerWrapper}>
        <h1>PORTFOLIO</h1>
        <hr style={{ margin: '25px' }} />
        {error ? error : ''} 
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