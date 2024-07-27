import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { About } from './components/Layout1/About';
import { Skills } from './components/Layout1/Skills';
import { Projects } from './components/Layout1/Projects';
import { Contact } from './components/Layout1/Contact';
import { NavBar } from './components/Layout1/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
