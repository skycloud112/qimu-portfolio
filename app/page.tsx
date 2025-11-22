'use client';

import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { ProjectOverview } from './components/ProjectOverview';
import { ProjectMetrics } from './components/ProjectMetrics';
import { InternalPlatformSection } from './components/InternalPlatform/InternalPlatformSection';
import { CustomerWebsitesSection } from './components/CustomerWebsites/CustomerWebsitesSection';
import { ProjectTabs } from './components/ProjectTabs/ProjectTabs';
import { Footer } from './components/Footer';

export default function HomePage() {
  const [projectTabValue, setProjectTabValue] = useState(0);

  const handleProjectTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setProjectTabValue(newValue);
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
      <InternalPlatformSection />
      <CustomerWebsitesSection />
      <ProjectTabs tabValue={projectTabValue} onTabChange={handleProjectTabChange} />
      <Footer />
    </Container>
  );
}
