import {
  Box,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface ServiceCardProps {
  title: string;
  description: string;
  gradient: string;
  linkUrl: string;
  linkColor: string;
  features: string[];
}

export function ServiceCard({
  title,
  description,
  gradient,
  linkUrl,
  linkColor,
  features,
}: ServiceCardProps) {
  const domain = linkUrl.replace('https://www.', '');

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          p: 3,
          background: gradient,
          color: 'white',
        }}>
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body2'>{description}</Typography>
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant='subtitle1' gutterBottom color='primary'>
          Live Site
        </Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          <a href={linkUrl} target='_blank' rel='noopener noreferrer' style={{ color: linkColor }}>
            {domain}
          </a>
        </Typography>

        <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
          Key Features
        </Typography>
        <List dense>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle fontSize='small' color='success' />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>

        <Typography variant='subtitle1' gutterBottom color='primary' sx={{ mt: 2 }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          <Chip label='Next.js' size='small' />
          <Chip label='TypeScript' size='small' />
          <Chip label='PostgreSQL' size='small' />
          <Chip label='AWS S3' size='small' />
        </Box>
      </CardContent>
    </Card>
  );
}
