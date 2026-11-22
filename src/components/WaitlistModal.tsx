'use client';

import React, { useState } from 'react';
import { X, Building2, User, Phone, MapPin, Mail, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function WaitlistModal({ isOpen, onClose, title = 'Start Your 30-Day Free Trial' }: WaitlistModalProps) {
  const [gymName, setGymName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [memberCount, setMemberCount] = useState('100-250');
  const [currentSystem, setCurrentSystem] = useState('Paper Register / Khata Book');
  const [primaryPainPoint, setPrimaryPainPoint] = useState('Members delaying renewal fees');
  const [monthlyFeeRange, setMonthlyFeeRange] = useState('₹1,000 – ₹2,500');
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gymName,
          ownerName,
          email,
          phone,
          city,
          memberCount,
          currentSystem,
          primaryPainPoint,
          monthlyFeeRange,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');

      setSubmitted(true);
      setPosition(data.position || 1131);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 mb-4">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">VIP Spot Confirmed!</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Thank you, <strong className="text-slate-900">{ownerName}</strong>! Your 30-day VIP trial for{' '}
              <strong className="text-slate-900">{gymName}</strong> ({city}) is reserved.
            </p>
            {position && (
              <div className="mt-4 inline-block rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                Priority Waitlist Spot: <span className="font-bold text-emerald-900">#{position.toLocaleString()}</span> (Batch 1 Queue)
              </div>
            )}
            <div className="mt-4 rounded-lg bg-emerald-50/60 border border-emerald-200 p-3 text-xs text-emerald-900 space-y-1">
              <div>✉️ <strong>Confirmation Email Dispatched:</strong> Check <span className="underline font-semibold">{email}</span> for your trial pass.</div>
              <div>💬 <strong>WhatsApp Onboarding:</strong> Our team will ping <span className="font-semibold">+91 {phone}</span> with your activation link.</div>
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
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                JOIN 1,000+ GYM OWNERS · 30 DAYS 100% FREE VIP TRIAL
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Tell us about your gym. We will configure your automated WhatsApp fee recovery in under 2 minutes.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              {/* Row 1: Gym Name & Owner Name */}
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

              {/* Row 2: Email Address & WhatsApp Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              </div>

              {/* Row 3: City & Active Members */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City / Location *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bangalore, Delhi NCR"
                      className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Active Gym Members</label>
                  <select
                    value={memberCount}
                    onChange={(e) => setMemberCount(e.target.value)}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 cursor-pointer"
                  >
                    <option value="Under 100">Under 100 members</option>
                    <option value="100-250">100 – 250 members</option>
                    <option value="250-500">250 – 500 members</option>
                    <option value="500+">500+ members</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Average Monthly Fee */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Average Monthly Fee</label>
                <select
                  value={monthlyFeeRange}
                  onChange={(e) => setMonthlyFeeRange(e.target.value)}
                  className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 cursor-pointer"
                >
                  <option value="Under ₹1,000">Under ₹1,000 / month</option>
                  <option value="₹1,000 – ₹2,500">₹1,000 – ₹2,500 / month</option>
                  <option value="₹2,500+">₹2,500+ / month</option>
                </select>
              </div>

              {/* Row 5: Current System Used */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How do you currently track member fees?
                </label>
                <select
                  value={currentSystem}
                  onChange={(e) => setCurrentSystem(e.target.value)}
                  className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 cursor-pointer"
                >
                  <option value="Paper Register / Khata Book">Physical Paper Register / Khata Book</option>
                  <option value="Excel / Google Sheets">Excel / Google Sheets</option>
                  <option value="GymKhata / FitnessForce">GymKhata / FitnessForce (Legacy Software)</option>
                  <option value="Biometric Machine">Biometric Turnstile / Fingerprint Machine</option>
                  <option value="Manual WhatsApp Chat">Manual WhatsApp 1-on-1 Chats</option>
                </select>
              </div>

              {/* Row 6: #1 Biggest Headache */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  What is your #1 biggest headache right now?
                </label>
                <select
                  value={primaryPainPoint}
                  onChange={(e) => setPrimaryPainPoint(e.target.value)}
                  className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 cursor-pointer"
                >
                  <option value="Members delaying renewal fees">Members delaying renewal fees & uncollected dues</option>
                  <option value="Awkward front-desk talks">Awkward front-desk confrontations asking for pending fees</option>
                  <option value="Wasting hours calling members">Wasting 2+ hours every day calling expired members</option>
                  <option value="Biometric machine jams">Biometric turnstile breakdown & morning queue rush</option>
                  <option value="Clunky software">Overly complicated software that staff refuses to use</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all active:scale-[0.99] disabled:opacity-50 border border-emerald-600 cursor-pointer mt-4"
              >
                <span>{loading ? 'Reserving Your VIP Access...' : 'Get 30 Days Free Trial →'}</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                No credit card required. Cancel anytime. 100% safe & spam-free.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
