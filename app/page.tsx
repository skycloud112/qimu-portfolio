'use client';

import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { ProjectOverview } from './components/ProjectOverview';
import { ProjectMetrics } from './components/ProjectMetrics';
import { InternalPlatformSection } from './components/InternalPlatform/InternalPlatformSection';
import { CustomerWebsitesSection } from './components/CustomerWebsites/CustomerWebsitesSection';
import { Footer } from './components/Footer';

export default function HomePage() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
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

      <ProjectOverview />
      <ProjectMetrics />
      <InternalPlatformSection tabValue={tabValue} onTabChange={handleChange} />
      <CustomerWebsitesSection />
      <Footer />
    </Container>
  );
}
