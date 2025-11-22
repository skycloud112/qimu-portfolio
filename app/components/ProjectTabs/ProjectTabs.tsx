import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import { TabPanel } from '../TabPanel';
import { TechnicalArchitectureTab } from './TechnicalArchitectureTab';
import { DevelopmentProcessTab } from './DevelopmentProcessTab';
import { EvolutionTab } from './EvolutionTab';

interface ProjectTabsProps {
  tabValue: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export function ProjectTabs({ tabValue, onTabChange }: ProjectTabsProps) {
  return (
    <Paper elevation={3} sx={{ mb: 6, mt: 6 }}>
      <Box
        sx={{
          p: 4,
          background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
          color: 'white',
        }}>
        <Typography variant='h4' gutterBottom>
          Project-Wide Details
        </Typography>
        <Typography variant='h6'>
          Technical architecture, development process, and evolution across all 5 apps
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={onTabChange} aria-label='project-wide tabs'>
          <Tab label='Technical Architecture' />
          <Tab label='Development Process' />
          <Tab label='Evolution' />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <TechnicalArchitectureTab />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <DevelopmentProcessTab />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <EvolutionTab />
      </TabPanel>
    </Paper>
  );
}
