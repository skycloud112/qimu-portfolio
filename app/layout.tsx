import Navigation from '../components/Navigation';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Qi Mu</title>
      </head>
      <body className='min-h-screen'>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
