import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Typography, Box, Paper } from '@mui/material';

export const About = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.section id="summary" style={fade} className="py-10 bg-gradient-to-r from-blue-400 to-purple-500">
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
        <Box textAlign="center" mt={5} mb={10}>
          <Typography variant="h4" gutterBottom color="white">Summary</Typography>
          <Typography variant="body1" paragraph color="white">
            I am a senior frontend developer with 7+ years of experience specializing in building scalable and maintainable web applications. I have a strong background in modern web technologies and a proven track record of delivering high-quality projects that meet business requirements and exceed user expectations.
          </Typography>
          <Typography variant="body1" color="white">
            Education: Master's Degree in Computer Science
          </Typography>
          <Typography variant="body1" color="white" mt={2}>
            Skills: HTML, CSS, JavaScript, React, Redux, TypeScript, Material-UI, Styled Components, Jest, Enzyme, Git, Agile Methodologies
          </Typography>
          <Typography variant="body1" color="white" mt={2}>
            Interests: Web Development, UI/UX Design, Performance Optimization, Scalable Architecture, Open Source Contribution, Mentoring Junior Developers
          </Typography>
        </Box>
      </Paper>
    </animated.section>
  );
};