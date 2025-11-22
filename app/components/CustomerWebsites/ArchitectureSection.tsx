import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import Grid from '@mui/system/Grid';
import { Code, Build, Storage, Api, Speed, Security } from '@mui/icons-material';

export function ArchitectureSection() {
  return (
    <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
      <Typography variant='h6' gutterBottom color='primary'>
        Unified Roger Project Architecture
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Code color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Monorepo Structure'
                secondary='Turborepo with pnpm workspaces for efficient code sharing'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Build color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Shared Component Library'
                secondary='@repo/customer-sites-shared package with common UI components'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Storage color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Unified Data Layer'
                secondary='Common gateways and use case patterns across all sites'
              />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Api color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Clean Architecture'
                secondary='CreateInquiry base class extended for each service type'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Speed color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Rapid Deployment'
                secondary='Vercel deployment for all customer sites'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Security color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Comprehensive Testing'
                secondary='Shared test utilities and patterns with Vitest'
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
}
