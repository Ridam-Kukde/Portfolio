import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const Profile = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.section style={fade} className="py-10">
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Box mb={3}>
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Profile"
            style={{ borderRadius: '50%', width: '150px', height: '150px' }}
          />
        </Box>
        <Typography variant="h4" gutterBottom>
          Your Name
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Senior Frontend Developer
        </Typography>
        <Typography variant="body1" paragraph>
          Passionate about building responsive and user-friendly web applications. Skilled in modern frameworks and libraries, with a strong focus on performance and accessibility.
        </Typography>
      </Paper>
    </animated.section>
  );
};

export default Profile;