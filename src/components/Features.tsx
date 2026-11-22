'use client';

import React from 'react';
import Image from 'next/image';
import { MessageSquare, Zap, Smartphone, IndianRupee, Clock, ShieldCheck, Check } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Automated WhatsApp Expiry Bot',
      description:
        'Fires polite, automated WhatsApp reminders at T-3 days, Day of Expiry, and T+3 days with embedded UPI payment links. Zero manual typing required.',
      badge: 'Official Meta Cloud API',
      highlight: '98% Open Rate',
    },
    {
      icon: Zap,
      title: 'Zero Biometric Hardware Needed',
      description:
        'Throw away ₹25,000 fragile fingerprint turnstiles that break down during rush hours. Members walk in freely and lift. Your focus is pure revenue collection.',
      badge: 'Save ₹25,000+ Hardware',
      highlight: 'Zero Maintenance',
    },
    {
      icon: Smartphone,
      title: '1-Tap Manual "Ping WhatsApp"',
      description:
        'Prefer a personal touch? Tap once from your phone to open a pre-written polite reminder on WhatsApp directly with the member.',
      badge: 'Zero Typing',
      highlight: '1-Second Nudge',
    },
    {
      icon: IndianRupee,
      title: 'Direct UPI Settlement (0% Commission)',
      description:
        'Members pay directly to your gym’s Google Pay, PhonePe, or Paytm UPI handle. SetRenew takes 0% commission on your fees.',
      badge: '0% Cuts',
      highlight: 'Direct to Bank',
    },
    {
      icon: Clock,
      title: '10-Second Member Onboarding',
      description:
        'No 30-field registration forms. Just Name, WhatsApp Number, Plan, and Start Date. Ready in seconds right from your phone.',
      badge: 'Friction-Free',
      highlight: 'Instant Setup',
    },
    {
      icon: ShieldCheck,
      title: 'Cloud-Synced Across Phone & Tablet',
      description:
        'Unlike offline apps that lose your data when you switch phones, SetRenew is 100% cloud-synced across your phone, tablet, and desk.',
      badge: 'Never Lose Data',
      highlight: 'Real-time Backup',
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-zinc-800 bg-zinc-950 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400 mb-3">
            <span>BUILT FOR BUSY GYM OWNERS</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl uppercase">
            Everything You Need to Run Collections on Autopilot
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            We stripped out the bloated ERP features nobody uses and perfected the only thing that matters: 
            getting every rupee your gym earned deposited into your bank account on time.
          </p>
        </div>

        {/* 3-Column Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800/90 bg-zinc-900/70 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-lg hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-sm">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-md bg-zinc-800/80 border border-zinc-700 px-2.5 py-0.5 text-[11px] font-semibold text-zinc-300">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{f.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
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
