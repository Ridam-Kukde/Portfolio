import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgColor: '#282c34', color: 'white', padding: '20px 0' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Link href="#about" color="inherit" sx={{ display: 'block', mb: 1 }}>About</Link>
          <Link href="#projects" color="inherit" sx={{ display: 'block', mb: 1 }}>Projects</Link>
          <Link href="#contact" color="inherit" sx={{ display: 'block', mb: 1 }}>Contact</Link>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" gutterBottom>Follow Me</Typography>
          <Link href="https://facebook.com" color="inherit" sx={{ mr: 1 }}><FacebookIcon /></Link>
          <Link href="https://twitter.com" color="inherit" sx={{ mr: 1 }}><TwitterIcon /></Link>
          <Link href="https://linkedin.com" color="inherit" sx={{ mr: 1 }}><LinkedInIcon /></Link>
          <Link href="https://github.com" color="inherit" sx={{ mr: 1 }}><GitHubIcon /></Link>
          <Link href="https://instagram.com" color="inherit"><InstagramIcon /></Link>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" gutterBottom>Contact Information</Typography>
          <Typography>Email: <Link href="mailto:your-email@example.com" color="inherit">your-email@example.com</Link></Typography>
          <Typography>Phone: <Link href="tel:+1234567890" color="inherit">+1234567890</Link></Typography>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;