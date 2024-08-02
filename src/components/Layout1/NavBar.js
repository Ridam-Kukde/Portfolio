import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const NavBar = ({ darkMode, handleThemeChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <Box>
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
      <Box position="fixed" top="1rem" right="1rem">
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Avatar alt="Profile Picture" src="path-to-your-profile-picture.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Change Layout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
