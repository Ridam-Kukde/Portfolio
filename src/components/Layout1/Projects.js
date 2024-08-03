import React from 'react';
import { Typography, Box, Card, CardContent, CardActions, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../Layout1/project.jpg'; // Import your project images
import project2Image from '../Layout1/project2.jpg';
import '../Layout1/Projects.css'; // Import custom CSS for the slider

export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Description of project one",
      link: "https://github.com/yourusername/project-one",
      image: project1Image
    },
    {
      title: "Project Two",
      description: "Description of project two",
      link: "https://github.com/yourusername/project-two",
      image: project2Image
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    adaptiveHeight: true, // Adjust height based on content
  };

  return (
    <section id="projects" className="py-10">
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" gutterBottom>Projects</Typography>
      </Box>
      <Box className="slider-container">
        <Slider {...settings}>
          {projects.map(project => (
            <Box key={project.title} px={2}>
              <Card className="project-card">
                <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                  <img src={project.image} alt={project.title} className="project-image" />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={project.link}>View on GitHub</Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </section>
  );
};