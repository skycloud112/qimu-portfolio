import { CheckCircle } from 'lucide-react';
import { featureCategories } from '../data';

export function FeaturesTab() {
  return (
    <>
      <h3 className='mb-6 text-xl font-semibold text-primary'>
        Comprehensive Feature Set Delivered
      </h3>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {featureCategories.map((category) => (
          <div key={category.category}>
            <h4 className='mb-3 font-semibold'>{category.category}</h4>
            <ul className='space-y-2'>
              {category.items.map((item) => (
                <li key={item} className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='mt-6 rounded-lg border bg-card p-4'>
        <p className='text-sm text-muted-foreground'>
          All features implemented with comprehensive test coverage using Vitest, following
          test-driven development practices
        </p>
      </div>
    </>
  );
}
