import React from 'react';
import { Box, Typography, Grid, Paper, Link } from '@mui/material';

const certifications = [
  {
    title: "React Developer Certification",
    organization: "XYZ Academy",
    date: "June 2023",
    link: "https://xyzacademy.com/certificates/react-developer"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    organization: "FreeCodeCamp",
    date: "April 2023",
    link: "https://www.freecodecamp.org/certification/yourusername/javascript-algorithms-and-data-structures"
  },
  {
    title: "Full Stack Web Development",
    organization: "ABC Institute",
    date: "March 2023",
    link: "https://abcinstitute.com/certificates/full-stack-web-development"
  }
];

const Certification = () => {
  return (
    <section id="certifications" className="py-10">
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" gutterBottom>Certifications</Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {certifications.map(cert => (
          <Grid item key={cert.title} xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'left' }}>
              <Typography variant="h6" gutterBottom>{cert.title}</Typography>
              <Typography variant="body2" color="textSecondary">{cert.organization}</Typography>
              <Typography variant="body2" color="textSecondary">{cert.date}</Typography>
              <Link href={cert.link} target="_blank" rel="noopener noreferrer" color="primary">
                View Certificate
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Certification;