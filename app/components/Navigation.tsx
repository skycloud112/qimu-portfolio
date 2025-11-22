'use client';

import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { LinkedIn, Article } from '@mui/icons-material';

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
          <Box>
            <IconButton
              color='inherit'
              href='https://www.linkedin.com/in/qimu/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'>
              <LinkedIn />
            </IconButton>
            <IconButton
              color='inherit'
              href='https://qimu.medium.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Medium'>
              <Article />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
