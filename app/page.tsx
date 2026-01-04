'use client';

import { Container, Typography, Link, Stack } from '@mui/material';
import NextLink from 'next/link';

export default function HomePage() {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography variant='h5'>Blogs</Typography>
          <Link href='https://qimu.medium.com/' target='_blank' rel='noopener'>
            Medium
          </Link>
        </Stack>

        <Stack spacing={1}>
          <Typography variant='h5'>Projects</Typography>
          <Link component={NextLink} href='/project/roger'>
            Roger Snow Removal
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
