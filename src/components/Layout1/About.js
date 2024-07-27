import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Typography, Box } from '@mui/material';

export const About = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.section id="about" style={fade} className="py-10">
      <Box textAlign="center" mt={5} mb={10}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1" paragraph>
          I am a frontend developer with 5 months of experience specializing in creating interactive and responsive web applications and designs.
        </Typography>
        <Typography variant="body1">
          Education: Bachelor’s Degree in Computer Science
        </Typography>
      </Box>
    </animated.section>
  );
};
