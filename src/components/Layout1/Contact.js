import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

export const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" gutterBottom>Contact Me</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </Box>
    </section>
  );
};
