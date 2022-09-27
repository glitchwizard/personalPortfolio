import React from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isGitHubUserLoaded: false,
      gitHubUser: [],
      areGitHubReposLoaded: false,
      gitHubRepos: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/glitchwizard')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isGitHubUserLoaded: true,
            gitHubUser: result
          });
        },
        (error) => {
          this.setState({
            isGitHubUserLoaded: true,
            error
          });
        }
      );

    fetch('https://api.github.com/users/glitchwizard/repos?sort=updated')
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            areGitHubReposLoaded: true,
            gitHubRepos: result.slice(0,20)
          });
        },
        (error) => {
          this.setState({
            areGitHubReposLoaded: true,
            error
          });
        }
      );
  }

  render(){
    return (
      <div className={styles.Portfolio}>
        <div className={styles.portfolioBlockContainerWrapper}>
          <h1>PORTFOLIO</h1>
          <hr style={{ margin: '25px' }} />
          
          <div className={styles.portfolioBlockContainer}>
            <div className={styles.portfolioBlockContainer}>
              <Coding
                cssClass={styles.portfolioInnerBlock}
                gitHubUser={this.state.gitHubUser}
                gitHubRepos={this.state.gitHubRepos}
              />
              <Art cssClass={styles.portfolioInnerBlock} />
              <Engineering cssClass={styles.portfolioOuterBlock} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  buttonText: PropTypes.string
};

export default Portfolio;