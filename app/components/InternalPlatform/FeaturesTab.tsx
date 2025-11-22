import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Grid from '@mui/system/Grid';
import { CheckCircle } from '@mui/icons-material';

export function FeaturesTab() {
  return (
    <>
      <Typography variant='h5' gutterBottom color='primary' sx={{ mb: 3 }}>
        Comprehensive Feature Set Delivered
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h6' gutterBottom>
            Job Management System
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Complete CRUD operations for jobs' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Snow job templating for seasonal work' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Job ordering and route optimization' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='URL-based state for shareable edit links' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Real-time status tracking' />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h6' gutterBottom>
            Communication Features
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='SMS notifications via Twilio integration' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Slack alerts for team coordination' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Customer inquiry management' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Worker photo uploads for job completion' />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h6' gutterBottom>
            Worker Management
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Worker profiles with skills tracking' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Job assignment workflows' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Worker-specific job views' />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h6' gutterBottom>
            Data Management
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Google Maps address autocomplete' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Customer database with history' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText primary='Form validation and data integrity' />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 3,
          p: 2,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
        }}>
        <Typography variant='body2' color='text.secondary'>
          All features implemented with comprehensive test coverage using Vitest, following
          test-driven development practices
        </Typography>
      </Box>
    </>
  );
}
