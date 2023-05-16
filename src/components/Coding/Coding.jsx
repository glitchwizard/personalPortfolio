/* eslint-disable react/no-multi-comp */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Coding.module.css';
import { GitHub } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails, Skeleton, Select, MenuItem  } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import StoryCarousel from './StoryCarousel';

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
  const [howManyRepos, setHowManyRepos] = useState(6);

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleRepoQTYChange = (event) => {
    setHowManyRepos(event.target.value);
  };

  return (
    <div className={`${cssClass} ${styles.coding}`}>
      <Typography component='div' variant="h3"> 
        CODING
      </Typography> 
      <hr />
      <Grid container spacing={2} justifyContent={'center'}>  
        <Grid item xs={12}>
          <Typography variant='h4'>
            My Coding Story
          </Typography>
        </Grid>
        <Grid item 
          xs={12} 
          sm={12} 
          md={isArtActive ? 12 : 8}
        >
          <StoryCarousel />
        </Grid>
      </Grid>
      {isGitHubUserLoaded ?
        GitHubUser(gitHubUser)
        : 
        UserSkeleton()
      }
      {areGitHubReposLoaded ?
        GitHubRepos(howManyRepos, handleRepoQTYChange, gitHubRepos, isArtActive, expanded, handlePanelChange)
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

const GitHubRepos = (howManyRepos, handleRepoQTYChange, gitHubRepos, isArtActive, expanded, handlePanelChange) => {
  return <div>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <h3> Most Recently Updated Repos: </h3>
      </Grid>
      <Grid item xs={12} sm={12} md={3} xl={3} sx={{textAlign: 'right'}}>
        <h3> Repositories: </h3>
      </Grid>
      <Grid item xs={12} sm={12} md={3} xl={3}>
        {RepoSelector(howManyRepos, handleRepoQTYChange)}
      </Grid>
    </Grid>
    <p />
    <div className={styles.repoList}>
      {(gitHubRepos[0]) ?
        <Grid container
          spacing={2}
        >
          {gitHubRepos.slice(0, howManyRepos).map((repo, index) => (
            <Grid item
              key={repo.name}
              id={index}
              xs={!isArtActive ? 12 : 12}
              sm={!isArtActive ? 12 : 12}
              md={!isArtActive ? 6 : 12}
              xl={!isArtActive ? 6 : 12}>
              <Accordion expanded={expanded === index} onChange={handlePanelChange(index)} id='accordionRoot'>
                <AccordionSummary
                  id='accordionSummaryRoot'
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: 'background.paper',
                    borderBottom: '1px solid rgba(0, 0, 0, .125)',
                    justifyContent: 'space-between',
                    '& .MuiAccordionSummary-content': {
                      maxWidth: {xs: '92%', sm: '100%'},
                      overflow: 'clip',
                    }
                  }}

                >
                  <Typography
                    variant='h4'
                    sx={{
                      flexShrink: 100,
                      textAlign: 'left',
                      mr: 1
                    }}
                  >
                    {index + 1}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                    }}>
                    <Link
                      href={repo.html_url}
                      sx={{
                        overflow: 'clip',
                        whiteSpace: 'nowrap',
                        display: 'block',
                      }}
                    >
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
          <p />{console.warn(gitHubRepos)}
        </div>}
    </div>
  </div>;
};

const UserSkeleton = () => {
  return <Grid spacing={8} container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={1}>
      <Skeleton
        animation="wave"
        variant="circular"
        width={50} height={50} />
    </Grid>
    <Grid item xs={6}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={50}
        width={'100%'} />
    </Grid>
  </Grid>;
};

const RepoSelector = (howManyRepos, handleRepoQTYChange) => {
  return <Select value={howManyRepos} onChange={handleRepoQTYChange} sx={{display: 'inline-block', width: '100%'}}>
    <MenuItem value={6}>6 repos</MenuItem>
    <MenuItem value={12}>12 repos</MenuItem>
    <MenuItem value={16}>16 repos</MenuItem>
    <MenuItem value={20}>20 repos</MenuItem>
    <MenuItem value={30}>30 repos</MenuItem>
  </Select>;
};

function GitHubUser(gitHubUser) {
  return <Grid container
    spacing={1}
    direction='row'
    justifyContent='center'
    alignItems='center'

  >
    <Grid item textAlign='right'>
      <GitHub fontSize='large' />
    </Grid>
    <Grid item textAlign='center'>
      <Typography variant='h5'>
        GitHub:
      </Typography>
    </Grid>
    <Grid item textAlign='center'>
      <img
        className={styles.githubAvatar}
        src={gitHubUser.avatar_url}
        alt="" />
    </Grid>
    <Grid item>
      <Typography variant="h5">
        <Link href={gitHubUser.html_url}>
          {gitHubUser.login}
        </Link>
      </Typography>
    </Grid>
  </Grid>;
}

