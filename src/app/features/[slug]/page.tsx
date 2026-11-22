import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FEATURES } from '@/data/features';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Zap } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(FEATURES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = FEATURES[slug];
  if (!data) return {};

  const url = `https://setrenew.vihaya.app/features/${slug}`;

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

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const data = FEATURES[slug];

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
        name: 'Features',
        item: 'https://setrenew.vihaya.app/#features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.name,
        item: `https://setrenew.vihaya.app/features/${slug}`,
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
              <span>Features</span>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">{data.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="h-3.5 w-3.5 text-emerald-600" />
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
                See Live Interactive Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Core Benefits Grid */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Key Benefits for Your Gym
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.benefits.map((b, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                    {b.stat}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Flow */}
        <section className="py-14 bg-white border-t border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                How It Works in 4 Simple Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.howItWorksSteps.map((s, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 p-5 bg-slate-50 relative">
                  <span className="text-2xl font-black text-emerald-600/40 block mb-2 font-mono">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-2">
                <HelpCircle className="h-6 w-6 text-emerald-600" />
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 p-5 bg-white">
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
                <span>Try SetRenew Free for 30 Days</span>
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
