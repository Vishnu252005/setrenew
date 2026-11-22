import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — SetRenew (Vihaya Innovations)',
  description: 'Terms of Service and commercial agreement for SetRenew gym membership and WhatsApp fee recovery software.',
  alternates: {
    canonical: 'https://setrenew.vihaya.app/terms',
  },
};

export default function TermsPage() {
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
              <span className="text-slate-900 font-semibold">Terms of Service</span>
            </nav>
          </div>
        </div>

        <section className="py-12 md:py-16 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText className="h-3.5 w-3.5 text-emerald-600" />
              Terms of Agreement
            </div>
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mb-8">
              Effective Date: January 1, 2026 · Last Updated: November 2026
            </p>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
              <p>
                These Terms of Service govern the access and use of the SetRenew gym management web application (&quot;Service&quot;) provided by <strong>Vihaya Innovations Private Limited</strong>. By registering an account or accessing the Service, you agree to be bound by these terms.
              </p>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">1. The Service</h2>
                <p>
                  SetRenew provides gym owners and fitness club operators with automated fee reminders via WhatsApp, direct UPI payment integration, and membership status dashboards.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">2. Subscription & Pricing</h2>
                <p>
                  SetRenew is billed at a flat subscription rate of ₹499 per month (or applicable annual discount), covering unlimited active gym members. New accounts receive a 30-day unrestricted trial with no credit card required. You may cancel your subscription at any time without cancellation penalties.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">3. Zero Payment Gateway Commission</h2>
                <p>
                  SetRenew facilitates direct peer-to-merchant UPI transactions. Payments collected through your gym&apos;s UPI ID deposit 100% of the funds straight into your designated bank account. SetRenew charges 0% transaction commission on membership fees collected.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">4. Acceptable Use & Messaging Guidelines</h2>
                <p>
                  You agree to use SetRenew solely for legitimate gym and fitness studio operations. You may only register members who have voluntarily enrolled in your fitness facility. Spamming unsolicited marketing messages or non-fitness communications is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">5. Intellectual Property</h2>
                <p>
                  The SetRenew brand, software architecture, and interface design are proprietary assets of Vihaya Innovations Private Limited. All gym member records and business metrics uploaded by you remain your exclusive property.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">6. Limitation of Liability</h2>
                <p>
                  SetRenew is provided on an &quot;as-is&quot; basis. We strive for 99.9% uptime, but are not liable for external network outages caused by third-party telecommunication providers or bank UPI infrastructure.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-2">7. Jurisdiction</h2>
                <p>
                  These terms are governed by the laws of India. Any disputes arising from these terms will fall under the exclusive jurisdiction of the competent courts in Kerala, India.
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
