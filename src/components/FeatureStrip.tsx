'use client';

import React from 'react';
import { MessageSquare, Wallet, BarChart3, Users } from 'lucide-react';

export default function FeatureStrip() {
  const items = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Fee Reminders',
      description: 'Automated, polite reminders sent before and on expiry',
    },
    {
      icon: Wallet,
      title: 'Online Fee Collection',
      description: 'Collect fees directly via GPay, PhonePe, or Paytm with 0% cut',
    },
    {
      icon: BarChart3,
      title: 'Revenue Tracking',
      description: 'See live collections, pending dues, and monthly revenue',
    },
    {
      icon: Users,
      title: 'Membership Management',
      description: 'Add members in 10 seconds without complicated software',
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {items.map((item, idx) => (
            <div key={idx} className={`flex items-start gap-3.5 ${idx !== 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#16a34a] border border-emerald-100 flex-shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
