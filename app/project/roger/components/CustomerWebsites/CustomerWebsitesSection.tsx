import { Typography, Paper, Box, Chip, Link } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { IntegrationSection } from './IntegrationSection';
import { ArchitectureSection } from './ArchitectureSection';

const sites = [
  { name: 'Snow Removal', url: 'https://www.greaterbostonsnowremoval.com' },
  { name: 'Landscaping', url: 'https://www.greaterbostonlandscapingservices.com' },
  { name: 'Handyman', url: 'https://www.greaterbostonhandymanservices.com' },
];

const sharedFeatures = [
  'Service/quote request forms',
  'Google Maps address autocomplete',
  'Photo upload for accurate quotes',
  'SEO-optimized content pages',
  'Responsive mobile design',
];

const techStack = ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS S3'];

export function CustomerWebsitesSection() {
  return (
    <Paper elevation={3} sx={{ mb: 6 }}>
      <Box
        sx={{
          p: 4,
          background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          color: 'white',
        }}>
        <Typography variant='h4' gutterBottom>
          Part 2: Customer-Facing Websites
        </Typography>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Three Roger service websites built on the same monorepo, sharing architecture and
          components with the operations platform
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
          <Chip label='Snow Removal' sx={{ bgcolor: 'white' }} />
          <Chip label='Landscaping' sx={{ bgcolor: 'white' }} />
          <Chip label='Handyman' sx={{ bgcolor: 'white' }} />
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant='h5' gutterBottom>
          Three Service Websites
        </Typography>

        <Box sx={{ mb: 3 }}>
          {sites.map((site) => (
            <Box key={site.name} sx={{ mb: 1 }}>
              <Link href={site.url} target='_blank' rel='noopener'>
                {site.name}
              </Link>
            </Box>
          ))}
        </Box>

        <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
          Shared Features
        </Typography>
        <Box sx={{ mb: 2 }}>
          {sharedFeatures.map((feature) => (
            <Box key={feature} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <CheckCircle color='success' sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant='body2'>{feature}</Typography>
            </Box>
          ))}
        </Box>

        <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {techStack.map((tech) => (
            <Chip key={tech} label={tech} size='small' />
          ))}
        </Box>
      </Box>

      <IntegrationSection />
      <ArchitectureSection />
    </Paper>
  );
}
