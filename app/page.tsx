'use client';

import { Box, Button, Chip, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/system/Grid';
import { GitHub, LinkedIn, Email, Work, Code } from '@mui/icons-material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      {/* Hero Section */}
      <Paper
        elevation={3}
        sx={{
          p: 6,
          mb: 6,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}>
        <Typography variant='h1' gutterBottom>
          Qi Mu
        </Typography>
        <Typography variant='h4' gutterBottom sx={{ opacity: 0.95 }}>
          Full Stack Engineer
        </Typography>
        <Typography variant='h6' paragraph sx={{ mt: 3, opacity: 0.9 }}>
          Experienced developer with expertise in building modern web applications using React,
          TypeScript, and Next.js. Specialized in clean architecture, test-driven development, and
          direct client collaboration.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<Work />}
            component={Link}
            href='/projects'>
            View Projects
          </Button>
          <Button
            variant='outlined'
            sx={{ color: 'white', borderColor: 'white' }}
            startIcon={<GitHub />}>
            GitHub
          </Button>
        </Box>
      </Paper>

      {/* Key Highlights */}
      <Typography variant='h3' gutterBottom sx={{ mb: 4 }}>
        Professional Highlights
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant='h5' gutterBottom color='primary'>
              Full-Stack Ownership
            </Typography>
            <Typography paragraph>
              Lead developer for Roger's operational management platform serving snow removal,
              landscaping, and handyman services. Designed and implemented clean architecture
              monorepo using TypeScript, React, Next.js, and PostgreSQL.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
              <Chip label='React' size='small' />
              <Chip label='Next.js' size='small' />
              <Chip label='TypeScript' size='small' />
              <Chip label='PostgreSQL' size='small' />
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant='h5' gutterBottom color='primary'>
              Direct Client Collaboration
            </Typography>
            <Typography paragraph>
              Work directly with business owner to understand operational needs and implement
              requested features. Manage iterative feedback cycles with quick turnaround times,
              translating business requirements into technical solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
              <Chip label='Requirements Analysis' size='small' />
              <Chip label='Agile' size='small' />
              <Chip label='Client Communication' size='small' />
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant='h5' gutterBottom color='primary'>
              Modern Tech Stack & Cloud
            </Typography>
            <Typography paragraph>
              Production deployment on Vercel with automated CI/CD pipelines. PostgreSQL on Neon for
              cloud-native database. Integrations with Google Maps, Slack, and Twilio APIs for
              comprehensive business operations.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
              <Chip label='Vercel' size='small' />
              <Chip label='CI/CD' size='small' />
              <Chip label='API Integration' size='small' />
              <Chip label='Cloud Native' size='small' />
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant='h5' gutterBottom color='primary'>
              Code Quality & Testing
            </Typography>
            <Typography paragraph>
              Established coding standards following SOLID, DRY, and clean architecture principles.
              Comprehensive test coverage using Vitest with test-driven development approach.
              Created reusable component libraries across monorepo.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
              <Chip label='TDD' size='small' />
              <Chip label='Clean Architecture' size='small' />
              <Chip label='Vitest' size='small' />
              <Chip label='SOLID' size='small' />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Quick Stats */}
      <Paper
        elevation={2}
        sx={{
          p: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant='h3' color='primary'>
              2
            </Typography>
            <Typography variant='body1'>Production Applications</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant='h3' color='primary'>
              100%
            </Typography>
            <Typography variant='body1'>Code Ownership</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant='h3' color='primary'>
              5+
            </Typography>
            <Typography variant='body1'>API Integrations</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant='h3' color='primary'>
              TDD
            </Typography>
            <Typography variant='body1'>Development Approach</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
