import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Container, styled, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  maxWidth: '500px',
  margin: '0 auto',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
      transition: 'border-color 0.3s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  alignSelf: 'flex-start',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && message.trim()) {
      console.log('Email sent:', email, message);
      setEmail('');
      setMessage('');
      setSnackbarOpen(true);
    }
  };

  return (
    <Container maxWidth="md">
      <Box component={motion.div} 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Have a question or want to work together? Drop me a message!
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email && !validateEmail(email)}
            helperText={email && !validateEmail(email) ? 'Please enter a valid email address.' : ''}
          />
          <StyledTextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
            disabled={!validateEmail(email) || !message.trim()}
          >
            Send Message
          </StyledButton>
        </StyledForm>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Message sent successfully!"
      />
    </Container>
  );
};
