import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import StructuredData from '@/components/StructuredData';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://setrenew.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SetRenew — Automated WhatsApp Gym Fee Reminders & Revenue Tracker',
    template: '%s | SetRenew',
  },
  description:
    'Stop chasing gym fees manually. SetRenew automatically sends polite WhatsApp payment reminders with direct 1-tap UPI links. Zero biometric hardware. 100% cloud synced.',
  keywords: [
    'SetRenew',
    'gym fee reminder software india',
    'automated whatsapp gym fee reminder',
    'gym membership payment reminder app',
    'gym dues tracker whatsapp',
    'simple gym management software india',
    'gym khata app upi',
    'gpay gym fee collection',
    'phonepe gym dues reminder',
    'gym software zero commission',
    'fitness club fee collection software',
    'gym management system without biometrics',
    'gym renewal reminder bot',
    'fitnessforce alternative',
    'gymkhata alternative',
    'gym dues collection automation',
    'whatsapp cloud api gym software',
    'gym revenue tracker',
  ],
  authors: [{ name: 'SetRenew Team' }],
  creator: 'SetRenew',
  publisher: 'SetRenew',
  applicationName: 'SetRenew',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'SetRenew',
    title: 'SetRenew — Stop Chasing Gym Fees. Collect On WhatsApp.',
    description:
      'The zero-effort fee collection tool for gym owners. Automated WhatsApp renewal reminders with direct 1-tap UPI payment links.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SetRenew — Stop Chasing Gym Fees. Collect On WhatsApp.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SetRenew — Stop Chasing Gym Fees. Collect On WhatsApp.',
    description:
      'The zero-effort fee collection tool for gym owners. Automated WhatsApp renewal reminders with direct 1-tap UPI links.',
    images: ['/opengraph-image'],
    creator: '@setrenew',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      'en-IN': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  category: 'Fitness & Gym Software',
  classification: 'Business Software',
  other: {
    google: 'notranslate',
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 min-h-screen`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
