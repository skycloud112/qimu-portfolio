import { CheckCircle } from 'lucide-react';

const integrationSteps = [
  {
    title: 'Customer submits inquiry on any service website (Snow, Landscaping, or Handyman)',
    desc: 'Form data with photos, address details, and service requirements',
  },
  {
    title: 'Inquiry instantly appears in Admin Portal',
    desc: 'Admin users can view all customer inquiries from all three websites in one centralized dashboard',
  },
  {
    title: 'Admin converts inquiries to jobs with one click',
    desc: 'Creates jobs with all customer information pre-populated from the inquiry',
  },
  {
    title: 'Workers see assigned jobs in Worker App',
    desc: 'Jobs created from customer inquiries are immediately visible to assigned workers',
  },
];

export function IntegrationSection() {
  return (
    <div className='border-t p-6'>
      <h3 className='mb-2 text-lg font-semibold text-primary'>
        Seamless Integration Between Customer Sites and Operations Platform
      </h3>
      <p className='mb-4 text-sm text-muted-foreground'>
        Customer inquiries submitted through any of the three service websites automatically flow
        into the admin portal, creating a unified workflow:
      </p>
      <ul className='space-y-4'>
        {integrationSteps.map((step) => (
          <li key={step.title} className='flex gap-3'>
            <CheckCircle className='mt-0.5 h-5 w-5 shrink-0 text-green-500' />
            <div>
              <div className='font-medium'>{step.title}</div>
              <div className='text-sm text-muted-foreground'>{step.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
