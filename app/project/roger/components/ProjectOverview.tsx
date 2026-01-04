import { Box, Chip, Typography } from '@mui/material';

export function ProjectOverview() {
  return (
    <Box sx={{ mb: 4, p: 3, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
      <Typography variant='h6' gutterBottom>
        Project Overview
      </Typography>
      <Typography variant='body1' sx={{ mb: 2 }}>
        Lead developer for 3 years on this 5-year project, building and maintaining a comprehensive
        suite of 5 production applications serving Roger's business operations in the Greater Boston
        area. This unified ecosystem includes internal operations management tools and
        customer-facing websites for snow removal, landscaping, and handyman services - all built on
        a shared monorepo architecture.
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Chip label='3 Years as Lead' sx={{ bgcolor: 'white', color: 'primary.main' }} />
        <Chip label='5 Production Apps' sx={{ bgcolor: 'white', color: 'primary.main' }} />
        <Chip label='100% Code Ownership' sx={{ bgcolor: 'white', color: 'primary.main' }} />
        <Chip label='Monorepo Architecture' sx={{ bgcolor: 'white', color: 'primary.main' }} />
      </Box>
    </Box>
  );
}
