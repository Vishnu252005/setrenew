'use client';

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Sparkles, Building2, User, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  const [gymName, setGymName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [memberCount, setMemberCount] = useState('100-300');
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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-grid-pattern">
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Pre-header badge (Strictly rectangular rounded-md) */}
          <div className="inline-flex items-center gap-2 rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 mb-6">
            <Zap className="h-3.5 w-3.5 text-blue-400" />
            <span>ZERO BIOMETRICS · ZERO DAILY SCANNING · 100% AUTOMATED WHATSAPP</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl sm:leading-tight">
            Stop Chasing Gym Fees Manually.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              Collect 100% On Time on WhatsApp.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
            The zero-effort fee reminder tool for gym owners. Automatically sends polite WhatsApp reminders with 
            direct 1-tap UPI links. No daily desk check-in scanning. No ₹25,000 biometric machines. No Excel sheets.
          </p>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              1st Month 100% Free
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Direct GPay & PhonePe UPI
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Official Meta Cloud API
            </span>
          </div>
        </div>

        {/* Waitlist Form Card */}
        <div id="waitlist-section" className="mt-12 max-w-xl mx-auto">
          <div className="glass-card rounded-xl p-6 sm:p-8 shadow-2xl relative border border-zinc-800">
            {submitted ? (
              <div className="text-center py-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">You&apos;re On The VIP List!</h3>
                <p className="mt-2 text-zinc-400 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-white">{ownerName}</strong>! Your early-access spot for{' '}
                  <strong className="text-white">{gymName}</strong> is confirmed.
                </p>
                {position && (
                  <div className="mt-4 inline-block rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                    VIP Waitlist Position: <span className="text-white font-bold">#{position}</span>
                  </div>
                )}
                <div className="mt-6 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800 text-xs text-zinc-400 text-left space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-4 w-4" /> 30-Day Free VIP Trial Locked In
                  </div>
                  <p>We will ping you directly on WhatsApp ({phone}) with your early access link before public release.</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 text-center">
                  <div className="inline-block rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-400 mb-2">
                    LIMITED TO FIRST 100 GYMS
                  </div>
                  <h3 className="text-xl font-bold text-white">Join the VIP Waitlist (30 Days Free)</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Lock in your 1 month 100% free access. Zero payment details required.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-400">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Gym / Fitness Center Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                        <input
                          type="text"
                          required
                          value={gymName}
                          onChange={(e) => setGymName(e.target.value)}
                          placeholder="e.g. IronFit Gym"
                          className="w-full rounded-lg bg-zinc-900 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Owner / Manager Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                        <input
                          type="text"
                          required
                          value={ownerName}
                          onChange={(e) => setOwnerName(e.target.value)}
                          placeholder="e.g. Rahul Nair"
                          className="w-full rounded-lg bg-zinc-900 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
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
                          className="w-full rounded-lg bg-zinc-900 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
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
                          className="w-full rounded-lg bg-zinc-900 border border-zinc-700/80 px-3.5 py-2 pl-9 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Approximate Active Members
                    </label>
                    <select
                      value={memberCount}
                      onChange={(e) => setMemberCount(e.target.value)}
                      className="w-full rounded-lg bg-zinc-900 border border-zinc-700/80 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 active:scale-[0.99] disabled:opacity-50 border border-blue-500 cursor-pointer"
                  >
                    <span>{loading ? 'Securing Your Spot...' : 'Claim 1 Month Free VIP Access'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center flex items-center justify-center gap-1.5 mt-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
                    Zero spam. We will only contact you on WhatsApp with your launch invite.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
