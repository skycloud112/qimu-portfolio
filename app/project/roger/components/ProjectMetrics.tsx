import { Box, Paper, Typography } from '@mui/material';
import { metrics } from './data';

export function ProjectMetrics() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        mb: 6,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}>
      <Typography variant='h4' gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Project Metrics & Impact
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {metrics.map((metric) => (
          <Box
            key={metric.label}
            sx={{
              textAlign: 'center',
              minWidth: 150,
              p: 2,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
            }}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
              {metric.value}
            </Typography>
            <Typography variant='body2' sx={{ mt: 1 }}>
              {metric.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
