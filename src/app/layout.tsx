import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mini Sales CRM',
  description: 'A simple sales CRM built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
