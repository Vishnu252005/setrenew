'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const faqs = [
    {
      q: 'Do members need to download an app?',
      a: 'No. Reminders arrive directly on WhatsApp with a 1-tap UPI link. Members install nothing.',
    },
    {
      q: 'Will my WhatsApp number get blocked?',
      a: 'Never. SetRenew uses official, verified WhatsApp business messaging. Your personal number is 100% safe and secure.',
    },
    {
      q: 'Can I import members from Excel?',
      a: 'Yes. Upload your existing CSV or Excel spreadsheet and import all members in under 60 seconds.',
    },
    {
      q: 'How does payment collection work?',
      a: 'Members click the WhatsApp button, opening GPay, PhonePe, or Paytm. Funds deposit directly to your bank account with 0% commission.',
    },
    {
      q: 'How much does SetRenew cost after the trial?',
      a: 'Flat ₹499/month for unlimited members. No hidden fees, cancel anytime.',
    },
    {
      q: 'What if a member pays by cash at the desk?',
      a: 'Tap "Mark Paid" on the dashboard. The reminder schedule cancels automatically and updates your collected revenue.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 mb-3">
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Quick answers to common questions about SetRenew.
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
