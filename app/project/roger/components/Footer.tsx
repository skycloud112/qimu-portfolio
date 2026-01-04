import { Badge } from '@/components/ui/badge';

export function Footer() {
  return (
    <div className='mt-12 rounded-lg bg-muted p-8'>
      <h2 className='text-center text-xl font-medium text-primary'>
        The Roger Project - One Unified Solution
      </h2>
      <p className='mt-4 text-center'>
        All 5 applications (2 internal tools + 3 customer websites) are part of a single, cohesive
        Roger project. As lead developer for 3 years on this 5-year project, established the
        monorepo architecture that enables code reuse, consistent patterns, and efficient
        maintenance across the entire business ecosystem.
      </p>
      <div className='mt-6 flex flex-wrap justify-center gap-4'>
        <Badge>3 Years as Lead</Badge>
        <Badge>5 Production Apps</Badge>
        <Badge>1 Monorepo</Badge>
        <Badge>5-Year Project</Badge>
      </div>
    </div>
  );
}
