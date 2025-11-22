import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export function IntegrationSection() {
  return (
    <Box sx={{ p: 3, borderTop: 1, borderColor: 'divider' }}>
      <Typography variant='h6' gutterBottom color='primary'>
        Seamless Integration Between Customer Sites and Operations Platform
      </Typography>
      <Typography variant='body2' sx={{ mb: 3 }}>
        Customer inquiries submitted through any of the three service websites automatically flow
        into the admin portal, creating a unified workflow:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircle color='success' />
          </ListItemIcon>
          <ListItemText
            primary='Customer submits inquiry on any service website (Snow, Landscaping, or Handyman)'
            secondary='Form data with photos, address details, and service requirements'
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle color='success' />
          </ListItemIcon>
          <ListItemText
            primary='Inquiry instantly appears in Admin Portal'
            secondary='Admin users can view all customer inquiries from all three websites in one centralized dashboard'
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle color='success' />
          </ListItemIcon>
          <ListItemText
            primary='Admin converts inquiries to jobs with one click'
            secondary='Creates jobs with all customer information pre-populated from the inquiry'
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle color='success' />
          </ListItemIcon>
          <ListItemText
            primary='Workers see assigned jobs in Worker App'
            secondary='Jobs created from customer inquiries are immediately visible to assigned workers'
          />
        </ListItem>
      </List>
    </Box>
  );
}
