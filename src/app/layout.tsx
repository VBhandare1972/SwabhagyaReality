import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import AIChatBot from '@/components/AIChatBot';

export const metadata: Metadata = {
  title: 'Swabhagya Realty — Nashik\'s Most Trusted Real Estate Partner',
  description:
    'Swabhagya Realty — 12 years of trust, 500+ families served. Explore premium residential and commercial properties in Nashik. RERA verified, zero hidden charges.',
  keywords: 'real estate Nashik, property Nashik, apartments Nashik, Swabhagya Realty, buy property Nashik',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
       
        {/* AI Chat Bot Floating Button */}
        <AIChatBot />
      </body>
    </html>
  );
}
