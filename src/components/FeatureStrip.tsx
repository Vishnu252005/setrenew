'use client';

import React from 'react';
import { MessageSquare, Wallet, BarChart3, Users } from 'lucide-react';

export default function FeatureStrip() {
  const items = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Fee Reminders',
      description: 'Automated, personalized reminders to members',
    },
    {
      icon: Wallet,
      title: 'Online Fee Collection',
      description: 'Get payments via UPI, cards & wallets',
    },
    {
      icon: BarChart3,
      title: 'Revenue Tracking',
      description: 'See collections, due payments and monthly revenue',
    },
    {
      icon: Users,
      title: 'Membership Management',
      description: 'Add members, plans, and track renewals easily',
    },
  ];

  return (
    <div className="relative -mt-6 z-30 mx-auto max-w-7xl px-4 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50">
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
    </div>
  );
}
