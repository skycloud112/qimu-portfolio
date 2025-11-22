import { Box, Card, CardContent, Chip, List, ListItem, Typography } from '@mui/material';
import Grid from '@mui/system/Grid';
import { Code, Storage, CloudQueue } from '@mui/icons-material';
import { architecturePrinciples } from '../data';

export function TechnicalArchitectureTab() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Code color='primary' sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant='h6' gutterBottom>
                Frontend Stack
              </Typography>
              <List dense>
                <ListItem>React with Next.js</ListItem>
                <ListItem>TypeScript for type safety</ListItem>
                <ListItem>Material UI components</ListItem>
                <ListItem>React Query for data fetching</ListItem>
                <ListItem>Storybook for component docs</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Storage color='primary' sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant='h6' gutterBottom>
                Backend & Database
              </Typography>
              <List dense>
                <ListItem>PostgreSQL on Neon (cloud-native)</ListItem>
                <ListItem>Clean architecture patterns</ListItem>
                <ListItem>Repository pattern for data access</ListItem>
                <ListItem>In-memory & production implementations</ListItem>
                <ListItem>Migration scripts management</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <CloudQueue color='primary' sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant='h6' gutterBottom>
                Infrastructure & DevOps
              </Typography>
              <List dense>
                <ListItem>Dev and prod environments</ListItem>
                <ListItem>Turborepo monorepo structure</ListItem>
                <ListItem>Environment-based configuration</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant='h6' gutterBottom color='primary'>
          Architecture Principles
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {architecturePrinciples.map((principle) => (
            <Chip label={principle} variant='outlined' key={principle} />
          ))}
        </Box>
      </Box>
    </>
  );
}
