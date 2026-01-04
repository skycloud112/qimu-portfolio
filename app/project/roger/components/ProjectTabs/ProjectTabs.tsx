import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { TechnicalArchitectureTab } from './TechnicalArchitectureTab';
import { DevelopmentProcessTab } from './DevelopmentProcessTab';
import { EvolutionTab } from './EvolutionTab';

export function ProjectTabs() {
  return (
    <Card className='mb-12 mt-12 overflow-hidden'>
      <div className='bg-gradient-to-br from-slate-700 to-blue-500 p-8 text-white'>
        <h2 className='text-2xl font-bold'>Project-Wide Details</h2>
        <p className='mt-2 text-lg'>
          Technical architecture, development process, and evolution across all 5 apps
        </p>
      </div>

      <Tabs defaultValue='architecture' className='w-full'>
        <TabsList className='w-full justify-start rounded-none border-b bg-transparent'>
          <TabsTrigger value='architecture'>Technical Architecture</TabsTrigger>
          <TabsTrigger value='development'>Development Process</TabsTrigger>
          <TabsTrigger value='evolution'>Evolution</TabsTrigger>
        </TabsList>
        <TabsContent value='architecture' className='p-6'>
          <TechnicalArchitectureTab />
        </TabsContent>
        <TabsContent value='development' className='p-6'>
          <DevelopmentProcessTab />
        </TabsContent>
        <TabsContent value='evolution' className='p-6'>
          <EvolutionTab />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
