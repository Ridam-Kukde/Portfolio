import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const skillsData = {
  "Front-end": ["HTML", "CSS", "JavaScript", "React", "NextJS"],
  "Back-end": ["NodeJS", "Python", "Java", "NextJS"],
  "Database": ["MySQL", "PostgreSQL"]
};

export const Skills = () => {
  const theme = useTheme();

  return (
    <section id="skills" className="py-10">
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {Object.keys(skillsData).map((category) => (
          <Grid item key={category} xs={12} sm={6} md={4}>
            <Card
              sx={{
                bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.200',
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>{category}</Typography>
                <ul>
                  {skillsData[category].map((skill) => (
                    <li key={skill}>
                      <Typography variant="body1">{skill}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};