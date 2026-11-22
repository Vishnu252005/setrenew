export interface FeatureData {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  headline: string;
  subhead: string;
  benefits: {
    title: string;
    description: string;
    stat: string;
  }[];
  howItWorksSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const FEATURES: Record<string, FeatureData> = {
  'whatsapp-fee-reminders': {
    slug: 'whatsapp-fee-reminders',
    name: 'WhatsApp Fee Reminders',
    title: 'Automated WhatsApp Gym Fee Reminders — Recover 95%+ of Gym Dues',
    metaTitle: 'Automated WhatsApp Gym Fee Reminders | SetRenew India',
    metaDescription:
      'Stop chasing gym members for renewal fees. Send automated, polite WhatsApp reminders with 1-tap UPI payment buttons. 98% open rate, zero awkward talks.',
    heroBadge: '100% WHATSAPP AUTOMATION',
    headline: 'Send Polite WhatsApp Reminders That Actually Get Paid',
    subhead:
      'SMS gets ignored. Phone calls get disconnected. WhatsApp has a 98% open rate in India. SetRenew reaches members right where they are with pre-filled UPI payment links.',
    benefits: [
      {
        title: '98% Open Rate',
        description: 'WhatsApp messages are read within 3 minutes of delivery, compared to less than 15% for traditional SMS.',
        stat: '98%',
      },
      {
        title: 'Zero Awkward Confrontations',
        description: 'No more standing at the front desk telling members "Bhai, fees pending hai." The system politely handles reminders automatically.',
        stat: '100% Polite',
      },
      {
        title: 'Advance Notice Before Expiry',
        description: 'Nudge members 3 days and 1 day before their plan ends, so renewals happen seamlessly before memberships lapse.',
        stat: '3 Days Early',
      },
      {
        title: 'Direct 1-Tap UPI Links',
        description: 'Members tap once to open Google Pay, PhonePe, or Paytm with the exact amount and gym UPI handle pre-filled.',
        stat: '1 Tap',
      },
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Add Member & Expiry Date',
        description: 'Enter member name, WhatsApp number, and membership duration in just 10 seconds.',
      },
      {
        step: '02',
        title: 'Automated Reminder Dispatches',
        description: 'SetRenew automatically triggers friendly WhatsApp messages as the expiry date approaches.',
      },
      {
        step: '03',
        title: 'Member Pays via UPI',
        description: 'Member taps the payment link inside WhatsApp. Funds deposit directly to your gym bank account with 0% cut.',
      },
      {
        step: '04',
        title: 'Digital Receipt Delivered',
        description: 'Member instantly receives an automated renewal confirmation and digital receipt on WhatsApp.',
      },
    ],
    faqs: [
      {
        question: 'Do I need WhatsApp Business API or Meta Cloud verification to use this?',
        answer: 'SetRenew handles the messaging infrastructure for you. You don’t need to configure complex Meta developers apps or submit business documents.',
      },
      {
        question: 'Can I customize the wording of the WhatsApp message?',
        answer: 'Yes! You can choose friendly, formal, or motivational message templates that match your gym’s culture.',
      },
      {
        question: 'Will members get spammed with messages?',
        answer: 'Never. SetRenew sends targeted, well-timed notifications only around the member’s actual renewal cycle.',
      },
    ],
  },
  'upi-payment-collection': {
    slug: 'upi-payment-collection',
    name: 'UPI Payment Collection',
    title: 'Direct UPI Gym Payment Collection — 0% Commission Straight to Your Bank',
    metaTitle: 'Direct UPI Gym Payment Collection (0% Commission) | SetRenew',
    metaDescription:
      'Collect gym membership payments directly via GPay, PhonePe, and Paytm UPI. Zero payment gateway fees, instant bank deposits, and automated digital receipts.',
    heroBadge: 'ZERO COMMISSION UPI',
    headline: '100% of Your Gym Revenue Stays in Your Bank Account',
    subhead:
      'Why pay 2% to 3% to payment gateways or software middlemen? SetRenew routes payments directly from your member’s UPI app to your gym’s VPA.',
    benefits: [
      {
        title: '0% Gateway Cuts',
        description: 'Keep 100% of every membership fee. Save ₹6,000 to ₹15,000 every year compared to standard payment gateways.',
        stat: '₹0 Deductions',
      },
      {
        title: 'Instant Bank Settlement',
        description: 'No waiting 2 to 3 days for gateway payouts. Money reflects in your gym account in real time via UPI.',
        stat: 'Instant',
      },
      {
        title: 'Supports All Major Apps',
        description: 'Google Pay, PhonePe, Paytm, BHIM, CRED, and all Indian bank UPI apps work seamlessly out of the box.',
        stat: 'All UPI Apps',
      },
      {
        title: 'Automated Reconciliation',
        description: 'Track collected revenue vs pending dues with clear visual indicators and zero manual bookkeeping.',
        stat: 'Auto-Matched',
      },
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Add Your Gym UPI ID',
        description: 'Simply enter your existing UPI VPA (e.g. gymname@okaxis or 9876543210@paytm) in settings.',
      },
      {
        step: '02',
        title: 'UPI Link Generated',
        description: 'Every fee reminder generates a dynamic UPI deep-link tailored to that member’s specific plan amount.',
      },
      {
        step: '03',
        title: 'Member Authenticates',
        description: 'The member’s banking app opens with the amount locked in, preventing typing errors or incorrect sums.',
      },
      {
        step: '04',
        title: 'Instant Confirmation',
        description: 'Your dashboard updates instantly and the member receives their digital payment proof.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a current bank account to receive UPI payments?',
        answer: 'You can use either your savings account or current business account UPI ID. SetRenew works with any valid Indian UPI VPA.',
      },
      {
        question: 'Are there hidden transaction limits?',
        answer: 'SetRenew imposes zero limits. Standard NPCI UPI transaction rules apply to member bank accounts.',
      },
    ],
  },
  'gym-membership-management': {
    slug: 'gym-membership-management',
    name: 'Membership Management',
    title: 'Fast 10-Second Gym Membership Management — No Clunky ERP',
    metaTitle: 'Fast Gym Membership Management Software India | SetRenew',
    metaDescription:
      'Manage gym members in 10 seconds from your phone. Add members, track plan expiries, see revenue trends, and eliminate complicated 40-field software.',
    heroBadge: 'LIGHTWEIGHT MEMBERSHIP SYSTEM',
    headline: 'Add Members in 10 Seconds From Your Smartphone',
    subhead:
      'Traditional gym software demands 40+ fields of personal data, medical history, and fingerprints just to register someone. SetRenew needs only name, phone number, and plan.',
    benefits: [
      {
        title: '10-Second Quick Add',
        description: 'Sign up new gym joiners right from the gym floor without sitting down at a desktop computer.',
        stat: '10 Secs',
      },
      {
        title: 'Real-Time Revenue Pulse',
        description: 'See total collected fees, pending dues, and active members at a single glance on clean visual charts.',
        stat: 'Live Pulse',
      },
      {
        title: 'One-Click Excel Import',
        description: 'Switching from another software or spreadsheet? Upload your CSV file and be live in under 60 seconds.',
        stat: '60 Sec Setup',
      },
      {
        title: '100% Cloud Synced',
        description: 'Access your gym dashboard from your phone, home tablet, or front-desk laptop with zero local installation.',
        stat: 'Always Synced',
      },
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Quick Member Entry',
        description: 'Type the member name, 10-digit mobile number, and select their membership package.',
      },
      {
        step: '02',
        title: 'Instant Expiry Calculation',
        description: 'The system automatically marks the renewal date and schedules future WhatsApp reminders.',
      },
      {
        step: '03',
        title: 'Live Dues Tracking',
        description: 'Filter active members, expired members, and pending fees with clean, one-tap list views.',
      },
      {
        step: '04',
        title: 'Seamless Renewals',
        description: 'Renew a member with one tap when they pay for their next cycle.',
      },
    ],
    faqs: [
      {
        question: 'Can multiple gym trainers or staff access the dashboard?',
        answer: 'Yes! Multiple staff members can log in securely from their own devices to check member status or record payments.',
      },
      {
        question: 'Is my gym member data private and safe?',
        answer: '100%. Your member database is encrypted, stored on secure Indian cloud infrastructure, and never shared or sold.',
      },
    ],
  },
  'zero-hardware-gym-system': {
    slug: 'zero-hardware-gym-system',
    name: 'Zero Hardware Gym System',
    title: 'Zero-Hardware Gym Software — Ditch Expensive Turnstiles & Fingerprint Machines',
    metaTitle: 'Zero-Hardware Gym Management System | Ditch Biometrics | SetRenew',
    metaDescription:
      'Say goodbye to broken biometric turnstiles, fingerprint sensor jams, and ₹40,000 hardware bills. Run your entire gym on 100% cloud mobile software.',
    heroBadge: 'ZERO HARDWARE REQUIRED',
    headline: 'Save ₹40,000+ by Eliminating Biometric Hardware',
    subhead:
      'Biometric fingerprint turnstiles jam during 7 AM rush hours, break down frequently, and cost a fortune to maintain. SetRenew solves fee recovery with 100% software.',
    benefits: [
      {
        title: '₹0 Upfront Hardware Cost',
        description: 'No expensive biometric readers, RFID cards, turnstile gates, or dedicated reception PC needed.',
        stat: 'Save ₹40k+',
      },
      {
        title: 'Zero Morning Rush Queues',
        description: 'Members walk into your gym freely without lining up to scan sweaty thumbs on an unresponsive sensor.',
        stat: 'No Queues',
      },
      {
        title: 'No AMC or Repair Bills',
        description: 'Biometric vendors charge ₹5,000 to ₹10,000 every year for hardware maintenance contracts. SetRenew has zero maintenance fees.',
        stat: '₹0 AMC',
      },
      {
        title: 'Runs on Any Smartphone',
        description: 'Manage your gym from the phone in your pocket. Compatible with all Android, iPhone, tablet, and PC browsers.',
        stat: 'Any Device',
      },
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'No Hardware to Install',
        description: 'Open setrenew.vihaya.app on your phone browser. No technician visits, no cabling, no wiring.',
      },
      {
        step: '02',
        title: 'Software Solves The Problem',
        description: 'Gyms bought biometrics to stop fee defaulters. SetRenew solves fee defaults at the source via WhatsApp payment links.',
      },
      {
        step: '03',
        title: 'Friendly Gym Atmosphere',
        description: 'Your gym feels welcoming and premium, rather than like an industrial factory turnstile.',
      },
      {
        step: '04',
        title: 'Unbreakable Reliability',
        description: 'Cloud software never breaks or wears out. 99.9% uptime guaranteed.',
      },
    ],
    faqs: [
      {
        question: 'If I don’t have a biometric turnstile, how do I know if an expired member enters?',
        answer: 'Members receive payment reminders days in advance and renew via WhatsApp before ever walking through the door. Defaulters drop by 80% automatically.',
      },
      {
        question: 'What if I already own a biometric machine?',
        answer: 'You can continue using your machine for check-in while using SetRenew for 100% automated WhatsApp fee collection and revenue tracking.',
      },
    ],
  },
};
