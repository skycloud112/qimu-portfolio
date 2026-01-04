'use client';

import { ProjectOverview } from './components/ProjectOverview';
import { ProjectMetrics } from './components/ProjectMetrics';
import { InternalPlatformSection } from './components/InternalPlatform/InternalPlatformSection';
import { CustomerWebsitesSection } from './components/CustomerWebsites/CustomerWebsitesSection';
import { ProjectTabs } from './components/ProjectTabs/ProjectTabs';
import { Footer } from './components/Footer';

export const RogerPage = () => {
  return (
    <div className='mx-auto max-w-6xl px-4 py-16'>
      <span className='text-xs font-semibold uppercase tracking-wide text-primary'>
        Featured Project
      </span>
      <h1 className='mb-2 text-4xl font-medium'>The Roger Project</h1>
      <p className='mb-8 text-xl text-muted-foreground'>
        Complete Digital Ecosystem for Service Business Operations
      </p>

      <ProjectOverview />
      <ProjectMetrics />
      <InternalPlatformSection />
      <CustomerWebsitesSection />
      <ProjectTabs />
      <Footer />
    </div>
  );
};
