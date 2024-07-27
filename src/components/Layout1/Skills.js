import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

export const Skills = () => {
  const skills = ["React", "MUI", "Tailwind CSS", "Redux", "Spline"];

  return (
    <section id="skills" className="py-10">
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {skills.map(skill => (
          <Grid item key={skill} xs={12} sm={6} md={4} lg={3}>
            <Box textAlign="center" bgcolor="primary.light" p={2} borderRadius="borderRadius">
              <Typography variant="h6">{skill}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
