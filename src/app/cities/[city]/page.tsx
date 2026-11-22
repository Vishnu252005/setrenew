import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CITIES } from '@/data/cities';
import { MapPin, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Building2 } from 'lucide-react';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CITIES).map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = CITIES[city];
  if (!data) return {};

  const url = `https://setrenew.vihaya.app/cities/${city}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      siteName: 'SetRenew',
      locale: 'en_IN',
      type: 'article',
    },
  };
}

export default async function CityLandingPage({ params }: Props) {
  const { city } = await params;
  const data = CITIES[city];

  if (!data) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://setrenew.vihaya.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cities',
        item: 'https://setrenew.vihaya.app',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.cityName,
        item: `https://setrenew.vihaya.app/cities/${city}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span>Cities</span>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">{data.cityName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <MapPin className="h-3.5 w-3.5 text-emerald-600" />
              {data.heroBadge}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
              {data.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              {data.subhead}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://dashboard.setrenew.vihaya.app/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 text-white font-semibold shadow-sm hover:bg-emerald-700 transition-colors text-sm"
              >
                <span>Start Free Trial (30 Days Free)</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/#preview"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm"
              >
                Explore Live Demo
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                {data.gymCountEstimate}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Flat ₹499/mo (₹0 setup)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Direct 1-tap UPI
              </span>
            </div>
          </div>
        </section>

        {/* Localized Insights Section */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-emerald-600" />
                  Popular Gym Hubs in {data.cityName}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  SetRenew is designed for gyms and fitness studios across:
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.popularGymHubs.map((hub, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {hub}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1.5">
                    The Main Challenge
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {data.localPainPoint}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm">
                <h3 className="text-base font-bold text-emerald-950 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  How SetRenew Solves This
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                  {data.localSolution}
                </p>

                <div className="mt-6 pt-5 border-t border-emerald-200/60 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-emerald-900 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp reminders with 1-tap Google Pay / PhonePe button</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-900 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>0% gateway commission — money deposits directly to your bank</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-900 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>₹0 hardware — run your gym from your smartphone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-2">
                <HelpCircle className="h-6 w-6 text-emerald-600" />
                Frequently Asked Questions in {data.cityName}
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://dashboard.setrenew.vihaya.app/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors text-sm shadow-sm"
              >
                <span>Get Started in {data.cityName} (30 Days Free)</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
