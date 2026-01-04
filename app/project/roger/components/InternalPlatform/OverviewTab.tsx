import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Trophy } from 'lucide-react';
import { accomplishments } from '../data';

export function OverviewTab() {
  return (
    <>
      <div className='mb-6'>
        <h3 className='mb-4 text-xl font-semibold text-primary'>Project Scope</h3>
        <p className='mb-4'>
          As lead developer for 3 years, built and maintained five production web applications for
          the Roger project, working directly with the business owner to transform operational
          requirements into a comprehensive digital ecosystem.
        </p>
        <ul className='space-y-2'>
          <li className='flex items-center gap-2'>
            <CheckCircle className='h-5 w-5 text-primary' />
            <span>2 Internal Apps: Admin Portal & Worker App</span>
          </li>
          <li className='flex items-center gap-2'>
            <CheckCircle className='h-5 w-5 text-primary' />
            <span>3 Customer Sites: Snow, Landscaping & Handyman services</span>
          </li>
          <li className='flex items-center gap-2'>
            <CheckCircle className='h-5 w-5 text-primary' />
            <span>All 5 apps in one monorepo with shared architecture</span>
          </li>
        </ul>
      </div>

      <h3 className='mb-4 text-xl font-semibold text-primary'>Key Accomplishments</h3>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {accomplishments.map((section) => (
          <Card key={section.category} className='h-full'>
            <CardContent className='pt-6'>
              <div className='mb-3 flex items-center gap-2'>
                <Trophy className='h-5 w-5 text-primary' />
                <h4 className='font-semibold text-primary'>{section.category}</h4>
              </div>
              <ul className='space-y-2'>
                {section.items.map((item, index) => (
                  <li key={index} className='flex items-start gap-2 text-sm'>
                    <CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
