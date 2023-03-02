/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Coding.module.css';
import { GitHub } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Coding = (
  {cssClass, 
    gitHubRepos, 
    gitHubUser,
    areGitHubReposLoaded,
    isGitHubUserLoaded
  }) => {
  
  return (
    <div className={`${cssClass} ${styles.coding}`}>
      <Typography component='div' variant="h3"> 
        CODING
      </Typography> 
      <hr />
      {isGitHubUserLoaded ?
        <Grid container spacing={1} 
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={1} textAlign='right'>
            <GitHub fontSize='large' /> 
          </Grid>
          <Grid item xs={2} textAlign='center'>
            <Typography variant='h5'>
              GitHub:
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <img
              className={styles.githubAvatar}
              src={gitHubUser.avatar_url}
              alt=""
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">
              <Link href={gitHubUser.html_url}>
                {gitHubUser.login}
              </Link>
            </Typography>
          </Grid>

        </Grid>
        : 
        <Grid spacing={8} container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={1}>
            <Skeleton 
              animation="wave" 
              variant="circular" 
              width={50} height={50} 
            />
          </Grid>
          <Grid item xs={6}>
            <Skeleton 
              animation="wave" 
              variant="rectangular" 
              height={50}
              width={'100%'}/>
          </Grid>
        </Grid>
      }
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
        : <Skeleton animation="wave" height={100}/>     
      }
    </div>
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
