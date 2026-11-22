import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — SetRenew (Vihaya Innovations)',
  description: 'Privacy Policy for SetRenew, a WhatsApp-native gym fee collection and dues management platform operated by Vihaya Innovations Private Limited.',
  alternates: {
    canonical: 'https://setrenew.vihaya.app/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">Privacy Policy</span>
            </nav>
          </div>
        </div>

        <section className="py-12 md:py-16 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              Legal & Compliance
            </div>
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mb-8">
              Effective Date: January 1, 2026 · Last Updated: November 2026
            </p>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
              <p>
                SetRenew (&quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is operated by <strong>Vihaya Innovations Private Limited</strong>, an Indian entity incorporated in Kerala, India. We are committed to safeguarding the privacy and security of gym owners and their members.
              </p>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">1. Information We Collect</h2>
                <p>
                  To provide automated fee reminders, we collect gym business details (gym name, owner contact number, email, and UPI VPA) and basic member operational records (member name, WhatsApp mobile number, active membership plan, start date, and expiry date).
                </p>
                <p className="mt-2">
                  <strong>We do not collect or store sensitive banking passwords, UPI PINs, credit card numbers, or biometric fingerprint scans.</strong> All UPI transactions occur entirely inside the member&apos;s chosen UPI app (Google Pay, PhonePe, Paytm, or bank app).
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">2. How We Use Your Data</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To schedule and deliver polite fee reminders and payment confirmations via WhatsApp.</li>
                  <li>To present revenue, collected fee, and pending dues analytics on your gym dashboard.</li>
                  <li>To provide customer support and service updates to gym owners.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">3. Zero Selling of Data</h2>
                <p>
                  We have a strict <strong>zero-data-selling guarantee</strong>. Your member contact lists and gym revenue details belong exclusively to your gym business. We never monetize, rent, or share your contact records with third-party marketers, advertisers, or rival gyms.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">4. Data Storage & Security</h2>
                <p>
                  Data is transmitted over 256-bit TLS encryption and stored securely in cloud data centers located in India compliant with ISO 27001 standards. Access is restricted to authenticated account holders.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">5. Data Deletion & Ownership</h2>
                <p>
                  Gym owners can request export or permanent deletion of their account and member database at any time by contacting our support team at <a href="mailto:support@vihaya.app" className="text-emerald-700 underline font-medium">support@vihaya.app</a>.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">6. Contact Information</h2>
                <p>
                  Vihaya Innovations Private Limited<br />
                  Kerala, India<br />
                  Email: support@vihaya.app<br />
                  Website: https://setrenew.vihaya.app
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
