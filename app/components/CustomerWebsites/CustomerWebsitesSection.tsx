import { Typography } from '@mui/material';
import Grid from '@mui/system/Grid';
import { ServiceCard } from './ServiceCard';
import { IntegrationSection } from './IntegrationSection';
import { ArchitectureSection } from './ArchitectureSection';

const services = [
  {
    title: 'Greater Boston Snow Removal',
    description: 'Professional snow removal and de-icing services',
    gradient: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
    linkUrl: 'https://www.greaterbostonsnowremoval.com',
    linkColor: '#1976D2',
    features: [
      'Address range selection for driveways',
      'Salt/de-icing service options',
      'Photo upload for accurate quotes',
      'Google Maps integration',
      'Educational blog content',
    ],
  },
  {
    title: 'Greater Boston Landscaping',
    description: 'Comprehensive landscaping and yard work services',
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    linkUrl: 'https://www.greaterbostonlandscapingservices.com',
    linkColor: '#388E3C',
    features: [
      'Service task selection',
      'Bag handling options',
      'Portfolio showcase',
      'Customer testimonials',
      'FAQ section',
    ],
  },
  {
    title: 'Greater Boston Handyman',
    description: 'Home maintenance and repair services',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
    linkUrl: 'https://www.greaterbostonhandymanservices.com',
    linkColor: '#F57C00',
    features: [
      'Multi-service selection',
      'Apartment unit support',
      'Past work gallery',
      'Thumbtack integration',
      'Customer reviews',
    ],
  },
];

export function CustomerWebsitesSection() {
  return (
    <>
      <Typography variant='h3' gutterBottom sx={{ mb: 2, mt: 6 }}>
        Part 2: Customer-Facing Websites
      </Typography>

      <Typography variant='h6' sx={{ mb: 4, color: 'text.secondary' }}>
        Three Roger service websites built on the same monorepo, sharing architecture and components
        with the operations platform
      </Typography>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid size={{ xs: 12, md: 4 }} key={service.title}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>

      <IntegrationSection />
      <ArchitectureSection />
    </>
  );
}
