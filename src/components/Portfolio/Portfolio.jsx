import { useState, useEffect } from 'react';
import styles from './Portfolio.module.css';
import Art from '../Art/Art';
import Engineering from '../Engineering/Engineering';
import Coding from '../Coding/Coding';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PortfolioMenu from './PortfolioMenu';
import Box from '@mui/material/Box';

const Portfolio = () => {
  let [isGitHubUserLoaded, setisGitHubUserLoaded] = useState( false );
  let [gitHubUser, setgitHubUser] = useState( [] );
  let [areGitHubReposLoaded, setareGitHubReposLoaded] = useState( false );
  let [gitHubRepos, setgitHubRepos] = useState( [] );
  let [isActive, setIsActive] = useState( 
    {
      Coding: true, 
      Art: false, 
      'Mechanical Engineering': false
    } );

  const handleIsActive = (section) => {
    if(!isActive[section]){
      const newObject = { ...isActive, [section]: true };
      setIsActive(newObject);
    } else {
      const newObject = { ...isActive, [section]: false };
      setIsActive(newObject);
    }
  };

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
  }, [isGitHubUserLoaded, areGitHubReposLoaded]);

  return (
    <Box id='PortfolioBox'>
      <Grid container 
        spacing={1} 
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        id='PortfolioGridContainer'
      >
        <Grid item xs={10} md={8} lg={10}>
          <Typography variant='h1'>
            PORTFOLIO
          </Typography>
        </Grid>
        <Grid item xs={10} md={12}>
          <hr style={{ margin: '25px' }} />
        </Grid>
        <Grid item xs={12}>
          <PortfolioMenu 
            handleIsActive={handleIsActive} 
            isActive={isActive}
          />
        </Grid>
        {isActive['Coding'] ? 
          <Grid item 
            xs={!isActive['Art'] ? 12 : 12} 
            md={!isActive['Art'] ? 12 : 6}
          >
            <Coding
              cssClass={styles.portfolioInnerBlock}
              gitHubUser={gitHubUser}
              gitHubRepos={gitHubRepos}
              areGitHubReposLoaded={areGitHubReposLoaded}
              isGitHubUserLoaded={isGitHubUserLoaded}
              isActiveTracker={isActive}
            />
          </Grid>
          : null
        }
        {isActive['Art'] ? 
          <Grid item 
            xs={!isActive['Coding'] ? 12 : 6} 
            md={!isActive['Coding'] ? 12 : 6}
          >
            <Art cssClass={styles.portfolioInnerBlock}/>
          </Grid>
          : null
        }
        {isActive['Mechanical Engineering'] ? 
          <Grid item xs={10} md={10}>
            <Engineering cssClass={styles.portfolioOuterBlock}/>
          </Grid>
          : null
        }

      </Grid>
    </Box>
  );
};

export default Portfolio;
