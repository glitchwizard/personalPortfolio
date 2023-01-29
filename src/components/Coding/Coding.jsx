import React from 'react';
import PropTypes from 'prop-types';
import styles from './Coding.module.css';
import {GitHub} from '@mui/icons-material';
import { Skeleton } from '@mui/material';

const Coding = (
  {cssClass, 
    gitHubRepos, 
    gitHubUser,
    areGitHubReposLoaded,
    isGitHubUserLoaded
  }) => {
  
  return (
    <div className={`${cssClass} ${styles.coding}`}>
      <h2> CODING </h2> <hr />
      {isGitHubUserLoaded ?
        <div>
          <GitHub /> GitHub:
          <a href={gitHubUser.html_url}>
            <img
              className={styles.githubAvatar}
              src={gitHubUser.avatar_url}
              alt=""
            />
            {gitHubUser.login}
          </a>
        </div>
        : <Skeleton animation="wave"/>}
      {areGitHubReposLoaded ?
        <div>
          <h3> Most Recently Updated Repos: </h3>
          (This list is Updated in nearly real time) <p />
          <div className={styles.repoList}>
            {gitHubRepos.map((repo, index) => (
              <a href={repo.html_url} className={styles.repoName} key={repo.name}>
                <div className={styles.repoListItem}>
                  <h3 className={styles.noWrap}>{index + 1} - {repo.name}</h3>
                  <hr />
                  <div className={styles.repoInnerCard}>
                    <p className={styles.repodDesc}> {repo.description} </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        : <Skeleton animation="wave"/>     
      }
    </div>
  );
};

Coding.propTypes = {
  cssClass: PropTypes.any,
  gitHubRepos: PropTypes.any,
  gitHubUser: PropTypes.any,
  areGitHubReposLoaded: PropTypes.bool,
  isGitHubUserLoaded: PropTypes.bool
};

Coding.defaultProps = {};

export default Coding;
