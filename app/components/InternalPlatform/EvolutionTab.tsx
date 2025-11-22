import { Box, Card, CardContent, Chip, Paper, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { timeline, technologiesMastered } from '../data';

export function EvolutionTab() {
  return (
    <>
      <Typography variant='h5' gutterBottom sx={{ mb: 4 }} color='primary'>
        Project Technical Evolution
      </Typography>
      <Timeline position='alternate'>
        {timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color='text.secondary'>
              <Typography variant='body2'>{item.date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='primary'>{item.icon}</TimelineDot>
              {index < timeline.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card elevation={1}>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Paper elevation={2} sx={{ p: 4, bgcolor: 'background.default', mt: 4 }}>
        <Typography variant='h5' gutterBottom sx={{ mb: 3 }}>
          Technologies Mastered Through Project
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {technologiesMastered.map((tech) => (
            <Chip key={tech} label={tech} color='primary' variant='outlined' />
          ))}
        </Box>
      </Paper>
    </>
  );
}
