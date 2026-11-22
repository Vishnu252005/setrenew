'use client';

import React from 'react';
import { MessageSquare, Zap, Smartphone, IndianRupee, Clock, ShieldCheck, Check } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Automated Reminders',
      description: 'Polite WhatsApp reminders sent before and on expiry with 1-tap UPI payment links.',
      badge: 'Meta Cloud API',
      highlight: '98% Open Rate',
    },
    {
      icon: Zap,
      title: 'Zero Hardware Needed',
      description: 'No expensive fingerprint scanners or turnstiles. Run everything from phone or web.',
      badge: 'Zero Hardware Cost',
      highlight: 'Zero Maintenance',
    },
    {
      icon: Smartphone,
      title: '1-Tap Quick Nudge',
      description: 'Send pre-composed polite reminders to any pending member with a single tap.',
      badge: 'Zero Typing',
      highlight: '1-Tap Action',
    },
    {
      icon: IndianRupee,
      title: 'Direct UPI Settlement',
      description: 'Fees go directly to your GPay, PhonePe, or Paytm handle with 0% gateway commission.',
      badge: '0% Commission',
      highlight: 'Direct to Bank',
    },
    {
      icon: Clock,
      title: '10-Second Setup',
      description: 'Add new members in seconds with just name, WhatsApp number, and membership plan.',
      badge: 'Fast Onboarding',
      highlight: 'Instant Setup',
    },
    {
      icon: ShieldCheck,
      title: 'Live Cloud Sync',
      description: 'Access and manage members seamlessly across your phone, tablet, and reception desk.',
      badge: 'Always Synced',
      highlight: 'Real-time Backup',
    },
  ];

  return (
    <section id="features" className="py-20 border-t border-slate-200 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 mb-3">
            <span>CORE FEATURES</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need. Nothing You Don't.
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base">
            Simple, automated fee collection built for Indian gym owners.
          </p>
        </div>

        {/* 3-Column Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/20">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-md bg-white border border-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 shadow-xs">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <Check className="h-4 w-4" />
                <span>{f.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
