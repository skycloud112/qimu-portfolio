import { Container, Box } from '@mui/material';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth='md'>
      <Box sx={{ py: 4 }}>{children}</Box>
    </Container>
  );
}
