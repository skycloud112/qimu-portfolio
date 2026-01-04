import { Badge } from '@/components/ui/badge';

export function ProjectOverview() {
  return (
    <div className='mb-8 rounded-lg bg-primary p-6 text-primary-foreground'>
      <h3 className='mb-2 text-lg font-semibold'>Project Overview</h3>
      <p className='mb-4'>
        Lead developer for 3 years on this 5-year project, building and maintaining a comprehensive
        suite of 5 production applications serving Roger's business operations in the Greater Boston
        area. This unified ecosystem includes internal operations management tools and
        customer-facing websites for snow removal, landscaping, and handyman services - all built on
        a shared monorepo architecture.
      </p>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='secondary' className='bg-white text-primary'>
          3 Years as Lead
        </Badge>
        <Badge variant='secondary' className='bg-white text-primary'>
          5 Production Apps
        </Badge>
        <Badge variant='secondary' className='bg-white text-primary'>
          100% Code Ownership
        </Badge>
        <Badge variant='secondary' className='bg-white text-primary'>
          Monorepo Architecture
        </Badge>
      </div>
    </div>
  );
}
