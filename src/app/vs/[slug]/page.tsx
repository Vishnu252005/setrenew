import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPARISONS } from '@/data/comparisons';
import { Check, X, ArrowRight, ShieldCheck, Zap, ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(COMPARISONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = COMPARISONS[slug];
  if (!data) return {};

  const url = `https://setrenew.vihaya.app/vs/${slug}`;

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

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const data = COMPARISONS[slug];

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
        name: 'Comparisons',
        item: 'https://setrenew.vihaya.app/#pricing',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `SetRenew vs ${data.competitorName}`,
        item: `https://setrenew.vihaya.app/vs/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <span>Competitor Comparison</span>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">{data.competitorName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
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
                See Interactive Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing & Hardware Snapshot */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Competitor Card */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="font-bold text-lg text-slate-800">{data.competitorName}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                    Traditional System
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-xs text-slate-500 block">Typical Software Fee</span>
                    <span className="text-xl font-bold text-slate-900">{data.competitorPrice}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Hardware & Setup Requirements</span>
                    <span className="text-sm text-slate-700">{data.competitorHardware}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3">
                      Common Pain Points
                    </h4>
                    <ul className="space-y-2">
                      {data.competitorWeaknesses.map((w, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SetRenew Card */}
              <div className="rounded-xl border-2 border-emerald-600 bg-white p-6 shadow-md relative">
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-md bg-emerald-600 text-white text-[11px] font-bold tracking-wider uppercase">
                  Modern Alternative
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
                  <h3 className="font-bold text-lg text-emerald-950 flex items-center gap-1.5">
                    <span>SetRenew</span>
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                    100% WhatsApp Native
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-xs text-slate-500 block">SetRenew Price</span>
                    <span className="text-xl font-bold text-emerald-700">{data.setrenewPrice}</span>
                    <span className="text-[11px] text-slate-500 ml-1">· Unlimited members</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Hardware & Setup Cost</span>
                    <span className="text-sm font-semibold text-emerald-900">{data.setrenewHardware}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                      Why Gyms Switch to SetRenew
                    </h4>
                    <ul className="space-y-2">
                      {data.setrenewStrengths.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-14 bg-white border-t border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Head-to-Head Feature Comparison
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                See how SetRenew simplifies your gym operations compared to {data.competitorName}.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700">
                    <th className="py-3.5 px-4 sm:px-6">Feature / Capability</th>
                    <th className="py-3.5 px-4 sm:px-6 text-slate-500">{data.competitorName}</th>
                    <th className="py-3.5 px-4 sm:px-6 bg-emerald-50/70 text-emerald-900">SetRenew</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.keyDifferences.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-800">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 text-xs sm:text-sm">
                        {row.competitor}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 bg-emerald-50/40 text-emerald-950 font-medium text-xs sm:text-sm">
                        {row.setrenew}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verdict Box */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                <Zap className="h-4 w-4 text-emerald-600" />
                The Bottom Line
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-4">
                The Final Verdict
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {data.verdict}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-900">Try SetRenew Free for 30 Days</div>
                  <div className="text-xs text-slate-500">Zero credit card required · Unlimited members · Setup in 2 mins</div>
                </div>
                <a
                  href="https://dashboard.setrenew.vihaya.app/signup"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors text-xs"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
