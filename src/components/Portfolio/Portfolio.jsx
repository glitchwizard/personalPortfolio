import React from 'react';
import PropTypes from 'prop-types';



class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isGitHubUserLoaded: false,
      gitHubUser: []
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
                      text-align: center;
                  }

                  .portfolioBlockContainerWrapper{
                    margin: auto;
                    display: inline-block;
                  }

                  .portfolioBlockContainer {
                    display: flex;
                    flex-wrap: wrap;
                  }

                  .portfolioBlock {
                      min-width: 300px;
                      max-width: 425px;
                      min-height: 325px;
                      border: 1px solid white;
                      margin: 15px;
                      display: inline-block;
                      padding: 15px;
                  }

                  .portfolioBlock:hover {
                      background-color: #292929;
                  }

                  .iFrameSpotify {
                      width: 300px; 
                      height: 180px; 
                      frameborder: 0; 
                      allowtransparency: 'true'; 
                      allow: 'encrypted-media';
                  }

                  h2 {
                    padding: 0;
                    margin: 0;
                  }

                  a {
                    color: lightblue;
                  }

                  
              `}
        </style>
        <div className="portfolioBlockContainerWrapper">
          <div className="portfolioBlockContainer">

            <div className="portfolioBlock coding">
              <h2>CODING</h2>
              <hr/>
              GitHub: <a href={this.state.gitHubUser.html_url}>{this.state.gitHubUser.login}</a>
                
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