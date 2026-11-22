import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SetRenew | Automated WhatsApp Gym Fee Reminders & Revenue Tracker',
  description:
    'Stop chasing gym fees manually. SetRenew automatically sends polite WhatsApp payment reminders with direct 1-tap UPI links. No biometric hardware. No daily check-in scanning.',
  keywords: [
    'gym fee reminder software india',
    'automated whatsapp gym fee reminder',
    'gym membership payment reminder app',
    'gym khata app upi',
    'simple gym management software india',
    'gym dues tracker',
  ],
  authors: [{ name: 'SetRenew' }],
  openGraph: {
    title: 'SetRenew — Stop Chasing Gym Fees Manually',
    description:
      'The zero-effort fee reminder tool for gym owners. Automatically sends polite WhatsApp reminders with 1-tap UPI payment links.',
    url: 'https://setrenew.in',
    siteName: 'SetRenew',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SetRenew | Automated WhatsApp Gym Fee Reminders',
    description:
      'The zero-effort fee reminder tool for gym owners. Collect 100% of dues on time via WhatsApp.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
