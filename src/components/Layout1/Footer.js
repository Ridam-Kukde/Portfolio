

import React from 'react';
import { Container, Grid, Link, Typography, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        padding: (theme) => theme.spacing(6, 0),
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="textSecondary">
              A brief description about yourself or your portfolio.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: your.email@example.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: +123 456 7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="#about" variant="body2" sx={{ margin: 1 }}>
              About
            </Link>
            <Link href="#skills" variant="body2" sx={{ margin: 1 }}>
              Skills
            </Link>
            <Link href="#projects" variant="body2" sx={{ margin: 1 }}>
              Projects
            </Link>
            <Link href="#contact" variant="body2" sx={{ margin: 1 }}>
              Contact
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton href="https://facebook.com" target="_blank" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" color="inherit">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com" target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
          &copy; 2024 Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}