'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-32 bg-zinc-950">
      {/* 1. Atmospheric Cinematic Gym Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="High Performance Strength Training Gym"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 filter brightness-75 contrast-125"
        />
        {/* Gradients to blend smoothly into deep canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        <div className="hero-glow absolute inset-0 pointer-events-none opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Announcement Bar */}
        <div className="flex justify-start sm:justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-950/40 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-blue-300 shadow-lg shadow-blue-900/20">
            <Zap className="h-3.5 w-3.5 text-blue-400" />
            <span>NO BIOMETRIC TURNSTILES · NO DAILY DESK SCANNING · 100% AUTOMATED WHATSAPP</span>
          </div>
        </div>

        {/* 2-Column High-Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition & Waitlist Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl sm:leading-[1.1] uppercase">
              Stop Chasing Gym Fees Manually.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 block mt-1">
                Collect 100% On Time on WhatsApp.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
              The zero-effort fee collection tool built specifically for Indian gym owners. 
              Automatically triggers polite WhatsApp reminders with 1-tap UPI payment links. 
              Say goodbye to awkward front-desk confrontations and recover up to <strong className="text-emerald-400 font-semibold">₹45,000+</strong> every month in forgotten renewals.
            </p>

            {/* Quick Benefits Strip */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-5 text-xs sm:text-sm text-zinc-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                First 30 Days 100% Free
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                Direct GPay & PhonePe UPI (0% Cut)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                Official Meta Cloud API
              </span>
            </div>

            {/* Waitlist Form Card */}
            <div id="waitlist-section" className="mt-8">
              <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl relative">
                {submitted ? (
                  <div className="py-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
                      <Sparkles className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">VIP Early Access Confirmed!</h3>
                    <p className="mt-2 text-zinc-400 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-white">{ownerName}</strong>! Your 30-day free access for{' '}
                      <strong className="text-white">{gymName}</strong> is reserved.
                    </p>
                    {position && (
                      <div className="mt-4 inline-block rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                        Early Access Position: <span className="text-white font-bold">#{position}</span>
                      </div>
                    )}
                    <div className="mt-6 rounded-lg bg-zinc-950 p-4 border border-zinc-800 text-xs text-zinc-400 text-left space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                        <CheckCircle2 className="h-4 w-4" /> 1 Month Free VIP Pass Locked In
                      </div>
                      <p>
                        We will notify you directly on WhatsApp ({phone}) with your private access link before public launch.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                          LIMITED TO FIRST 100 GYMS
                        </span>
                        <h3 className="text-lg font-bold text-white">Join the VIP Waitlist (30 Days Free)</h3>
                      </div>
                      <span className="hidden sm:inline-block rounded-md bg-blue-500/10 border border-blue-500/20 px-2 py-1 text-[11px] font-semibold text-blue-300">
                        Save ₹4,999/yr
                      </span>
                    </div>

                    {errorMsg && (
                      <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-400">
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-medium text-zinc-300 mb-1">
                            Gym / Fitness Studio Name *
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                            <input
                              type="text"
                              required
                              value={gymName}
                              onChange={(e) => setGymName(e.target.value)}
                              placeholder="e.g. IronFit Gym"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-zinc-300 mb-1">
                            Owner / Manager Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                            <input
                              type="text"
                              required
                              value={ownerName}
                              onChange={(e) => setOwnerName(e.target.value)}
                              placeholder="e.g. Rahul Sharma"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-medium text-zinc-300 mb-1">
                            WhatsApp Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="e.g. 9876543210"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-zinc-300 mb-1">
                            City *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                            <input
                              type="text"
                              required
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="e.g. Bangalore, Kochi, Pune"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1">
                          Estimated Active Members
                        </label>
                        <select
                          value={memberCount}
                          onChange={(e) => setMemberCount(e.target.value)}
                          className="w-full rounded-lg bg-zinc-950 border border-zinc-700/80 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 active:scale-[0.99] disabled:opacity-50 border border-blue-500 cursor-pointer"
                      >
                        <span>{loading ? 'Reserving Your VIP Access...' : 'Claim 30 Days Free VIP Access'}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1.5 pt-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
                        Zero credit card required · Instant WhatsApp confirmation
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup & Visual Social Proof (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* The Phone Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-[36px] p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl border-2 border-zinc-700/60">
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-950 rounded-full z-30" />

              {/* Screen Canvas */}
              <div className="rounded-[28px] overflow-hidden bg-zinc-950 border border-zinc-800 text-white flex flex-col h-[580px] shadow-inner">
                {/* WhatsApp Chat Header */}
                <div className="bg-[#1f2c34] px-4 pt-10 pb-3 flex items-center gap-3 border-b border-zinc-800/80">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=150&q=80"
                      alt="IronFit Gym"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-sm text-zinc-100 truncate">IronFit Gym</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    </div>
                    <span className="text-[11px] text-zinc-400 block truncate">Official Business Account</span>
                  </div>
                </div>

                {/* WhatsApp Chat Body */}
                <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#0b141a] bg-opacity-95 text-xs">
                  {/* Encryption notice */}
                  <div className="text-center">
                    <span className="inline-block bg-[#182229] text-[#8696a0] text-[10px] px-2.5 py-1 rounded-md">
                      🔒 Messages are end-to-end encrypted
                    </span>
                  </div>

                  {/* Automated Reminder Message */}
                  <div className="bg-[#1f2c34] text-zinc-100 p-3 rounded-xl rounded-tl-none max-w-[88%] shadow-md border border-zinc-800 space-y-2">
                    <p className="leading-relaxed">
                      Hi <strong>Rahul</strong>! 👋 Hope you had a great workout today at IronFit.
                    </p>
                    <p className="leading-relaxed">
                      A quick heads-up that your <strong>Gold Monthly Plan</strong> expires on <strong>25 Nov 2026</strong>.
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      To keep your locker and access active without any queue, tap below to renew in 1 tap:
                    </p>
                    
                    {/* Direct UPI CTA inside WhatsApp */}
                    <div className="rounded-lg bg-blue-600 p-2.5 text-center font-semibold text-white shadow-md flex items-center justify-center gap-1.5 mt-2">
                      <IndianRupee className="h-3.5 w-3.5" />
                      <span>Renew via GPay / PhonePe (₹1,500)</span>
                    </div>

                    <div className="text-[10px] text-right text-zinc-400 pt-1 flex items-center justify-end gap-1">
                      <span>09:15 AM</span>
                      <CheckCheck className="h-3.5 w-3.5 text-sky-400" />
                    </div>
                  </div>

                  {/* Member Reply */}
                  <div className="ml-auto bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-none max-w-[75%] shadow-md">
                    <p>Done, paid via Google Pay! 👍</p>
                    <div className="text-[10px] text-right text-emerald-200 pt-1 flex items-center justify-end gap-1">
                      <span>09:18 AM</span>
                      <CheckCheck className="h-3.5 w-3.5 text-sky-300" />
                    </div>
                  </div>

                  {/* Automated Confirmation & Receipt */}
                  <div className="bg-[#1f2c34] text-zinc-100 p-3 rounded-xl rounded-tl-none max-w-[88%] shadow-md border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                      <CheckCircle2 className="h-4 w-4" /> Payment Verified
                    </div>
                    <p className="text-[11px] text-zinc-300">
                      ₹1,500 received. Your membership has been extended to <strong>25 Dec 2026</strong>. See you tomorrow at the rack!
                    </p>
                    <div className="text-[10px] text-right text-zinc-400 pt-1">
                      <span>09:18 AM</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar inside phone */}
                <div className="bg-[#1f2c34] p-2.5 flex items-center gap-2 border-t border-zinc-800">
                  <div className="flex-1 rounded-lg bg-[#2a3942] px-3 py-1.5 text-xs text-zinc-400">
                    Type a message...
                  </div>
                  <div className="h-7 w-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                    <Send className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Caption */}
            <p className="mt-4 text-xs text-zinc-400 text-center flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live WhatsApp preview: Zero app downloads required for members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
