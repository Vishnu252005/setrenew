'use client';

import React, { useState } from 'react';
import { X, Building2, User, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function WaitlistModal({ isOpen, onClose, title = 'Start Your 30-Day Free Trial' }: WaitlistModalProps) {
  const [gymName, setGymName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [memberCount, setMemberCount] = useState('100-250');
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
        body: JSON.stringify({ gymName, ownerName, phone, city, memberCount }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');

      setSubmitted(true);
      setPosition(data.position || 28);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
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
              Thank you, <strong className="text-slate-900">{ownerName}</strong>! Your 30-day VIP access for{' '}
              <strong className="text-slate-900">{gymName}</strong> is reserved.
            </p>
            {position && (
              <div className="mt-4 inline-block rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                Early Access Position: <span className="font-bold">#{position}</span>
              </div>
            )}
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
                LIMITED TO FIRST 100 GYMS
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero setup hassle. Works with your existing WhatsApp. No credit card required.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-600">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
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
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bangalore, Mumbai"
                      className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3.5 py-2 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Active Gym Members</label>
                <select
                  value={memberCount}
                  onChange={(e) => setMemberCount(e.target.value)}
                  className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
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
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all active:scale-[0.99] disabled:opacity-50 border border-emerald-600 cursor-pointer mt-4"
              >
                <span>{loading ? 'Reserving...' : 'Get 30 Days Free →'}</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                No credit card required. Cancel anytime.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
