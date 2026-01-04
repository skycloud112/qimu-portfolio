import { Box, Chip, Typography } from '@mui/material';

export function Footer() {
  return (
    <Box sx={{ mt: 6, p: 4, bgcolor: 'grey.100', borderRadius: 2 }}>
      <Typography variant='h5' gutterBottom color='primary' textAlign='center'>
        The Roger Project - One Unified Solution
      </Typography>
      <Typography variant='body1' textAlign='center' sx={{ mt: 2 }}>
        All 5 applications (2 internal tools + 3 customer websites) are part of a single, cohesive
        Roger project. As lead developer for 3 years on this 5-year project, established the
        monorepo architecture that enables code reuse, consistent patterns, and efficient
        maintenance across the entire business ecosystem.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3, flexWrap: 'wrap' }}>
        <Chip label='3 Years as Lead' color='primary' />
        <Chip label='5 Production Apps' color='primary' />
        <Chip label='1 Monorepo' color='primary' />
        <Chip label='5-Year Project' color='primary' />
      </Box>
    </Box>
  );
}
