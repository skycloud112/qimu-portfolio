import type { Metadata } from 'next';
import ThemeRegistry from './ThemeRegistry';
import Navigation from './components/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Qi Mu - Full Stack Engineer',
  description:
    'Full Stack Engineer specializing in React, TypeScript, and cloud-based applications',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <Navigation />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
