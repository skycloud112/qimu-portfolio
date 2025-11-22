import { Code, Business, Launch, TrendingUp } from '@mui/icons-material';
import { ReactNode } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface AccomplishmentSection {
  category: string;
  items: string[];
}

interface Metric {
  label: string;
  value: string;
  color: string;
}

export const timeline: TimelineItem[] = [
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

export const accomplishments: AccomplishmentSection[] = [
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
      'Automated end-to-end flow from customer inquiry to job creation to worker app',
      'Batch create jobs based on templates for efficient seasonal workload management',
      'Streamlined worker operations with dedicated mobile-responsive interface',
    ],
  },
  {
    category: 'Integration & Automation',
    items: [
      'Successfully integrated Google Maps API for address management',
      'Implemented Twilio SMS for Mass texting and two-way communication',
      'Set up Slack integration for team alerts',
    ],
  },
];

export const metrics: Metric[] = [
  { label: 'Lines of Code Written', value: '89,000+', color: 'primary' },
  { label: 'Test Cases', value: '1300+', color: 'success' },
  { label: 'Features Delivered', value: '40+', color: 'info' },
  { label: 'API Integrations', value: '5', color: 'warning' },
  { label: 'Database Tables', value: '15+', color: 'secondary' },
  { label: 'Deployment Frequency', value: 'Daily', color: 'primary' },
];

export const architecturePrinciples = [
  'SOLID Principles',
  'Clean Architecture',
  'Test-Driven Development',
  'Domain-Driven Design',
  'Repository Pattern',
  'Use Case Pattern',
  'Dependency Injection',
  'Type Safety',
];

export const technologiesMastered = [
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
];
