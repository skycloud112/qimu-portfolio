'use client';

import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Navigation() {
  return (
    <AppBar position='sticky' elevation={1}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            sx={{
              flexGrow: 1,
              fontWeight: 600,
            }}>
            Qi Mu - Full Stack Engineer
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
