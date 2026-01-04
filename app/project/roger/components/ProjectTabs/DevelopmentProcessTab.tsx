import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  GitBranch,
  Wrench,
  Code,
  Users,
  Zap,
  Cloud,
  Database,
  Sparkles,
} from 'lucide-react';

const methodologyItems = [
  {
    icon: Shield,
    title: 'Test-Driven Development',
    desc: 'Comprehensive test coverage with Vitest, including use cases, entities, and gateways',
  },
  {
    icon: GitBranch,
    title: 'Clean Architecture',
    desc: 'Separation of concerns with use cases, entities, and gateways',
  },
  {
    icon: Wrench,
    title: 'Iterative Development',
    desc: 'Rapid feedback cycles with direct client communication',
  },
  {
    icon: Code,
    title: 'Code Quality Standards',
    desc: 'Established patterns following SOLID, DRY, YAGNI, and KISS principles',
  },
];

const managementItems = [
  {
    icon: Users,
    title: 'Direct Client Collaboration',
    desc: 'Regular meetings with business owner for requirements and feedback',
  },
  {
    icon: Zap,
    title: 'Rapid Delivery',
    desc: 'Quick turnaround on feature requests and bug fixes',
  },
  {
    icon: Cloud,
    title: 'Continuous Deployment',
    desc: 'Automated deployments to dev and production environments',
  },
  {
    icon: Database,
    title: 'Database Evolution',
    desc: 'Managed schema migrations and data integrity',
  },
];

const professionalItems = [
  {
    title: 'Client-Centric Development',
    desc: 'Direct collaboration with business owner, translating requirements into technical solutions with quick turnaround times',
  },
  {
    title: 'Quality-First Mindset',
    desc: 'Test-driven development with comprehensive coverage, following SOLID principles and clean architecture patterns',
  },
  {
    title: 'Full Ownership',
    desc: 'End-to-end responsibility from architecture design to production deployment and ongoing maintenance',
  },
  {
    title: 'Continuous Improvement',
    desc: 'Iterative development with regular feedback cycles, constantly enhancing based on real-world usage',
  },
];

export function DevelopmentProcessTab() {
  return (
    <>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div>
          <h3 className='mb-4 text-xl font-semibold text-primary'>Development Methodology</h3>
          <ul className='space-y-4'>
            {methodologyItems.map((item) => (
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
        <div>
          <h3 className='mb-4 text-xl font-semibold text-primary'>Project Management</h3>
          <ul className='space-y-4'>
            {managementItems.map((item) => (
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

      <h3 className='mb-4 mt-8 text-xl font-semibold text-primary'>Professional Approach</h3>
      <Card>
        <CardContent className='pt-6'>
          <ul className='divide-y'>
            {professionalItems.map((item) => (
              <li key={item.title} className='flex gap-3 py-4 first:pt-0 last:pb-0'>
                <Sparkles className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <div>
                  <div className='font-medium'>{item.title}</div>
                  <div className='text-sm text-muted-foreground'>{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
