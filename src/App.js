import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
