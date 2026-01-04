import { Code, Wrench, Database, GitBranch, Zap, Shield } from 'lucide-react';

const leftItems = [
  {
    icon: Code,
    title: 'Monorepo Structure',
    desc: 'Turborepo with pnpm workspaces for efficient code sharing',
  },
  {
    icon: Wrench,
    title: 'Shared Component Library',
    desc: '@repo/customer-sites-shared package with common UI components',
  },
  {
    icon: Database,
    title: 'Unified Data Layer',
    desc: 'Common gateways and use case patterns across all sites',
  },
];

const rightItems = [
  {
    icon: GitBranch,
    title: 'Clean Architecture',
    desc: 'CreateInquiry base class extended for each service type',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    desc: 'Vercel deployment for all customer sites',
  },
  {
    icon: Shield,
    title: 'Comprehensive Testing',
    desc: 'Shared test utilities and patterns with Vitest',
  },
];

export function ArchitectureSection() {
  return (
    <div className='border-t p-6'>
      <h3 className='mb-4 text-lg font-semibold text-primary'>
        Unified Roger Project Architecture
      </h3>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <ul className='space-y-3'>
          {leftItems.map((item) => (
            <li key={item.title} className='flex gap-3'>
              <item.icon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
              <div>
                <div className='font-medium'>{item.title}</div>
                <div className='text-sm text-muted-foreground'>{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <ul className='space-y-3'>
          {rightItems.map((item) => (
            <li key={item.title} className='flex gap-3'>
              <item.icon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
              <div>
                <div className='font-medium'>{item.title}</div>
                <div className='text-sm text-muted-foreground'>{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
