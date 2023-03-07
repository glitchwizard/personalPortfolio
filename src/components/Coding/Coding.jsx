/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Coding.module.css';
import { GitHub } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


const Coding = (
  {cssClass, 
    gitHubRepos, 
    gitHubUser,
    areGitHubReposLoaded,
    isGitHubUserLoaded,
    isActiveTracker
  }) => {

  let isArtActive = isActiveTracker['Art'];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={`${cssClass} ${styles.coding}`}>
      <Typography component='div' variant="h3"> 
        CODING
      </Typography> 
      <hr />
      {isGitHubUserLoaded ?
        <Grid container 
          spacing={1} 
          direction='row'
          justifyContent='center'
          alignItems='center'

        >
          <Grid item  textAlign='right'>
            <GitHub fontSize='large' /> 
          </Grid>
          <Grid item  textAlign='center'>
            <Typography variant='h5'>
              GitHub: 
            </Typography>
          </Grid>
          <Grid item  textAlign='center'>
            <img
              className={styles.githubAvatar}
              src={gitHubUser.avatar_url}
              alt=""
            />
          </Grid>
          <Grid item >
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
              <Grid container
                spacing={2}
              >

                {gitHubRepos.slice(0,20).map((repo, index) => (
                  <Grid item 
                    key={repo.name} 
                    id={index} 
                    xs={!isArtActive ? 12 : 12} 
                    sm={!isArtActive ? 12 : 12} 
                    md={!isArtActive ? 6 : 12} 
                    xl={!isArtActive ? 6 : 12}>
                    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography 
                          variant='h4' 
                          sx={{ 
                            width: '10%', 
                            flexShrink: 0, 
                            textAlign: 'left'
                          }}
                        >
                          {index+1}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', overflow: 'hidden'}}>
                          <Link href={repo.html_url} sx={{overflow: 'hidden'}}>
                            {repo.name}
                          </Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          {repo.description} 
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ))}
              </Grid> : 
              <div>Error loading repos
                <p/>{console.warn(gitHubRepos)}
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
  isGitHubUserLoaded: PropTypes.bool,
  isActiveTracker: PropTypes.object
};

Coding.defaultProps = {};

export default Coding;
