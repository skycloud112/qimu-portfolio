import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Grid from '@mui/system/Grid';
import { CheckCircle } from '@mui/icons-material';
import { featureCategories } from '../data';

export function FeaturesTab() {
  return (
    <>
      <Typography variant='h5' gutterBottom color='primary' sx={{ mb: 3 }}>
        Comprehensive Feature Set Delivered
      </Typography>
      <Grid container spacing={3}>
        {featureCategories.map((category) => (
          <Grid key={category.category} size={{ xs: 12, md: 6 }}>
            <Typography variant='h6' gutterBottom>
              {category.category}
            </Typography>
            <List dense>
              {category.items.map((item) => (
                <ListItem key={item}>
                  <ListItemIcon>
                    <CheckCircle color='success' />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
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
