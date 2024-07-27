import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Description of project one",
      link: "https://github.com/yourusername/project-one"
    },
    {
      title: "Project Two",
      description: "Description of project two",
      link: "https://github.com/yourusername/project-two"
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
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link}>View on GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
