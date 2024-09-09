import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import { About } from './components/Layout1/About';
import { Skills } from './components/Layout1/Skills';
import { Projects } from './components/Layout1/Projects';
import { Contact } from './components/Layout1/Contact';
import { NavBar } from './components/Layout1/NavBar';
import Map from './components/Layout1/Map';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Layout1/Footer';
import Certification from './components/Layout1/Certification';
import Profile from './components/Layout1/Profile';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff4081',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth="lg">
        <Profile/>
        <About />
        <Skills />
        <Projects />
        <Certification/>
        <Contact />
        {/* <Map /> */}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;