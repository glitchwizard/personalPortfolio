import React from 'react';
import PropTypes from 'prop-types';
import styles from './Coding.module.css';

const Coding = ({cssClass, gitHubRepos, gitHubUser}) => {
  
  return(
    <div className={`${cssClass} ${styles.coding}`}>
      <h2> CODING </h2> <hr />
      GitHub:
      <a href={gitHubUser.html_url}>
        <img
          className={styles.githubAvatar}
          src={gitHubUser.avatar_url}
          alt=""
        />
        {gitHubUser.login}
      </a>
      <h3> Most Recently Updated Repos: </h3>
      (This list is Updated in nearly real time) <p />
      {gitHubRepos.map((repo) => (
        <div className={styles.repoListItem} key={repo.name}>
          <h5>
            -{repo.name} [ <a href={repo.html_url}> Link </a>]
          </h5>
          <p> {repo.description} </p>
        </div>
      ))}
    </div>
  );
};

Coding.propTypes = {
  cssClass: PropTypes.object,
  gitHubRepos: PropTypes.object,
  gitHubUser: PropTypes.object
};

Coding.defaultProps = {};

export default Coding;
