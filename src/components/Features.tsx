'use client';

import React from 'react';
import { Smartphone, MessageSquare, Zap, Clock, ShieldCheck, IndianRupee } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Automated WhatsApp Expiry Bot',
      description:
        'Fires polite, automated WhatsApp reminders at T-3 days, Day of Expiry, and T+3 days with embedded UPI payment links. Zero manual typing required.',
      badge: 'Official Meta Cloud API',
    },
    {
      icon: Zap,
      title: 'Zero Biometric Hardware Needed',
      description:
        'Throw away ₹25,000 fragile fingerprint turnstiles. Members walk in freely and lift. Your focus is pure automated fee collection.',
      badge: 'Save ₹25,000+ Hardware',
    },
    {
      icon: Smartphone,
      title: '1-Tap Manual "Ping WhatsApp"',
      description:
        'Prefer a personal touch? Tap once from your phone to open a pre-written polite reminder on WhatsApp directly with the member.',
      badge: 'Zero Typing',
    },
    {
      icon: IndianRupee,
      title: 'Direct UPI Settlement (0% Commission)',
      description:
        'Members pay directly to your gym’s Google Pay, PhonePe, or Paytm UPI handle. SetRenew takes 0% commission on your fees.',
      badge: '0% Cuts',
    },
    {
      icon: Clock,
      title: '10-Second Member Onboarding',
      description:
        'No 30-field registration forms. Just Name, WhatsApp Number, Plan, and Start Date. Ready in seconds right from your phone.',
      badge: 'Friction-Free',
    },
    {
      icon: ShieldCheck,
      title: 'Cloud-Synced Across Phone & Tablet',
      description:
        'Unlike offline apps that lose your data when you switch phones, SetRenew is 100% cloud-synced across your phone, tablet, and desk.',
      badge: 'Never Lose Data',
    },
  ];

  return (
    <section id="features" className="py-20 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 mb-3">
            <span>BUILT FOR GYM OWNERS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why Neighborhood Gyms Choose SetRenew
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            We stripped out the bloated ERP features nobody uses and perfected the only thing that matters: 
            getting paid on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-md bg-zinc-800 border border-zinc-700 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
