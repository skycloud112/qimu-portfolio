import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OverviewTab } from './OverviewTab';
import { FeaturesTab } from './FeaturesTab';

export function InternalPlatformSection() {
  return (
    <Card className='mb-12 overflow-hidden'>
      <div className='bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white'>
        <h2 className='text-2xl font-bold'>Part 1: Internal Operations Platform</h2>
        <p className='mb-4 mt-2 text-lg'>
          Admin Portal & Worker App for managing jobs, customers, and business operations
        </p>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='secondary' className='bg-white text-slate-900'>
            Admin Portal
          </Badge>
          <Badge variant='secondary' className='bg-white text-slate-900'>
            Worker App
          </Badge>
          <Badge variant='secondary' className='bg-white text-slate-900'>
            Job Management
          </Badge>
          <Badge variant='secondary' className='bg-white text-slate-900'>
            Customer Database
          </Badge>
        </div>
      </div>

      <Tabs defaultValue='overview' className='w-full'>
        <TabsList className='w-full justify-start rounded-none border-b bg-transparent'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='features'>Features Implemented</TabsTrigger>
        </TabsList>
        <TabsContent value='overview' className='p-6'>
          <OverviewTab />
        </TabsContent>
        <TabsContent value='features' className='p-6'>
          <FeaturesTab />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
