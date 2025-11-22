import { Box, Chip, Paper, Tab, Tabs, Typography } from '@mui/material';
import { TabPanel } from '../TabPanel';
import { OverviewTab } from './OverviewTab';
import { TechnicalArchitectureTab } from './TechnicalArchitectureTab';
import { FeaturesTab } from './FeaturesTab';
import { DevelopmentProcessTab } from './DevelopmentProcessTab';
import { EvolutionTab } from './EvolutionTab';

interface InternalPlatformSectionProps {
  tabValue: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export function InternalPlatformSection({ tabValue, onTabChange }: InternalPlatformSectionProps) {
  return (
    <Paper elevation={3} sx={{ mb: 6 }}>
      <Box
        sx={{
          p: 4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}>
        <Typography variant='h4' gutterBottom>
          Part 1: Internal Operations Platform
        </Typography>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Admin Portal & Worker App for managing jobs, customers, and business operations
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
          <Chip label='Admin Portal' sx={{ bgcolor: 'white' }} />
          <Chip label='Worker App' sx={{ bgcolor: 'white' }} />
          <Chip label='Job Management' sx={{ bgcolor: 'white' }} />
          <Chip label='Customer Database' sx={{ bgcolor: 'white' }} />
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={onTabChange} aria-label='project tabs'>
          <Tab label='Overview' />
          <Tab label='Technical Architecture' />
          <Tab label='Features Implemented' />
          <Tab label='Development Process' />
          <Tab label='Evolution' />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <OverviewTab />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <TechnicalArchitectureTab />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <FeaturesTab />
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <DevelopmentProcessTab />
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <EvolutionTab />
      </TabPanel>
    </Paper>
  );
}
