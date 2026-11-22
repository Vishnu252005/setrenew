'use client';

import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [members, setMembers] = useState(200);
  const [fee, setFee] = useState(1500);

  // Industry benchmark: ~15% of members delay or default on payment without automated follow-ups
  const leakagePercentage = 0.15;
  const monthlyRevenue = members * fee;
  const estimatedLeakage = Math.round(monthlyRevenue * leakagePercentage);
  const annualLeakage = estimatedLeakage * 12;

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 mb-3">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>REVENUE LEAK CALCULATOR</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How Much Are You Leaking Each Month?
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base">
            See how much uncollected revenue automated WhatsApp reminders will recover for your gym.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 sm:p-10 border border-slate-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-slate-700">Active Gym Members</span>
                  <span className="text-blue-600 font-bold">{members} members</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>50</span>
                  <span>300</span>
                  <span>600+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-slate-700">Average Monthly Fee</span>
                  <span className="text-blue-600 font-bold">₹{fee.toLocaleString('en-IN')} / mo</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="4000"
                  step="100"
                  value={fee}
                  onChange={(e) => setFee(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹800</span>
                  <span>₹2,000</span>
                  <span>₹4,000</span>
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-600">
                <p>
                  <strong>Total Monthly Gym Revenue:</strong> ₹{monthlyRevenue.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Result Box */}
            <div className="rounded-xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-6 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-red-600">
                Estimated Monthly Loss
              </span>
              <div className="mt-2 text-4xl sm:text-5xl font-black text-slate-900">
                <span className="text-slate-400 text-3xl font-normal">₹</span>
                {estimatedLeakage.toLocaleString('en-IN')}
                <span className="text-base text-slate-500 font-normal"> / mo</span>
              </div>
              <p className="mt-2 text-xs text-slate-500 font-medium">
                ~₹{annualLeakage.toLocaleString('en-IN')} uncollected every year
              </p>

              <div className="mt-5 pt-4 border-t border-red-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">SetRenew Pricing:</span>
                <span className="font-bold text-emerald-700">₹499 / month flat</span>
              </div>

              <button
                onClick={scrollToWaitlist}
                className="mt-5 w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-blue-700 transition-colors border border-blue-600 cursor-pointer shadow-sm"
              >
                <span>Claim 30 Days Free →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
