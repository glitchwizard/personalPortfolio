import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';



const StoryCarousel = () => {

  const story = {
    'title': 'Uncharted Horizons: \nA Journey of Passion and Resilience',
    'chapters': [
      {
        'chapterNumber': 1,
        'title': 'A Spark Ignites',
        'content': 'In the vibrant city of Portland, a young and determined professional named Charley embarked on a remarkable journey towards a fulfilling career. With a diverse background in data management, mechanical engineering, graphic design, and creative solutions, his journey was destined to be nothing short of extraordinary.'
      },
      {
        'chapterNumber': 2,
        'title': 'Embracing the Unfamiliar',
        'content': 'Charley\'s journey began with a pivotal moment—an introduction to the captivating world of full-stack web development. Recognizing the potential for growth and innovation, he pursued formal education and completed coursework in coding, C#, JavaScript, and React. This newfound passion ignited a spark within Charley, propelling them towards uncharted horizons.'
      },
      {
        'chapterNumber': 3,
        'title': 'Breaking Barriers',
        'content': 'Armed with newfound knowledge and an insatiable thirst for growth, Charley fearlessly dove into various roles, each offering unique challenges and opportunities. From working as a Software/Full Stack Web Developer at Lazarus Naturals, where he developed custom web applications using PHP, HTML, and CSS, to serving as a PLM Consultant and App/Software Developer at Computer Aided Technology (CATI), where he implemented solutions using C# and the Solidworks API, Charley fearlessly embraced each role, expanding his skill set and leaving a lasting impact.'
      },
      {
        'chapterNumber': 4,
        'title': 'Nurturing Collaborations',
        'content': 'Charley understood the power of collaboration and the importance of building connections. He actively sought out opportunities to work with cross-functional teams, leveraging his expertise to develop solutions that addressed the unique needs of clients. As a PLM Cloud Solution Developer at Super Pacific USA, Charley utilized his skills in workflow creation and automation to streamline the manufacturing process, enhancing efficiency and customer satisfaction.'
      },
      {
        'chapterNumber': 5,
        'title': 'Making a Difference',
        'content': 'Driven by a desire to make a meaningful impact, Charley set his sights on leveraging his talents for the greater good. He explored avenues where his skills in web development, data management, and mechanical design could intersect with his passion for the entertainment industry. Charley\'s dedication and expertise were sought after, as he provided consultation and innovative solutions to enhance the processes within the entertainment industry.'
      },
      {
        'chapterNumber': 6,
        'title': 'Embracing Continuous Growth',
        'content': 'Charley\'s journey was marked by a commitment to lifelong learning and personal growth. He continuously expanded his skill set, completing certifications in enterprise data management administration, SOLIDWORKS specialist, and becoming a certified 3DEXPERIENCE Collaborative Industry Innovator. Through dedication and perseverance, Charley not only excelled in his field but also became a trusted advisor to others, sharing his knowledge and empowering those around them.'
      },
      {
        'chapterNumber': 7,
        'title': 'A Legacy of Inspiration',
        'content': 'As Charley McGowan looked back on his professional odyssey, he were filled with a profound sense of fulfillment and accomplishment. his journey exemplified the transformative power of passion, resilience, and continuous learning. Charley\'s legacy extended far beyond his individual achievements, as he had inspired countless others to embrace his own unique paths, chase his dreamss, and overcome challenges with unwavering determination.'
      }
    ]
  };
  
  return (
    <div>
      <Typography variant="h4" gutterBottom textAlign={'center'}>
        {story.title}
      </Typography>
      <Carousel
        showThumbs={false}
        showStatus={true}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={1000}
        stopOnHover
        interval={10000}
        gutterBottom
        style={{height:'1200px'}}
      >
        {story.chapters.map(chapter => (
          <Card key={chapter.chapterNumber} sx={{borderRadius: 3, m: 3, p: 2}}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {chapter.title}
              </Typography>
              <Typography variant="body1">
                {chapter.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

StoryCarousel.propTypes = {
  isArtActive: PropTypes.bool.isRequired
};
  
export default StoryCarousel;