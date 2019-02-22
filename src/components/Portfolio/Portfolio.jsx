import React from 'react';
import PropTypes from 'prop-types';



class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isGitHubUserLoaded: false,
      gitHubUser: [],
      areGitHubReposLoaded: false,
      gitHubRepos: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/glitchwizard")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isGitHubUserLoaded: true,
            gitHubUser: result
          });
          console.log('things are happening');
          console.log(result);
        },
        (error) => {
          this.setState({
            isGitHubUserLoaded: true,
            error
          });
        }
      )

    fetch("https://api.github.com/users/glitchwizard/repos?sort=updated")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            areGitHubReposLoaded: true,
            gitHubRepos: result.slice(0,6)
          });
        },
        (error) => {
          this.setState({
            areGitHubReposLoaded: true,
            error
          });
        }
      )
  }

  render(){
    return (
      <div className="componentStyle">
        <style jsx>{`
                  .componentStyle {
                      border: 1px solid white;
                      margin: 8px;
                      margin-top: 25px;
                      padding-top: 15px;
                      padding-bottom: 15px;
                      display: block;
                  }

                  .portfolioBlockContainerWrapper{
                    margin: auto;
                    display: inline-block;
                  }

                  .portfolioBlockContainer {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: space-evenly;
                  }

                  .portfolioBlock {
                      border: 3px solid white;
                      margin: 15px;
                      padding: 15px;
                      flex-grow: 1;
                      min-width: 350px
                  }

                  .portfolioBlock:hover {
                      background-color: #292929;
                  }

                  .iFrameSpotify {
                      width: 100%; 
                      height: 180px; 
                      frameborder: 0; 
                      allowtransparency: 'true'; 
                      allow: 'encrypted-media';
                  }

                  h2 {
                    padding: 0;
                    margin: 0;
                    text-align: center;
                  }

                  a {
                    color: lightblue;
                  }

                  .githubAvatar {
                    width: 30px;
                    transform: translate(0%,50%);
                    margin: 5px;
                  }

                  p {
                    margin: 0px;
                    padding: 0px;
                  }

                  h5 {
                    margin: 0px;
                    padding: 5px;
                    font-size: 1em;
                  }

                  .repoListItem {
                    margin-bottom:10px;
                  }

                  .coding {
                    max-width: 33%;
                    
                  }

                  .art {
                    max-width: 34%;                    
                  }

                  .engineering {
                    max-width: 33%;
                  }

              `}
        </style>
        <div className="portfolioBlockContainerWrapper">
          <div className="portfolioBlockContainer">

            <div className="portfolioBlock coding">
              <h2>CODING</h2>
              <hr/>
              GitHub: <a href={this.state.gitHubUser.html_url}>
                <img className="githubAvatar" src={this.state.gitHubUser.avatar_url} alt=""/>
              {this.state.gitHubUser.login}
              </a>
              <h3>Most Recently Updated Repos:</h3>
                {this.state.gitHubRepos.map((repo) => 
                <div className="repoListItem">
                 <h5>- {repo.name}</h5><p>{repo.description}</p>
                 </div>)}

            </div>
            <div className="portfolioBlock art">
              <h2>ART</h2>
              <hr/>
              <h3>Albums I've recorded on:</h3>
              <iframe className="iFrameSpotify"
                src="https://open.spotify.com/embed/album/7rYeayveuaNnZHEc0lbWGI" />
              <iframe className="iFrameSpotify"
                src="https://open.spotify.com/embed/album/4Y9Dfy00JtIAvYyqto99h9" />
            </div>
            <div className="portfolioBlock engineering">
              <h2>ENGINEERING</h2>
              <hr/>
              <iframe className="portfolioYoutube"
              width="100%"
              height="300px" 
              src="https://www.youtube.com/embed/8IPPW_49P44" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
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