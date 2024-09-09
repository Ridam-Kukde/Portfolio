import React, { useState } from 'react';
import { Box, Typography, Button, Container, Avatar, Chip, Modal, IconButton } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Resume from '../../templates/Resume';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  const resumeData = {
    name: "Ridam Kukde",
    jobTitle: "Software Developer",
    summary: "Experienced software developer with a passion for creating efficient and scalable applications.",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"]
  };

  return (
    <Container maxWidth="md">
      <animated.div style={fade}>
        <Box 
          sx={{ 
            mt: 10, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Avatar
            src="/path-to-your-profile-picture.jpg"
            alt={resumeData.name}
            sx={{ width: 150, height: 150, mb: 3 }}
          />
          <Typography variant="h3" gutterBottom fontWeight="bold">
            {resumeData.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {resumeData.jobTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4, maxWidth: '600px' }}>
            {resumeData.summary}
          </Typography>
          <Box sx={{ mb: 4 }}>
            <IconButton color="primary" aria-label="LinkedIn" sx={{ mx: 1 }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary" aria-label="GitHub" sx={{ mx: 1 }}>
              <GitHubIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Email" sx={{ mx: 1 }}>
              <EmailIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
            {resumeData.skills?.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" />
            ))}
          </Box>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpen(true)}
            sx={{ borderRadius: '20px', px: 4 }}
          >
            View Resume
          </Button>
        </Box>
      </animated.div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="resume-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 800,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '8px',
        }}>
          <Resume {...resumeData} />
          <Button onClick={() => setOpen(false)} sx={{ mt: 2 }}>Close</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Profile;
