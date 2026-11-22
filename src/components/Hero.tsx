'use client';

import React, { useState } from 'react';
import {
  Check,
  Calendar,
  ArrowRight,
  Users,
  CheckCircle2,
  Lock,
  Link as LinkIcon,
} from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Clean Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col text-left">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-xs mb-6 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>1,000+ Indian Gyms on the Priority Waitlist</span>
                <span className="text-base leading-none">🇮🇳</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                Collect Gym Fees <br />
                Automatically on <br />
                <span className="text-[#16a34a]">WhatsApp.</span>
              </h1>

              {/* Subhead */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
                Send polite fee reminders, collect UPI payments, and track gym renewals automatically. Zero manual calls, zero front desk friction.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 text-base font-bold text-white shadow-md transition-all active:scale-[0.98] border border-emerald-600 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3.5 text-base font-semibold text-slate-700 shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <span>Book a Demo</span>
                </button>
              </div>

              {/* 3 Clean Checkmarks */}
              <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#16a34a] stroke-[3]" />
                  No setup hassle
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#16a34a] stroke-[3]" />
                  Direct GPay & PhonePe UPI
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#16a34a] stroke-[3]" />
                  Zero hardware needed
                </span>
              </div>
            </div>

            {/* Right Column: Clean, Spacious Phone Mockup & Floating Badges */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] flex items-center justify-center py-6">
                
                {/* Floating Stat Badge 1: Top Left */}
                <div className="absolute -top-1 -left-4 sm:-left-8 z-30 rounded-xl bg-white border border-slate-200 p-3 shadow-lg shadow-slate-200/50">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-[#16a34a] border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block leading-tight">Fee Collected</span>
                      <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                        ₹3,74,250
                        <span className="rounded bg-emerald-100 text-[#16a34a] text-[10px] font-bold px-1 py-0.2">
                          +12%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge 2: Bottom Right */}
                <div className="absolute -bottom-2 -right-4 sm:-right-8 z-30 rounded-xl bg-white border border-slate-200 p-3 shadow-lg shadow-slate-200/50">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block leading-tight">Active Members</span>
                      <div className="text-sm font-extrabold text-slate-900">
                        248 Gym Members
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smartphone Device Mockup */}
                <div className="relative z-20 w-[280px] sm:w-[310px] rounded-[40px] p-3 bg-slate-900 shadow-2xl shadow-slate-900/20 border-4 border-slate-800">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30" />

                  <div className="rounded-[30px] overflow-hidden bg-[#e5ddd5] flex flex-col h-[480px] text-slate-900">
                    
                    {/* WhatsApp Business Header */}
                    <div className="bg-[#075e54] text-white px-4 pt-8 pb-3 flex items-center gap-2.5 shadow-xs">
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs text-white">
                        SR
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-xs leading-tight truncate">SetRenew</span>
                          <CheckCircle2 className="h-3 w-3 text-emerald-300 fill-emerald-300 text-white" />
                        </div>
                        <span className="text-[10px] text-emerald-100 block">Verified Business</span>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-3.5 space-y-3 bg-[#efeae2] bg-opacity-95 text-xs flex flex-col justify-start overflow-hidden">
                      <div className="mx-auto rounded-md bg-[#ffeecd] px-2 py-0.5 text-[9px] text-slate-600 shadow-xs flex items-center gap-1">
                        <Lock className="h-2.5 w-2.5" /> End-to-end encrypted
                      </div>

                      {/* 1. Automated Reminder Bubble */}
                      <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xs space-y-2 max-w-[95%] border border-slate-100">
                        <p className="font-semibold text-slate-800">
                          Hi Rohan! 💪
                        </p>
                        <p className="text-slate-700 leading-snug">
                          Your gym membership of <strong className="text-slate-900">₹1,499</strong> is due on <strong className="text-slate-900">5 Jan</strong>.
                        </p>
                        <p className="text-slate-700 leading-snug">
                          Pay now and keep your streak going! 🔥
                        </p>

                        {/* WhatsApp Pay Button */}
                        <div className="pt-1">
                          <div className="rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white p-2 text-center font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <LinkIcon className="h-3 w-3" />
                            <span>Pay ₹1,499 via UPI</span>
                          </div>
                        </div>

                        <div className="text-[9px] text-right text-slate-400">
                          10:24 AM · Sent automatically
                        </div>
                      </div>

                      {/* 2. Member Confirmation Bubble */}
                      <div className="bg-[#d9fdd3] self-end rounded-xl rounded-tr-none p-2.5 shadow-xs max-w-[85%] border border-emerald-100 text-slate-800">
                        <p className="text-[11px] leading-snug">
                          Done, paid via Google Pay! 👍
                        </p>
                        <div className="text-[8px] text-right text-slate-500 mt-0.5">
                          10:26 AM ✓✓
                        </div>
                      </div>

                      {/* 3. System Verified Receipt */}
                      <div className="bg-white rounded-xl p-2.5 shadow-xs border border-emerald-200 flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <div className="text-[10px] leading-tight text-slate-700">
                          <strong className="text-emerald-700 block">Payment Verified</strong>
                          Membership renewed to 5 Feb 2026
                        </div>
                      </div>

                    </div>

                    {/* Bottom WhatsApp bar */}
                    <div className="bg-[#f0f2f5] p-2 flex items-center gap-2 border-t border-slate-200">
                      <div className="flex-1 rounded-lg bg-white px-3 py-1 text-[11px] text-slate-400 border border-slate-200">
                        Message...
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
