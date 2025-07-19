import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Johannes Tampere',
  description: 'Portfolio website of Johannes Tampere',
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}