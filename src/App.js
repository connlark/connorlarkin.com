import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Lottie from "lottie-react";

import wip from './assets/8633-web-development.json'
import Button from '@mui/material/Button';




export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          welcome to connorlarkin.com
        </Typography>
        <Lottie animationData={wip} />

      </Box>
    </Container>
  );
}