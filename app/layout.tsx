'use client';

import ThemeRegistry from './ThemeRegistry';
import Navigation from '../components/Navigation';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Qi Mu</title>
      </head>
      <body>
        <ThemeRegistry>
          <Navigation />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
