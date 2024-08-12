import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A responsive web application that allows users to track their fitness goals and monitor progress over time. Built with React and Node.js.",
      link: "https://github.com/yourusername/project-one",
      demoLink: "https://yourusername.github.io/project-one",
      technologies: ["React", "Node.js", "MongoDB", "CSS"]
    },
    {
      title: "Project Two",
      description: "An e-commerce platform that supports product listings, user authentication, and payment processing. Developed using MERN stack.",
      link: "https://github.com/yourusername/project-two",
      demoLink: "https://yourusername.github.io/project-two",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"]
    }
  ];

  return (
    <section id="projects" className="py-10">
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" gutterBottom>Projects</Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {projects.map(project => (
          <Grid item key={project.title} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" paragraph>{project.description}</Typography>
                <Box mt={2}>
                  {project.technologies.map(tech => (
                    <Chip key={tech} label={tech} variant="outlined" style={{ marginRight: '5px' }} />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />}>
                  View on GitHub
                </Button>
                <Button size="small" color="secondary" href={project.demoLink} target="_blank" rel="noopener noreferrer" startIcon={<LaunchIcon />}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};