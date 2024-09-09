import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container, Button, useScrollTrigger, Slide, styled } from '@mui/material';
import { Link } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
}));

const NavItem = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: '0.5rem 1rem',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.9rem',
  letterSpacing: '0.5px',
  position: 'relative',
  transition: 'color 0.3s ease-in-out',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: 0,
    left: '50%',
    background: theme.palette.primary.main,
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    '&:after': {
      width: '100%',
      left: '0%',
    },
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
  cursor: 'pointer',
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const NavBar = ({ darkMode, handleThemeChange }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 960);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <HideOnScroll>
      <StyledAppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Logo>RK</Logo>
            {isMobile ? (
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <NavItem
                    key={item}
                    to={item.toLowerCase()}
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={500}
                  >
                    {item}
                  </NavItem>
                ))}
                <IconButton 
                  onClick={handleThemeChange} 
                  sx={{ 
                    ml: 2,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'rotate(180deg)' },
                  }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
    </HideOnScroll>
  );
};
