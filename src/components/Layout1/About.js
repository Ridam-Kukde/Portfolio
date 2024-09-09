import React from 'react';
import { Typography, Box, Container, Chip, styled } from '@mui/material';
import { motion } from 'framer-motion';

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'TypeScript', 'Material-UI', 'Styled Components', 'Jest', 'Git'];

  return (
    <Box component="section" id="about" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" align="center" gutterBottom>About Me</Typography>
          <Typography variant="body1" paragraph align="center">
            I'm a senior frontend developer with 2+ years of experience in building scalable and maintainable web applications. I specialize in modern web technologies and have a passion for creating exceptional user experiences.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>Skills</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
            {skills.map((skill) => (
              <StyledChip key={skill} label={skill} variant="outlined" />
            ))}
          </Box>
          <Typography variant="body1" align="center">
            Education: Master's Degree in Computer Science
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Interests: UI/UX Design, Performance Optimization, Open Source Contribution
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};