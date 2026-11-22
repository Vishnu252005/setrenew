import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://setrenew.vercel.app';
const VIHAYA_URL = 'https://vihaya.app';

export default function StructuredData() {
  const parentOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${VIHAYA_URL}/#organization`,
    name: 'Vihaya Innovations',
    url: VIHAYA_URL,
    description: 'Vihaya Innovations builds next-generation SaaS tools including SetRenew (Gym WhatsApp Fee Recovery) and Vihaya Events.',
    founder: {
      '@type': 'Person',
      name: 'Vishnu S',
      url: 'https://linkedin.com/in/vishnubuilds',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'SetRenew',
    alternateName: ['SetRenew Gym Software', 'SetRenew WhatsApp Fee Collection'],
    url: SITE_URL,
    description:
      'The #1 automated WhatsApp fee recovery and membership renewal software built specifically for Indian gym owners. Sends polite WhatsApp payment reminders with direct 1-tap UPI payment links.',
    parentOrganization: {
      '@id': `${VIHAYA_URL}/#organization`,
    },
    founder: {
      '@type': 'Person',
      name: 'Vishnu S',
      jobTitle: 'Founder',
      url: 'https://linkedin.com/in/vishnubuilds',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: [
      'Automated WhatsApp Gym Fee Reminders',
      'UPI Payment Links (Google Pay, PhonePe, Paytm)',
      'Gym Membership Management',
      'Gym Revenue & Renewal Tracking',
      'Hardware-free Gym Management Software',
      'GymKhata Alternative',
      'FitnessForce Alternative',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'SetRenew',
    url: SITE_URL,
    description:
      'Stop chasing gym fees manually. Collect 100% on time via automated WhatsApp reminders with direct 1-tap UPI payment links.',
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: 'SetRenew',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Gym Management & Fee Collection Software',
    operatingSystem: 'Web, Android, iOS, WhatsApp',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    url: SITE_URL,
    inLanguage: 'en-IN',
    countriesSupported: 'IN',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: '499',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2028-12-31',
    },
    isAccessibleForFree: false,
    description:
      'Automated WhatsApp fee collection tool built for Indian gym owners. Triggers polite reminders with GPay and PhonePe UPI links. Flat ₹499/month for unlimited gym members with 0% gateway commission.',
    featureList: [
      'Automated WhatsApp payment reminders sent before and on expiry',
      'Direct 1-tap UPI links (Google Pay, PhonePe, Paytm)',
      '100% of collected fees deposit directly to gym bank account',
      '0% commission taken on membership renewals',
      'Zero expensive biometric machines or turnstiles needed',
      '10-second member onboarding from trainer phone',
      'Live cloud sync across mobile, tablet, and reception desk',
      'CSV and Excel spreadsheet import in 60 seconds',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do gym members need to download an app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Reminders arrive directly on WhatsApp with a 1-tap UPI link. Members install nothing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my gym WhatsApp number get blocked?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Never. SetRenew uses official, verified WhatsApp business messaging. Your personal number is 100% safe and secure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I import members from Excel or manual register?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Upload your existing CSV or Excel spreadsheet and import all members in under 60 seconds.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does gym fee payment collection work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Members click the WhatsApp button, which opens Google Pay, PhonePe, or Paytm. 100% of the fees deposit directly to your bank account with 0% commission.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does SetRenew cost after the free trial?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flat ₹499/month for unlimited members. No hidden fees, cancel anytime.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if a gym member pays by cash at the front desk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tap "Mark Paid" on your phone dashboard. The reminder schedule cancels automatically and updates your collected revenue.',
        },
      },
    ],
  };

  return (
    <>
      <script
        id="ld-parent-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parentOrgSchema) }}
      />
      <script
        id="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        id="ld-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
