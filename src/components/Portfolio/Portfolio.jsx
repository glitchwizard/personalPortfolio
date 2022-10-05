/* eslint-disable no-console */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';

const Portfolio = () =>  {

  const [error, setError] = useState(null);
  const [gitHubUser, setGitHubUser] = useState([]);
  const [gitHubRepos, setGitHubRepos] = useState([]);
  
  fetch('https://api.github.com/users/glitchwizard')
    .then(res => res.json())
    .then(
      (result) => {
        setGitHubUser(result);
      },
      (error) => {
        setError(error);
      }
    );

  fetch('https://api.github.com/users/glitchwizard/repos?sort=updated')
    .then(res => res.json())
    .then(
      (result) => {
        setGitHubRepos(result.slice(0,20));
      },
      (error) => {
        setError(error);
      }
    );

  if (error) {
    console.warn(error);
  }
  
  return(
    <div className={styles.Portfolio}>
      <div className={styles.portfolioBlockContainerWrapper}>
        <h1>PORTFOLIO</h1>
        <hr style={{ margin: '25px' }} />
        <div className={styles.portfolioBlockContainer}>
          <div className={styles.portfolioBlockContainer}>
            <Coding
              cssClass={styles.portfolioInnerBlock}
              gitHubRepos={gitHubRepos}
              gitHubUser={gitHubUser}
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