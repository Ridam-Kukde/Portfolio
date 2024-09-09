import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Link, styled } from '@mui/material';
import { motion } from 'framer-motion';

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

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const Certification = () => {
  return (
    <Box component="section" id="certifications" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>Certifications</Typography>
      <Grid container spacing={4} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item key={cert.title} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{cert.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{cert.organization}</Typography>
                  <Typography variant="body2" color="text.secondary">{cert.date}</Typography>
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer" sx={{ mt: 2, display: 'inline-block' }}>
                    View Certificate
                  </Link>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certification;