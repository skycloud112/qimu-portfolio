import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud } from 'lucide-react';
import { architecturePrinciples } from '../data';

export function TechnicalArchitectureTab() {
  return (
    <>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <Card className='h-full'>
          <CardContent className='pt-6'>
            <Code className='mb-4 h-10 w-10 text-primary' />
            <h3 className='mb-2 text-lg font-semibold'>Frontend Stack</h3>
            <ul className='space-y-1 text-sm'>
              <li>React with Next.js</li>
              <li>TypeScript for type safety</li>
              <li>Material UI components</li>
              <li>React Query for data fetching</li>
              <li>Storybook for component docs</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='h-full'>
          <CardContent className='pt-6'>
            <Database className='mb-4 h-10 w-10 text-primary' />
            <h3 className='mb-2 text-lg font-semibold'>Backend & Database</h3>
            <ul className='space-y-1 text-sm'>
              <li>PostgreSQL on Neon (cloud-native)</li>
              <li>Clean architecture patterns</li>
              <li>Repository pattern for data access</li>
              <li>In-memory & production implementations</li>
              <li>Migration scripts management</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='h-full'>
          <CardContent className='pt-6'>
            <Cloud className='mb-4 h-10 w-10 text-primary' />
            <h3 className='mb-2 text-lg font-semibold'>Infrastructure & DevOps</h3>
            <ul className='space-y-1 text-sm'>
              <li>Vercel for deployments</li>
              <li>Dev and prod environments</li>
              <li>Turborepo monorepo structure</li>
              <li>Environment-based configuration</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className='mt-8'>
        <h3 className='mb-4 text-lg font-semibold text-primary'>Architecture Principles</h3>
        <div className='flex flex-wrap gap-2'>
          {architecturePrinciples.map((principle) => (
            <Badge key={principle} variant='outline'>
              {principle}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
