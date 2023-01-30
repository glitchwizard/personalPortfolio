/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Coding.module.css';
import { GitHub } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Coding = (
  {cssClass, 
    gitHubRepos, 
    gitHubUser,
    areGitHubReposLoaded,
    isGitHubUserLoaded
  }) => {

  const componentStyle = {
    overflow: 'hidden',
  };
  
  return (
    <Grid item sx={[cssClass, componentStyle]}>
      <div >
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
            <p />
            <div className={styles.repoList}>
              
              { (gitHubRepos[0]) ? 
                gitHubRepos.slice(0,20).map((repo, index) => (
                  <a href={repo.html_url} className={styles.repoName} key={repo.name}>
                    <Card className={styles.repoListItem}>
                      <CardContent sx={{ margin: 0, }}>
                        <Typography variant='h6' className={styles.noWrap}>
                          {index + 1} - {repo.name}
                        </Typography>
                        <hr />
                        <Typography component='div' className={styles.repoInnerCard}>
                          <Typography variant="body1" className={styles.repoDesc}>
                            {repo.description} 
                          </Typography>
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                )) : 
                <div>Error loading repos
                  <p/>{console.log(gitHubRepos)}
                </div>
              }
            </div>
          </div>
          : <Skeleton animation="wave"/>     
        }
      </div>
    </Grid>
  );
};

Coding.propTypes = {
  cssClass: PropTypes.any,
  gitHubRepos: PropTypes.array,
  gitHubUser: PropTypes.any,
  areGitHubReposLoaded: PropTypes.bool,
  isGitHubUserLoaded: PropTypes.bool
};

Coding.defaultProps = {};

export default Coding;
