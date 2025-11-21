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
      <Typography variant='h2' gutterBottom sx={{ mb: 2 }}>
        The Roger Project
      </Typography>

      <Typography variant='h5' sx={{ mb: 4, color: 'text.secondary' }}>
        Complete Digital Ecosystem for Service Business Operations
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
        <Typography variant='h6' gutterBottom>
          Project Overview
        </Typography>
        <Typography variant='body1' paragraph>
          Lead developer for 3 years on this 5-year project, building and maintaining a
          comprehensive suite of 5 production applications serving Roger's business operations in
          the Greater Boston area. This unified ecosystem includes internal operations management
          tools and customer-facing websites for snow removal, landscaping, and handyman services -
          all built on a shared monorepo architecture.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label='3 Years as Lead' sx={{ bgcolor: 'white', color: 'primary.main' }} />
          <Chip label='5 Production Apps' sx={{ bgcolor: 'white', color: 'primary.main' }} />
          <Chip label='100% Code Ownership' sx={{ bgcolor: 'white', color: 'primary.main' }} />
          <Chip label='Monorepo Architecture' sx={{ bgcolor: 'white', color: 'primary.main' }} />
        </Box>
      </Box>

      <Paper elevation={3} sx={{ mb: 6 }}>
        <Box
          sx={{
            p: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}>
          <Typography variant='h4' gutterBottom>
            Part 1: Internal Operations Platform
          </Typography>
          <Typography variant='h6' paragraph>
            Admin Portal & Worker App for managing jobs, customers, and business operations
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
            <Chip label='Admin Portal' sx={{ bgcolor: 'white' }} />
            <Chip label='Worker App' sx={{ bgcolor: 'white' }} />
            <Chip label='Job Management' sx={{ bgcolor: 'white' }} />
            <Chip label='Customer Database' sx={{ bgcolor: 'white' }} />
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
                As lead developer for 3 years, built and maintained five production web applications
                for the Roger project, working directly with the business owner to transform
                operational requirements into a comprehensive digital ecosystem.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='2 Internal Apps: Admin Portal & Worker App' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='3 Customer Sites: Snow, Landscaping & Handyman services' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='All 5 apps in one monorepo with shared architecture' />
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

      <Typography variant='h3' gutterBottom sx={{ mb: 2, mt: 6 }}>
        Part 2: Customer-Facing Websites
      </Typography>

      <Typography variant='h6' sx={{ mb: 4, color: 'text.secondary' }}>
        Three Roger service websites built on the same monorepo, sharing architecture and components
        with the operations platform
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
                color: 'white',
              }}>
              <Typography variant='h4' gutterBottom>
                Greater Boston Snow Removal
              </Typography>
              <Typography variant='body2'>
                Professional snow removal and de-icing services
              </Typography>
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant='subtitle1' gutterBottom color='primary'>
                Live Site
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                <a
                  href='https://www.greaterbostonsnowremoval.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#1976D2' }}>
                  greaterbostonsnowremoval.com
                </a>
              </Typography>

              <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
                Key Features
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Address range selection for driveways' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Salt/de-icing service options' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Photo upload for accurate quotes' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Google Maps integration' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Educational blog content' />
                </ListItem>
              </List>

              <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                <Chip label='Next.js' size='small' />
                <Chip label='TypeScript' size='small' />
                <Chip label='PostgreSQL' size='small' />
                <Chip label='AWS S3' size='small' />
                <Chip label='Slack API' size='small' />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
                color: 'white',
              }}>
              <Typography variant='h4' gutterBottom>
                Greater Boston Landscaping
              </Typography>
              <Typography variant='body2'>
                Comprehensive landscaping and yard work services
              </Typography>
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant='subtitle1' gutterBottom color='primary'>
                Live Site
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                <a
                  href='https://www.greaterbostonlandscapingservices.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#388E3C' }}>
                  greaterbostonlandscapingservices.com
                </a>
              </Typography>

              <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
                Key Features
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Service task selection' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Bag handling options' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Portfolio showcase' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Customer testimonials' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='FAQ section' />
                </ListItem>
              </List>

              <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                <Chip label='Next.js' size='small' />
                <Chip label='React Hook Form' size='small' />
                <Chip label='PostgreSQL' size='small' />
                <Chip label='Google Maps' size='small' />
                <Chip label='Sentry' size='small' />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
                color: 'white',
              }}>
              <Typography variant='h4' gutterBottom>
                Greater Boston Handyman
              </Typography>
              <Typography variant='body2'>Home maintenance and repair services</Typography>
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant='subtitle1' gutterBottom color='primary'>
                Live Site
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                <a
                  href='https://www.greaterbostonhandymanservices.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#F57C00' }}>
                  greaterbostonhandymanservices.com
                </a>
              </Typography>

              <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
                Key Features
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Multi-service selection' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Apartment unit support' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Past work gallery' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Thumbtack integration' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle fontSize='small' color='success' />
                  </ListItemIcon>
                  <ListItemText primary='Customer reviews' />
                </ListItem>
              </List>

              <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                <Chip label='Next.js' size='small' />
                <Chip label='TypeScript' size='small' />
                <Chip label='PostgreSQL' size='small' />
                <Chip label='Datadog RUM' size='small' />
                <Chip label='AWS S3' size='small' />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        <Typography variant='h6' gutterBottom color='primary'>
          Unified Roger Project Architecture
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Code color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Monorepo Structure'
                  secondary='Turborepo with pnpm workspaces for efficient code sharing'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Build color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Shared Component Library'
                  secondary='@repo/customer-sites-shared package with common UI components'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Storage color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Unified Data Layer'
                  secondary='Common gateways and use case patterns across all sites'
                />
              </ListItem>
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Api color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Clean Architecture'
                  secondary='CreateInquiry base class extended for each service type'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Speed color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Rapid Deployment'
                  secondary='Vercel deployment for all customer sites'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Security color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Comprehensive Testing'
                  secondary='Shared test utilities and patterns with Vitest'
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

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
    </Container>
  );
}
