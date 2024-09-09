import React from "react";
import { Typography, Box, List, ListItem } from '@mui/material';

const Resume = ({ name, jobTitle, summary, experience, education, skills }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>{name}</Typography>
      <Typography variant="h6" gutterBottom>{jobTitle}</Typography>
      <Typography variant="body1" paragraph>{summary}</Typography>
      
      <Typography variant="h5" gutterBottom>Experience</Typography>
      <List>
        {experience.map((exp, index) => (
          <ListItem key={index}>{exp}</ListItem>
        ))}
      </List>
      
      <Typography variant="h5" gutterBottom>Education</Typography>
      <List>
        {education.map((edu, index) => (
          <ListItem key={index}>{edu}</ListItem>
        ))}
      </List>
      
      <Typography variant="h5" gutterBottom>Skills</Typography>
      <Typography variant="body1">{skills.join(', ')}</Typography>
    </Box>
  );
};

export default Resume;
