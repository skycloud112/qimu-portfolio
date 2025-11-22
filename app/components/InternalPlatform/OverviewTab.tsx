import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Grid from '@mui/system/Grid';
import { CheckCircle, EmojiEvents } from '@mui/icons-material';
import { accomplishments } from '../data';

export function OverviewTab() {
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography variant='h5' gutterBottom color='primary'>
          Project Scope
        </Typography>
        <Typography paragraph>
          As lead developer for 3 years, built and maintained five production web applications for
          the Roger project, working directly with the business owner to transform operational
          requirements into a comprehensive digital ecosystem.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color='primary' />
            </ListItemIcon>
            <ListItemText primary='2 Internal Apps: Admin Portal & Worker App' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color='primary' />
            </ListItemIcon>
            <ListItemText primary='3 Customer Sites: Snow, Landscaping & Handyman services' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color='primary' />
            </ListItemIcon>
            <ListItemText primary='All 5 apps in one monorepo with shared architecture' />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant='h5' gutterBottom sx={{ mb: 3 }} color='primary'>
          Key Accomplishments
        </Typography>
        <Grid container spacing={2}>
          {accomplishments.map((section) => (
            <Grid size={{ xs: 12, md: 6 }} key={section.category}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmojiEvents color='primary' sx={{ mr: 1 }} />
                    <Typography variant='h6' color='primary'>
                      {section.category}
                    </Typography>
                  </Box>
                  <List dense>
                    {section.items.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircle color='success' fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
