import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  gradient: string;
  linkUrl: string;
  features: string[];
}

export function ServiceCard({ title, description, gradient, linkUrl, features }: ServiceCardProps) {
  const domain = linkUrl.replace('https://www.', '');

  return (
    <Card className='flex h-full flex-col overflow-hidden'>
      <div className={`p-6 text-white ${gradient}`}>
        <h3 className='mb-2 text-2xl font-bold'>{title}</h3>
        <p className='text-sm'>{description}</p>
      </div>
      <CardContent className='flex-1 pt-6'>
        <h4 className='mb-1 text-sm font-semibold text-primary'>Live Site</h4>
        <a
          href={linkUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-primary hover:underline'
        >
          {domain}
        </a>

        <h4 className='mb-2 mt-4 text-sm font-semibold text-primary'>Key Features</h4>
        <ul className='space-y-1'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center gap-2 text-sm'>
              <CheckCircle className='h-4 w-4 text-green-500' />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h4 className='mb-2 mt-4 text-sm font-semibold text-primary'>Tech Stack</h4>
        <div className='flex flex-wrap gap-1'>
          <Badge variant='secondary'>Next.js</Badge>
          <Badge variant='secondary'>TypeScript</Badge>
          <Badge variant='secondary'>PostgreSQL</Badge>
          <Badge variant='secondary'>AWS S3</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
