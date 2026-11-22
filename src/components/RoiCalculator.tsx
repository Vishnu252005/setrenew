'use client';

import React, { useState } from 'react';
import { IndianRupee, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';

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
    <section id="calculator" className="py-20 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 mb-3">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>THE INVISIBLE REVENUE LEAK</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How Much Money Is Your Gym Leaking Every Month?
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            In typical Indian gyms, 15% to 25% of members continue working out past their expiry date 
            because staff are busy and awkward confrontations are avoided.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 sm:p-10 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-zinc-300">Active Gym Members</span>
                  <span className="text-blue-400 font-bold">{members} members</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                  <span>50</span>
                  <span>300</span>
                  <span>600+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-zinc-300">Average Monthly Fee</span>
                  <span className="text-blue-400 font-bold">₹{fee.toLocaleString('en-IN')} / mo</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="4000"
                  step="100"
                  value={fee}
                  onChange={(e) => setFee(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                  <span>₹800</span>
                  <span>₹2,000</span>
                  <span>₹4,000</span>
                </div>
              </div>

              <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-3.5 text-xs text-zinc-400">
                <p>
                  <strong>Total Monthly Gym Revenue:</strong> ₹{monthlyRevenue.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Result Box */}
            <div className="rounded-xl bg-gradient-to-br from-red-950/40 via-zinc-900 to-zinc-900 border border-red-500/30 p-6 text-center">
              <span className="text-xs uppercase tracking-wider font-semibold text-red-400">
                Estimated Monthly Loss
              </span>
              <div className="mt-2 text-4xl sm:text-5xl font-black text-white">
                <span className="text-zinc-500 text-3xl font-normal">₹</span>
                {estimatedLeakage.toLocaleString('en-IN')}
                <span className="text-base text-zinc-400 font-normal"> / mo</span>
              </div>
              <p className="mt-2 text-xs text-zinc-400">
                That is <strong className="text-red-400">₹{annualLeakage.toLocaleString('en-IN')}</strong> lost every year to delayed renewals and forgotten dues.
              </p>

              <div className="mt-6 pt-5 border-t border-zinc-800/80 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <TrendingUp className="h-4 w-4" />
                  SetRenew Cost: Flat ₹499/month
                </div>
                <p className="text-xs text-zinc-400">
                  Recovering even <strong>ONE</strong> single member per month pays for SetRenew for the next 3 months.
                </p>
              </div>

              <button
                onClick={scrollToWaitlist}
                className="mt-5 w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-blue-500 transition-colors border border-blue-500 cursor-pointer"
              >
                <span>Recover Your Revenue (Free for 30 Days)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
