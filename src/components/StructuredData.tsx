import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://setrenew.in';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'SetRenew',
    alternateName: ['SetRenew Gym Software', 'SetRenew WhatsApp Reminder'],
    url: SITE_URL,
    description:
      'Automated gym membership fee collection tool for Indian gym owners. Sends polite WhatsApp payment reminders with 1-tap UPI payment links.',
    founder: {
      '@type': 'Person',
      name: 'Vishnu S',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: [
      'Gym Fee Collection',
      'Automated WhatsApp Reminders',
      'UPI Payment Links',
      'Gym Dues Tracking',
      'Fitness Club Management',
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
    applicationSubCategory: 'Gym Management & Fee Reminder Software',
    operatingSystem: 'Web, WhatsApp, Mobile',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    url: SITE_URL,
    inLanguage: 'en',
    countriesSupported: 'IN',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: '499',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    isAccessibleForFree: false,
    description:
      'Zero-hardware fee reminder and collection software for Indian gyms. Triggers automated WhatsApp reminders with GPay and PhonePe links.',
    featureList: [
      'Automated WhatsApp payment reminders via Meta Cloud API',
      '1-tap UPI links (Google Pay, PhonePe, Paytm)',
      'Zero biometric hardware required',
      '10-second member onboarding',
      '0% commission on membership payments',
      'Live cloud sync across mobile, tablet, and desk',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do members need to download an app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Reminders arrive directly on WhatsApp with a 1-tap UPI link. Members install nothing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my WhatsApp number get blocked?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Never. SetRenew connects via the Official Meta Cloud API with pre-approved transactional templates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I import members from Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Upload your existing CSV or Excel spreadsheet and import all members in under 60 seconds.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does payment collection work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Members click the WhatsApp button, opening GPay, PhonePe, or Paytm. Funds deposit directly to your bank account with 0% commission.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does SetRenew cost after the trial?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flat ₹499/month for unlimited members. No hidden fees, cancel anytime.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if a member pays by cash at the desk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tap "Mark Paid" on the dashboard. The reminder schedule cancels automatically and updates your collected revenue.',
        },
      },
    ],
  };

  return (
    <>
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
