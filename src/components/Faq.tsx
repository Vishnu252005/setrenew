'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const faqs = [
    {
      q: 'Do my gym members need to download or install an app?',
      a: 'No! That is the best part. Your members receive their polite reminder directly on WhatsApp with a direct 1-tap UPI payment link. They do not need to download or register for any new app.',
    },
    {
      q: 'Will my personal WhatsApp number get banned for sending messages?',
      a: 'Never. SetRenew integrates with the Official Meta WhatsApp Cloud API using pre-approved transactional reminder templates. It is 100% compliant with WhatsApp policies and never risks your phone number.',
    },
    {
      q: 'Can I import my existing member list from Excel or WhatsApp?',
      a: 'Yes! SetRenew provides a 1-click Excel/CSV import. You can upload your existing list of members, their plans, and phone numbers in under 60 seconds.',
    },
    {
      q: 'How does payment collection work?',
      a: 'When a member clicks the renewal link in their WhatsApp reminder, their phone directly opens Google Pay, PhonePe, or Paytm with your gym’s UPI handle. Money lands straight into your bank account with 0% gateway commission.',
    },
    {
      q: 'How much does SetRenew cost after the 30-day VIP trial?',
      a: 'SetRenew costs a flat ₹499/month for unlimited members. There are zero hidden fees, zero per-member charges, and you can cancel anytime with a single click.',
    },
    {
      q: 'What if a member pays me by Cash at the desk?',
      a: 'Simply tap "Mark Paid" on the dashboard and select "Cash". The member is instantly renewed, the system cancels their upcoming WhatsApp reminders, and adds the amount to your "Collected This Month" total.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Everything you need to know about SetRenew and how it helps your gym collect fees on autopilot.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
