'use client';

import React, { useState } from 'react';
import { X, Building2, User, Phone, MapPin, Mail, CheckCircle2, AlertCircle, ArrowRight, Check } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function WaitlistModal({ isOpen, onClose, title = 'Start Your 30-Day Free Trial' }: WaitlistModalProps) {
  // Step State
  const [step, setStep] = useState<1 | 2>(1);

  // Form Fields
  const [gymName, setGymName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [memberCount, setMemberCount] = useState('100-250');

  // UI States
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  // Step 1: Capture Core Lead Immediately
  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!phone || phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit WhatsApp number.');
      return;
    }

    setLoading(true);

    try {
      // Instantly save lead to Firestore and trigger emails
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gymName: gymName.trim(),
          ownerName: ownerName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          city: city.trim() || 'India',
          memberCount: memberCount || '100-250',
          currentSystem: 'Pending Onboarding',
          primaryPainPoint: 'Fee Collection Automation',
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');

      setPosition(data.position || 1131);
      // Lead is captured! Move to optional customization step
      setStep(2);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Enrich Lead with City & Member Tier
  const handleStep2Submit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      if (city.trim() || memberCount) {
        await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            gymName: gymName.trim(),
            ownerName: ownerName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            city: city.trim() || 'India',
            memberCount: memberCount || '100-250',
          }),
        });
      }
    } catch (err) {
      console.warn('Step 2 enrichment skipped:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleQuickCity = (selectedCity: string) => {
    setCity(selectedCity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg my-8 max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          /* Final Confirmation View */
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 mb-4">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">VIP Spot Confirmed!</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Thank you, <strong className="text-slate-900">{ownerName}</strong>! Your 30-day VIP trial for{' '}
              <strong className="text-slate-900">{gymName}</strong> is locked in.
            </p>
            {position && (
              <div className="mt-4 inline-block rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                Priority Waitlist Spot: <span className="font-bold text-emerald-900">#{position.toLocaleString()}</span> (Batch 1 Queue)
              </div>
            )}
            <div className="mt-4 rounded-lg bg-emerald-50/60 border border-emerald-200 p-3.5 text-xs text-emerald-900 space-y-1.5 text-left">
              <div>✉️ <strong>Confirmation Email Dispatched:</strong> Check <span className="underline font-semibold">{email}</span> for your reservation pass.</div>
              <div>💬 <strong>WhatsApp Onboarding:</strong> Our engineering team will message <span className="font-semibold">+91 {phone}</span> with your instant setup link.</div>
            </div>
            <div className="mt-6">
              <button
                onClick={onClose}
                className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : step === 1 ? (
          /* STEP 1: Fast 4-Field Capture (10 Seconds) */
          <div>
            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-600 text-white text-[11px] font-bold">1</span>
                <span className="text-xs font-bold text-slate-900">Quick Registration</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">Step 1 of 2</span>
            </div>

            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                JOIN 1,000+ GYM OWNERS · 30 DAYS 100% FREE VIP TRIAL
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter your details to reserve your early access spot in under 10 seconds.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleStep1Submit} className="space-y-3.5 text-left">
              {/* Gym Name & Owner Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Gym Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={gymName}
                      onChange={(e) => setGymName(e.target.value)}
                      placeholder="e.g. IronFit Gym"
                      className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Owner / Manager Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* WhatsApp Number & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gym.com"
                      className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-4 py-3 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98] border border-emerald-600 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <span>Reserving Spot...</span>
                  ) : (
                    <>
                      <span>Claim Your Priority Spot</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-slate-500">
                  🔒 No credit card required &middot; 30-day VIP pass &middot; 0% commission
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* STEP 2: Quick 1-Tap Customization (5 Seconds) */
          <div>
            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-600 text-white text-[11px] font-bold">2</span>
                <span className="text-xs font-bold text-slate-900">Customize Your Setup</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600">Spot Reserved ✓</span>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-bold text-slate-900">Almost Done, {ownerName}!</h3>
              <p className="text-xs text-slate-500 mt-1">
                Help us calibrate your WhatsApp fee collection queue:
              </p>
            </div>

            <form onSubmit={handleStep2Submit} className="space-y-4 text-left">
              {/* Question 1: City / Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  City / Location <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative mb-2">
                  <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Bangalore, Mumbai, Delhi NCR"
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                {/* 1-Tap Quick City Buttons */}
                <div className="flex flex-wrap gap-1.5">
                  {['Bangalore', 'Delhi NCR', 'Mumbai', 'Hyderabad', 'Kochi', 'Pune'].map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => handleQuickCity(c)}
                      className={`text-[11px] px-2.5 py-1 rounded-md border font-medium transition-colors cursor-pointer ${
                        city === c
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Member Tier (1-Tap Clickable Cards) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Approximate Active Members
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Under 100', sub: 'Boutique / Studio' },
                    { label: '100 – 250', sub: 'Standard Gym' },
                    { label: '250 – 500', sub: 'Mid-Sized Club' },
                    { label: '500+ Members', sub: 'Large Fitness Center' },
                  ].map((tier) => {
                    const isSelected = memberCount === tier.label;
                    return (
                      <button
                        type="button"
                        key={tier.label}
                        onClick={() => setMemberCount(tier.label)}
                        className={`p-2.5 text-left rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50/70 border-emerald-500 text-slate-900 shadow-xs'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{tier.label}</span>
                          {isSelected && <Check className="h-3.5 w-3.5 text-emerald-600" />}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{tier.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98] border border-emerald-600 cursor-pointer disabled:opacity-70"
                >
                  {loading ? 'Finalizing...' : 'Complete VIP Setup →'}
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition-colors cursor-pointer"
                >
                  Skip
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
