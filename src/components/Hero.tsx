'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ShinyText from './react-bits/ShinyText';
import BlurText from './react-bits/BlurText';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Building2,
  User,
  Phone,
  MapPin,
  Send,
  IndianRupee,
  CheckCheck,
} from 'lucide-react';

export default function Hero() {
  const [gymName, setGymName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [memberCount, setMemberCount] = useState('100-250');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gymName, ownerName, phone, city, memberCount }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitted(true);
      setPosition(data.position || 28);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-slate-50 bg-grid-pattern">
      <div className="hero-glow-light absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, subhead & clean form */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-xs mb-5 w-fit">
              <Zap className="h-3.5 w-3.5 text-blue-600" />
              <ShinyText text="Automated WhatsApp Dues Collection" speed={3} color="#1d4ed8" shineColor="#60a5fa" />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] leading-[1.12]">
              <BlurText text="Stop Chasing Gym Fees." delay={80} animateBy="words" direction="top" className="text-slate-900" />
              <span className="text-blue-600 block mt-1">Collect On WhatsApp.</span>
            </h1>

            <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal max-w-xl">
              Automated renewal reminders with 1-tap UPI links. Zero hardware. Zero manual follow-ups.
            </p>

            {/* Waitlist Form Card */}
            <div id="waitlist-section" className="mt-7 max-w-xl">
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-md relative">
                {submitted ? (
                  <div className="py-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 mb-3">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">VIP Spot Confirmed!</h3>
                    <p className="mt-1.5 text-slate-600 text-sm">
                      Thank you, <strong className="text-slate-900">{ownerName}</strong>! Your 30-day free access for{' '}
                      <strong className="text-slate-900">{gymName}</strong> is reserved.
                    </p>
                    {position && (
                      <div className="mt-3 inline-block rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                        Early Access Position: <span className="text-slate-900 font-bold">#{position}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                          LIMITED EARLY ACCESS
                        </span>
                        <h3 className="text-base font-bold text-slate-900">Get Your First 30 Days Free</h3>
                      </div>
                      <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                        100% Free Trial
                      </span>
                    </div>

                    {errorMsg && (
                      <div className="mb-3 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-600">
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Gym Name *
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <input
                              type="text"
                              required
                              value={gymName}
                              onChange={(e) => setGymName(e.target.value)}
                              placeholder="e.g. IronFit Gym"
                              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Owner / Manager Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <input
                              type="text"
                              required
                              value={ownerName}
                              onChange={(e) => setOwnerName(e.target.value)}
                              placeholder="e.g. Rahul Sharma"
                              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            WhatsApp Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="e.g. 9876543210"
                              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            City *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <input
                              type="text"
                              required
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="e.g. Bangalore, Kochi"
                              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Active Members
                        </label>
                        <select
                          value={memberCount}
                          onChange={(e) => setMemberCount(e.target.value)}
                          className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        >
                          <option value="Under 100">Under 100 members</option>
                          <option value="100-250">100 – 250 members</option>
                          <option value="250-500">250 – 500 members</option>
                          <option value="500+">500+ members</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.99] disabled:opacity-50 border border-blue-600 cursor-pointer"
                      >
                        <span>{loading ? 'Reserving...' : 'Claim 30 Days Free →'}</span>
                      </button>

                      <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-0.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                        No credit card required. Cancel anytime.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[330px] rounded-[36px] p-3 bg-slate-900 shadow-xl border-4 border-slate-800">
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-black rounded-full z-30" />

              <div className="rounded-[26px] overflow-hidden bg-slate-950 text-white flex flex-col h-[520px]">
                {/* Header */}
                <div className="bg-[#1f2c34] px-4 pt-8 pb-3 flex items-center gap-3 border-b border-zinc-800">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=150&q=80"
                      alt="IronFit Gym"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-xs text-zinc-100 block truncate">IronFit Gym</span>
                    <span className="text-[10px] text-zinc-400 block">WhatsApp Business</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#0b141a] text-xs">
                  <div className="bg-[#1f2c34] text-zinc-100 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm space-y-1.5">
                    <p>Hi <strong>Rahul</strong>! Your <strong>Monthly Plan</strong> at IronFit expires on <strong>25 Nov</strong>.</p>
                    <p className="text-zinc-300">Tap below to renew instantly via UPI:</p>
                    
                    <div className="rounded-lg bg-blue-600 p-2 text-center font-semibold text-white shadow-sm flex items-center justify-center gap-1 mt-1">
                      <IndianRupee className="h-3.5 w-3.5" />
                      <span>Pay ₹1,500 via GPay / PhonePe</span>
                    </div>

                    <div className="text-[10px] text-right text-zinc-400 pt-0.5 flex items-center justify-end gap-1">
                      <span>09:15 AM</span>
                      <CheckCheck className="h-3 w-3 text-sky-400" />
                    </div>
                  </div>

                  <div className="ml-auto bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-none max-w-[75%] shadow-sm">
                    <p>Paid via Google Pay! 👍</p>
                    <div className="text-[10px] text-right text-emerald-200 pt-0.5 flex items-center justify-end gap-1">
                      <span>09:18 AM</span>
                      <CheckCheck className="h-3 w-3 text-sky-300" />
                    </div>
                  </div>

                  <div className="bg-[#1f2c34] text-zinc-100 p-2.5 rounded-xl rounded-tl-none max-w-[90%] shadow-sm border border-emerald-500/30 space-y-1">
                    <div className="flex items-center gap-1 text-emerald-400 font-semibold text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Payment Received
                    </div>
                    <p className="text-[11px] text-zinc-300">
                      ₹1,500 received. Membership renewed until <strong>25 Dec 2026</strong>.
                    </p>
                  </div>
                </div>

                {/* Bottom Input */}
                <div className="bg-[#1f2c34] p-2 flex items-center gap-2 border-t border-zinc-800">
                  <div className="flex-1 rounded-lg bg-[#2a3942] px-3 py-1 text-xs text-zinc-400">
                    Type a message...
                  </div>
                  <div className="h-6 w-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                    <Send className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500 text-center font-medium">
              Zero member apps · 100% WhatsApp native
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
