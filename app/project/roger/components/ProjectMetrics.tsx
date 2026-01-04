import { Card } from '@/components/ui/card';
import { metrics } from './data';

export function ProjectMetrics() {
  return (
    <Card className='mb-12 overflow-hidden'>
      <div className='bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white'>
        <h2 className='mb-8 text-center text-2xl font-bold'>Project Metrics & Impact</h2>
        <div className='flex flex-wrap justify-center gap-6'>
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className='min-w-[150px] rounded-lg bg-white/10 p-4 text-center'
            >
              <div className='text-4xl font-bold'>{metric.value}</div>
              <div className='mt-2 text-sm'>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
