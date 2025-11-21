'use client';

import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Project', href: '/project' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
  ];

  return (
    <AppBar position='sticky' elevation={1}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            component={Link}
            href='/'
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 600,
            }}>
            Qi Mu - Full Stack Engineer
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                color='inherit'
                sx={{
                  borderBottom: pathname === item.href ? '2px solid white' : 'none',
                }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
