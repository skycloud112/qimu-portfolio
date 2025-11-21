'use client';

import { Box, Card, CardContent, Chip, Container, Paper, Rating, Typography } from '@mui/material';
import Grid from '@mui/system/Grid';
import { Code, Storage, Cloud, Speed, Security, BugReport, Group } from '@mui/icons-material';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code sx={{ fontSize: 40 }} />,
      skills: [
        'React 18',
        'Next.js 14',
        'TypeScript',
        'Material UI',
        'React Query',
        'Storybook',
        'Atomic Design',
      ],
    },
    {
      title: 'Backend & Database',
      icon: <Storage sx={{ fontSize: 40 }} />,
      skills: [
        'Nextjs server actions',
        'PostgreSQL',
        'Database Design',
        'SQL',
        'Migration Management',
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud sx={{ fontSize: 40 }} />,
      skills: [
        'Vercel',
        'Git/GitHub',
        'Environment Management',
        'Deployment Automation',
        'Monitoring',
      ],
    },
    {
      title: 'Testing & Quality',
      icon: <BugReport sx={{ fontSize: 40 }} />,
      skills: ['Vitest', 'Test-Driven Development', 'Unit Testing', 'Mocking & Stubbing'],
    },
  ];

  const architecturePatterns = [
    'Clean Architecture',
    'Repository Pattern',
    'Use Case Pattern',
    'Domain-Driven Design',
    'SOLID Principles',
    'DRY Principle',
    'YAGNI',
    'KISS',
    'Dependency Injection',
    'Monorepo Architecture',
    'Component-Based Design',
    'State Management',
  ];

  const apiIntegrations = [
    { name: 'Google Maps API', description: 'Address autocomplete and geocoding' },
    { name: 'Twilio API', description: 'SMS notifications and customer communication' },
    { name: 'Slack API', description: 'Team notifications and alerts' },
    { name: 'RESTful APIs', description: 'Design and implementation' },
    { name: 'Webhook Integration', description: 'Event-driven architecture' },
  ];

  const softSkills = [
    { name: 'Client Communication', rating: 5 },
    { name: 'Requirements Analysis', rating: 5 },
    { name: 'Problem Solving', rating: 5 },
    { name: 'Project Ownership', rating: 5 },
    { name: 'Agile Methodology', rating: 4 },
    { name: 'Technical Documentation', rating: 4 },
  ];

  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography variant='h2' gutterBottom sx={{ mb: 6 }}>
        Technical Skills & Expertise
      </Typography>

      {/* Technical Skills Grid */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {skillCategories.map((category) => (
          <Grid size={{ xs: 12, md: 6 }} key={category.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {category.icon}
                  <Typography variant='h5' sx={{ ml: 2 }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {category.skills.map((skill) => (
                    <Chip key={skill} label={skill} size='small' variant='outlined' />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Architecture & Design Patterns */}
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Typography variant='h4' gutterBottom sx={{ mb: 3 }}>
          Architecture & Design Patterns
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          {architecturePatterns.map((pattern) => (
            <Chip
              key={pattern}
              label={pattern}
              size='medium'
              sx={{ fontSize: '0.9rem' }}
              color='primary'
              variant='outlined'
            />
          ))}
        </Box>
      </Paper>

      {/* API Integrations */}
      <Typography variant='h4' gutterBottom sx={{ mb: 3 }}>
        API Integration Experience
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {apiIntegrations.map((api) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={api.name}>
            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
              <Typography variant='h6' gutterBottom color='primary'>
                {api.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {api.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Soft Skills */}
      <Paper
        elevation={2}
        sx={{ p: 4, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Typography variant='h4' gutterBottom sx={{ mb: 3 }}>
          Professional Skills
        </Typography>
        <Grid container spacing={3}>
          {softSkills.map((skill) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={skill.name}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='body1'>{skill.name}</Typography>
                <Rating value={skill.rating} readOnly size='small' />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Key Strengths */}
      <Box sx={{ mt: 6 }}>
        <Typography variant='h4' gutterBottom sx={{ mb: 3 }}>
          Key Strengths
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Speed color='primary' sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant='h6' gutterBottom>
                  Rapid Development
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Quick turnaround on feature requests with iterative development approach. Direct
                  client collaboration ensures efficient delivery.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Security color='primary' sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant='h6' gutterBottom>
                  Quality & Testing
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Comprehensive test coverage with TDD approach. Clean architecture principles
                  ensure maintainable code.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Group color='primary' sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant='h6' gutterBottom>
                  Full Ownership
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  End-to-end project ownership from architecture to deployment. Direct client
                  communication and requirements management.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
