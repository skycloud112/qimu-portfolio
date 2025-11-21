'use client';

import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import Grid from '@mui/system/Grid';
import {
  CheckCircle,
  Code,
  CloudQueue,
  People,
  Build,
  Storage,
  Api,
  Security,
  Speed,
} from '@mui/icons-material';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ProjectsPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography variant='h2' gutterBottom sx={{ mb: 4 }}>
        Featured Project
      </Typography>

      <Paper elevation={3} sx={{ mb: 6 }}>
        <Box
          sx={{
            p: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}>
          <Typography variant='h3' gutterBottom>
            Roger's Operations Management Platform
          </Typography>
          <Typography variant='h6' paragraph>
            Comprehensive business management system for snow removal, landscaping, and handyman
            services
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
            <Chip label='Production' sx={{ bgcolor: 'white' }} />
            <Chip label='Full Stack' sx={{ bgcolor: 'white' }} />
            <Chip label='Monorepo' sx={{ bgcolor: 'white' }} />
            <Chip label='Clean Architecture' sx={{ bgcolor: 'white' }} />
          </Box>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleChange} aria-label='project tabs'>
            <Tab label='Overview' />
            <Tab label='Technical Architecture' />
            <Tab label='Features Implemented' />
            <Tab label='Development Process' />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h5' gutterBottom color='primary'>
                Project Scope
              </Typography>
              <Typography paragraph>
                Built two production web applications from scratch as the sole developer, working
                directly with the business owner to transform operational requirements into a
                comprehensive digital platform.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Admin Portal - Complete operations management system' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Worker App - Field operations and job tracking interface' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='100% code ownership and technical decision-making' />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h5' gutterBottom color='primary'>
                Business Impact
              </Typography>
              <Typography paragraph>
                Digitized and streamlined all aspects of business operations, from customer
                inquiries to job completion, enabling efficient management of seasonal workloads and
                improving customer communication.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <People color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Direct client collaboration with iterative feedback' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Speed color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Rapid feature delivery with quick turnaround times' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Build color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Continuous improvement based on real-world usage' />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Code color='primary' sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant='h6' gutterBottom>
                    Frontend Stack
                  </Typography>
                  <List dense>
                    <ListItem>React 18 with Next.js 14</ListItem>
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
                    <ListItem>Vercel deployment platform</ListItem>
                    <ListItem>Automated CI/CD pipelines</ListItem>
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
            <Grid container spacing={2}>
              {[
                'SOLID Principles',
                'Clean Architecture',
                'Test-Driven Development',
                'Domain-Driven Design',
                'Repository Pattern',
                'Use Case Pattern',
                'Dependency Injection',
                'Type Safety',
              ].map((principle) => (
                <Grid size={12} key={principle}>
                  <Chip label={principle} variant='outlined' />
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant='h5' gutterBottom color='primary' sx={{ mb: 3 }}>
            Comprehensive Feature Set Delivered
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h6' gutterBottom>
                Job Management System
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Complete CRUD operations for jobs' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Snow job templating for seasonal work' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Job ordering and route optimization' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='URL-based state for shareable edit links' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Real-time status tracking' />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h6' gutterBottom>
                Communication Features
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='SMS notifications via Twilio integration' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Slack alerts for team coordination' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Customer inquiry management' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Worker photo uploads for job completion' />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h6' gutterBottom>
                Worker Management
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Worker profiles with skills tracking' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Job assignment workflows' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Worker-specific job views' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Tutorial system for onboarding' />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h6' gutterBottom>
                Data Management
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Google Maps address autocomplete' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Customer database with history' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Form validation and data integrity' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Deploy summary tracking' />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 3,
              p: 2,
              bgcolor: 'background.paper',
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
            }}>
            <Typography variant='body2' color='text.secondary'>
              All features implemented with comprehensive test coverage using Vitest, following
              test-driven development practices
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h5' gutterBottom color='primary'>
                Development Methodology
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Security color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Test-Driven Development'
                    secondary='Comprehensive test coverage with Vitest, including use cases, entities, and gateways'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Api color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Clean Architecture'
                    secondary='Separation of concerns with use cases, entities, and gateways'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Build color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Iterative Development'
                    secondary='Rapid feedback cycles with direct client communication'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Code Quality Standards'
                    secondary='Established patterns following SOLID, DRY, YAGNI, and KISS principles'
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h5' gutterBottom color='primary'>
                Project Management
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <People color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Direct Client Collaboration'
                    secondary='Regular meetings with business owner for requirements and feedback'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Speed color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Rapid Delivery'
                    secondary='Quick turnaround on feature requests and bug fixes'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CloudQueue color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Continuous Deployment'
                    secondary='Automated deployments to dev and production environments'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Storage color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Database Evolution'
                    secondary='Managed schema migrations and data integrity'
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Container>
  );
}
