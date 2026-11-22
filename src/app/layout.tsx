import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import StructuredData from '@/components/StructuredData';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://setrenew.vihaya.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SetRenew — Automated WhatsApp Gym Fee Collection & Renewal Software India',
    template: '%s | SetRenew',
  },
  description:
    'The #1 automated WhatsApp fee collection software for Indian gym owners. Automatically sends polite payment reminders with 1-tap UPI links (GPay, PhonePe, Paytm). Zero biometric machines, 0% commission, flat ₹499/mo.',
  keywords: [
    // Core Brand & Product
    'SetRenew',
    'SetRenew gym software',
    'automated WhatsApp gym fee reminder',
    'gym fee collection software India',
    'gym membership software India',
    'gym renewal software',
    'gym fee recovery tool',
    'gym dues reminder bot',
    'gym management software India',
    'simple gym software for Indian gym owners',
    
    // Payment & UPI Keywords
    'gym fee UPI collection',
    'GPay gym payment link',
    'PhonePe gym dues reminder',
    'Paytm gym fee reminder',
    'zero commission gym fee collection',
    'gym membership billing software India',
    'direct bank transfer gym fees',
    
    // Hardware-Free / Simplicity
    'gym management system without biometrics',
    'no turnstile gym software',
    'mobile gym management app',
    'gym software for phone and tablet',
    '10 second gym member onboarding',
    
    // Competitor Alternatives (High Buying Intent)
    'GymKhata alternative',
    'FitnessForce alternative',
    'OkFit alternative',
    'eSSL biometric software alternative',
    'GymMaster alternative India',
    'best alternative to manual gym registers',
    'Excel spreadsheet alternative for gyms',
    
    // Geo-targeted Cities (High Local Search Volume)
    'gym software Delhi NCR',
    'gym management software Mumbai',
    'gym software Bangalore',
    'gym management software Hyderabad',
    'gym software Pune',
    'gym management software Chennai',
    'gym fee software Kolkata',
    'gym management software Ahmedabad',
    'gym management software Kerala',
    'gym management software Chandigarh',
    'gym software Jaipur',
    'gym management software Lucknow',
    
    // Gym Business Long-tail Queries
    'how to collect gym fees on time',
    'stop gym members lifting without paying fees',
    'polite fee reminder message for gym members',
    'best gym software for 50 to 500 members',
    'fitness studio fee management app',
  ],
  authors: [{ name: 'Vihaya Innovations' }, { name: 'Vishnu S' }],
  creator: 'Vihaya Innovations',
  publisher: 'SetRenew by Vihaya',
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
    title: 'SetRenew — Collect Gym Fees Automatically on WhatsApp',
    description:
      'The zero-effort fee collection tool built for Indian gym owners. Automatic polite WhatsApp reminders with 1-tap UPI payment links. ₹499/mo flat. 30 days free.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SetRenew — Collect Gym Fees Automatically on WhatsApp',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SetRenew — Collect Gym Fees Automatically on WhatsApp',
    description:
      'Stop chasing gym fees manually. Automated WhatsApp reminders with direct 1-tap UPI links. 0% commission.',
    images: ['/opengraph-image'],
    creator: '@vihayaevents',
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
  category: 'Fitness & Gym Management Software',
  classification: 'Business Software',
  other: {
    google: 'notranslate',
    'geo.region': 'IN',
    'geo.placename': 'India',
    'target-country': 'IN',
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
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 min-h-screen`}>
        <StructuredData />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
