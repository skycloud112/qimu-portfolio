import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { timeline, technologiesMastered } from '../data';

export function EvolutionTab() {
  return (
    <>
      <h3 className='mb-8 text-xl font-semibold text-primary'>Project Technical Evolution</h3>

      <div className='relative'>
        {timeline.map((item, index) => (
          <div key={index} className='mb-8 flex gap-4 last:mb-0'>
            <div className='w-20 pt-1 text-right text-sm text-muted-foreground'>{item.date}</div>

            <div className='flex flex-col items-center'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                {item.icon}
              </div>
              {index < timeline.length - 1 && <div className='mt-2 h-full w-0.5 bg-border' />}
            </div>

            <Card className='flex-1'>
              <CardContent className='pt-4'>
                <h4 className='font-semibold'>{item.title}</h4>
                <p className='mt-1 text-sm text-muted-foreground'>{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Card className='mt-8 bg-muted'>
        <CardContent className='pt-6'>
          <h3 className='mb-4 text-xl font-semibold'>Technologies Mastered Through Project</h3>
          <div className='flex flex-wrap gap-2'>
            {technologiesMastered.map((tech) => (
              <Badge key={tech} variant='outline'>
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
