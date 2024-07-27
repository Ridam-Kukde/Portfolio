import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const NavBar = ({ darkMode, handleThemeChange }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit">
          <Link to="about" smooth={true} offset={-70} duration={500}>About</Link>
        </Button>
        <Button color="inherit">
          <Link to="skills" smooth={true} offset={-70} duration={500}>Skills</Link>
        </Button>
        <Button color="inherit">
          <Link to="projects" smooth={true} offset={-70} duration={500}>Projects</Link>
        </Button>
        <Button color="inherit">
          <Link to="contact" smooth={true} offset={-70} duration={500}>Contact</Link>
        </Button>
        <IconButton color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
