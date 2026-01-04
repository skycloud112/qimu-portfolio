import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import Grid from '@mui/system/Grid';
import {
  Security,
  Api,
  Build,
  Code,
  People,
  Speed,
  CloudQueue,
  Storage,
  AutoAwesome,
} from '@mui/icons-material';

export function DevelopmentProcessTab() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h5' gutterBottom color='primary'>
            Development Methodology
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Security color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Test-Driven Development'
                secondary='Comprehensive test coverage with Vitest, including use cases, entities, and gateways'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Api color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Clean Architecture'
                secondary='Separation of concerns with use cases, entities, and gateways'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Build color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Iterative Development'
                secondary='Rapid feedback cycles with direct client communication'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Code color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Code Quality Standards'
                secondary='Established patterns following SOLID, DRY, YAGNI, and KISS principles'
              />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h5' gutterBottom color='primary'>
            Project Management
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <People color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Direct Client Collaboration'
                secondary='Regular meetings with business owner for requirements and feedback'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Speed color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Rapid Delivery'
                secondary='Quick turnaround on feature requests and bug fixes'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudQueue color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Continuous Deployment'
                secondary='Automated deployments to dev and production environments'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Storage color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Database Evolution'
                secondary='Managed schema migrations and data integrity'
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Typography variant='h5' gutterBottom sx={{ mb: 3, mt: 4 }} color='primary'>
        Professional Approach
      </Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <AutoAwesome color='primary' />
            </ListItemIcon>
            <ListItemText
              primary='Client-Centric Development'
              secondary='Direct collaboration with business owner, translating requirements into technical solutions with quick turnaround times'
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemIcon>
              <AutoAwesome color='primary' />
            </ListItemIcon>
            <ListItemText
              primary='Quality-First Mindset'
              secondary='Test-driven development with comprehensive coverage, following SOLID principles and clean architecture patterns'
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemIcon>
              <AutoAwesome color='primary' />
            </ListItemIcon>
            <ListItemText
              primary='Full Ownership'
              secondary='End-to-end responsibility from architecture design to production deployment and ongoing maintenance'
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemIcon>
              <AutoAwesome color='primary' />
            </ListItemIcon>
            <ListItemText
              primary='Continuous Improvement'
              secondary='Iterative development with regular feedback cycles, constantly enhancing based on real-world usage'
            />
          </ListItem>
        </List>
      </Paper>
    </>
  );
}
