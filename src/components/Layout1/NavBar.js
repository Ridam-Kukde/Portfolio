import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import profileImage from '../Layout1/profile.jpg'; // Import the profile image
import '../../index.css'; // Import your CSS file

export const NavBar = ({ darkMode, handleThemeChange }) => {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const appBarBackgroundColor = scrolled
    ? theme.palette.background.default
    : theme.palette.mode === 'dark'
    ? theme.palette.background.paper
    : 'white';

  const textColor = theme.palette.mode === 'dark' ? 'white' : 'black';

  return (
    <AppBar position="sticky" sx={{ backgroundColor: appBarBackgroundColor, boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit">
            <Link to="projects" smooth={true} offset={-70} duration={500}>projects</Link>
          </Button>
          <Button color="inherit">
            <Link to="about" smooth={true} offset={-70} duration={500}>about me</Link>
          </Button>
          <Button color="inherit">
            <Link to="blog" smooth={true} offset={-70} duration={500}>my blog</Link>
          </Button>
          <Button color="inherit">
            <Link to="reviews" smooth={true} offset={-70} duration={500}>reviews</Link>
          </Button>
          <Button color="inherit">
            <Link to="contact" smooth={true} offset={-70} duration={500}>contact me</Link>
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 2 }}>
            <Typography variant="h6" sx={{ color: textColor }}>Rohit Surawat</Typography>
            <Typography variant="body2" sx={{ color: textColor }}>Portfolio</Typography>
          </Box>
          <img src={profileImage} alt="Profile" style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '16px' }} />
          <IconButton color="inherit" onClick={handleThemeChange}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};