'use client';

import React from 'react';
import { MessageSquare, IndianRupee, Smartphone, Check, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Auto WhatsApp Reminders',
      description:
        'Polite messages sent before fees expire with a direct UPI payment link. You never have to ask for money in person.',
      badge: 'Zero awkward calls',
    },
    {
      icon: IndianRupee,
      title: 'Direct Bank Deposit',
      description:
        'Members pay using Google Pay, PhonePe, or Paytm. 100% of the fees go straight to your bank account with zero cut.',
      badge: '0% commission',
    },
    {
      icon: Smartphone,
      title: 'No Machines Needed',
      description:
        'No expensive fingerprint scanners or turnstiles that stop working. Run your entire gym easily from your mobile phone.',
      badge: 'Save ₹25,000+',
    },
  ];

  return (
    <section id="features" className="py-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Simple & Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#16a34a] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>SIMPLE & EASY</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need. <br />
            Nothing Complicated.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            No training or computer skills required. Start collecting gym fees automatically in under 2 minutes.
          </p>
        </div>

        {/* 3 Clean, Lightweight Cards - No Nested Boxes, No Clutter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-7 flex flex-col justify-between hover:border-emerald-300 hover:bg-white transition-all shadow-xs"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#16a34a] border border-emerald-100 mb-5">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#16a34a]">
                <Check className="h-4 w-4 stroke-[3]" />
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
