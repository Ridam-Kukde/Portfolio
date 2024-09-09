import React from 'react';
import { Box, Typography, Link, Container, IconButton, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Connect With Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;