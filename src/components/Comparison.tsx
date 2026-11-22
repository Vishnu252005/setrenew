'use client';

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function Comparison() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="py-20 border-t border-slate-200 bg-slate-50/70 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#16a34a] mb-3">
              <span>SIMPLE PRICING</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              One Price. Unlimited Members.
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              No hidden fees, no per-member charges, and zero expensive biometric machines.
            </p>
          </div>

          {/* Sleek, Non-Bulky Pricing Card */}
          <div className="max-w-xl mx-auto rounded-2xl border-2 border-[#16a34a] bg-white p-7 sm:p-9 shadow-xl shadow-emerald-500/10 relative">
            
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-[#16a34a] border border-emerald-600 px-4 py-0.5 text-[11px] font-bold text-white shadow-sm uppercase tracking-wide">
              <span>Recommended</span>
            </div>

            <div className="text-center pb-6 border-b border-slate-100">
              <h3 className="text-2xl font-black text-slate-900">Gym Owner Plan</h3>
              <p className="text-xs text-slate-500 mt-1">Full access to automatic WhatsApp fee recovery</p>
              
              <div className="mt-5 flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold text-slate-400">₹</span>
                <span className="text-5xl font-black text-slate-900 tracking-tight">499</span>
                <span className="text-sm font-semibold text-slate-500">/ month flat</span>
              </div>
              <span className="mt-2 inline-block text-xs font-bold text-[#16a34a] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                First 30 Days 100% Free
              </span>
            </div>

            {/* Clean 4-Item Feature Grid */}
            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>Auto WhatsApp Reminders</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>1-Tap UPI Links (0% Cut)</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>Zero Biometric Hardware</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>Unlimited Gym Members</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all active:scale-[0.99] border border-emerald-600 cursor-pointer"
              >
                <span>Start Free Trial (30 Days Free)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-[11px] text-slate-400 block text-center mt-2.5">
                No credit card required · Setup in 2 minutes
              </span>
            </div>
          </div>

          {/* Slim, Minimal Comparison Strip (Replaces Bulky 3 Cards) */}
          <div className="mt-10 max-w-xl mx-auto rounded-xl border border-slate-200 bg-white p-4 shadow-xs text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="font-bold text-slate-800 block">Why it beats other options:</span>
              <span className="text-[11px] text-slate-500">
                Legacy software costs ₹2,500/mo + ₹35,000 for machines. Excel loses ₹30,000+ in forgotten dues.
              </span>
            </div>
            <span className="font-extrabold text-[#16a34a] whitespace-nowrap bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
              Save ₹30,000+/yr
            </span>
          </div>

        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
