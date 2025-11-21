'use client';

import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import {
  CheckCircle,
  Code,
  Launch,
  TrendingUp,
  Business,
  School,
  EmojiEvents,
  AutoAwesome,
} from '@mui/icons-material';

export default function ExperiencePage() {
  const accomplishments = [
    {
      category: 'Project Leadership',
      items: [
        "Sole developer and architect for Roger's multi-application platform",
        'Designed and implemented complete business operations system from scratch',
        '100% code ownership with full technical decision-making authority',
        'Successfully deployed two production applications serving real business needs',
      ],
    },
    {
      category: 'Technical Achievements',
      items: [
        'Established comprehensive test suite with TDD methodology using Vitest',
        'Implemented clean architecture patterns across monorepo structure',
        'Built reusable component libraries and utilities for efficient development',
        'Created both in-memory and production database implementations',
      ],
    },
    {
      category: 'Business Impact',
      items: [
        'Digitized manual business operations into automated workflows',
        'Enabled efficient management of seasonal workloads through job templating',
        'Improved customer communication with integrated SMS and Slack notifications',
        'Streamlined worker operations with dedicated mobile-responsive interface',
      ],
    },
    {
      category: 'Integration & Automation',
      items: [
        'Successfully integrated Google Maps API for address management',
        'Implemented Twilio SMS for customer notifications',
        'Set up Slack integration for team alerts',
      ],
    },
  ];

  const metrics = [
    { label: 'Lines of Code Written', value: '50,000+', color: 'primary' },
    { label: 'Test Cases', value: '200+', color: 'success' },
    { label: 'Features Delivered', value: '40+', color: 'info' },
    { label: 'API Integrations', value: '5', color: 'warning' },
    { label: 'Database Tables', value: '15+', color: 'secondary' },
    { label: 'Deployment Frequency', value: 'Daily', color: 'primary' },
  ];

  const timeline = [
    {
      date: 'Phase 1',
      title: 'Node.js Script',
      description: 'Started as a simple Node.js script to automate basic tasks',
      icon: <Code />,
    },
    {
      date: 'Phase 2',
      title: 'React SPA + Express + MongoDB',
      description: 'Evolved into a full-stack application with React frontend and Express backend',
      icon: <Business />,
    },
    {
      date: 'Phase 3',
      title: 'NestJS Migration',
      description: 'Migrated backend to NestJS for better structure and scalability',
      icon: <Launch />,
    },
    {
      date: 'Phase 4',
      title: 'Clean Architecture + Next.js',
      description: 'Adopted clean architecture patterns and migrated to Next.js server actions',
      icon: <Launch />,
    },
    {
      date: 'Current',
      title: 'PostgreSQL Migration',
      description: 'Migrated from MongoDB to PostgreSQL for relational data modeling',
      icon: <TrendingUp />,
    },
  ];

  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography variant='h2' gutterBottom sx={{ mb: 6 }}>
        Experience & Accomplishments
      </Typography>

      {/* Project Timeline */}
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Typography variant='h4' gutterBottom sx={{ mb: 4 }}>
          Roger's Platform Development Timeline
        </Typography>
        <Timeline position='alternate'>
          {timeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color='text.secondary'>
                <Typography variant='body2'>{item.date}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>{item.icon}</TimelineDot>
                {index < timeline.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card elevation={1}>
                  <CardContent>
                    <Typography variant='h6' gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>

      {/* Key Accomplishments */}
      <Typography variant='h4' gutterBottom sx={{ mb: 4 }}>
        Key Accomplishments
      </Typography>
      <Box sx={{ mb: 6 }}>
        {accomplishments.map((section) => (
          <Card key={section.category} sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEvents color='primary' sx={{ mr: 1 }} />
                <Typography variant='h5' color='primary'>
                  {section.category}
                </Typography>
              </Box>
              <List dense>
                {section.items.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color='success' fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Project Metrics */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 6,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}>
        <Typography variant='h4' gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Project Metrics & Impact
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
          {metrics.map((metric) => (
            <Box
              key={metric.label}
              sx={{
                textAlign: 'center',
                minWidth: 150,
                p: 2,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
              }}>
              <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
                {metric.value}
              </Typography>
              <Typography variant='body2' sx={{ mt: 1 }}>
                {metric.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Professional Approach */}
      <Typography variant='h4' gutterBottom sx={{ mb: 3 }}>
        Professional Approach
      </Typography>
      <Box sx={{ mb: 6 }}>
        <Paper elevation={2} sx={{ p: 4 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <AutoAwesome color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Client-Centric Development'
                secondary='Direct collaboration with business owner, translating requirements into technical solutions with quick turnaround times'
              />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem>
              <ListItemIcon>
                <AutoAwesome color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Quality-First Mindset'
                secondary='Test-driven development with comprehensive coverage, following SOLID principles and clean architecture patterns'
              />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem>
              <ListItemIcon>
                <AutoAwesome color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Full Ownership'
                secondary='End-to-end responsibility from architecture design to production deployment and ongoing maintenance'
              />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem>
              <ListItemIcon>
                <AutoAwesome color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Continuous Improvement'
                secondary='Iterative development with regular feedback cycles, constantly enhancing based on real-world usage'
              />
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* Technologies Mastered */}
      <Paper elevation={2} sx={{ p: 4, bgcolor: 'background.default' }}>
        <Typography variant='h5' gutterBottom sx={{ mb: 3 }}>
          Technologies Mastered Through Project
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {[
            'React',
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Material UI',
            'Vitest',
            'React Query',
            'Turborepo',
            'Vercel',
            'Neon Database',
            'Google Maps API',
            'Twilio API',
            'Slack API',
            'Git/GitHub',
            'Clean Architecture',
            'TDD',
            'SOLID Principles',
            'Storybook',
            'ESLint',
          ].map((tech) => (
            <Chip key={tech} label={tech} color='primary' variant='outlined' />
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
