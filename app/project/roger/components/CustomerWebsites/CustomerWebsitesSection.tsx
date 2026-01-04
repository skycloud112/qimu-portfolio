import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
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
    <Card className='mb-12 overflow-hidden'>
      <div className='bg-gradient-to-br from-emerald-500 to-green-400 p-8 text-white'>
        <h2 className='text-2xl font-bold'>Part 2: Customer-Facing Websites</h2>
        <p className='mb-4 mt-2 text-lg'>
          Three Roger service websites built on the same monorepo, sharing architecture and
          components with the operations platform
        </p>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='secondary' className='bg-white text-slate-900'>
            Snow Removal
          </Badge>
          <Badge variant='secondary' className='bg-white text-slate-900'>
            Landscaping
          </Badge>
          <Badge variant='secondary' className='bg-white text-slate-900'>
            Handyman
          </Badge>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='mb-4 text-xl font-semibold'>Three Service Websites</h3>
        <div className='mb-6 space-y-2'>
          {sites.map((site) => (
            <div key={site.name}>
              <a
                href={site.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                {site.name}
              </a>
            </div>
          ))}
        </div>

        <h4 className='mb-3 font-semibold'>Shared Features</h4>
        <ul className='mb-6 space-y-2'>
          {sharedFeatures.map((feature) => (
            <li key={feature} className='flex items-center gap-2 text-sm'>
              <CheckCircle className='h-4 w-4 text-green-500' />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h4 className='mb-3 font-semibold'>Tech Stack</h4>
        <div className='flex flex-wrap gap-2'>
          {techStack.map((tech) => (
            <Badge key={tech} variant='secondary'>
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <IntegrationSection />
      <ArchitectureSection />
    </Card>
  );
}
