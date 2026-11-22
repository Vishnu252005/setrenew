'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Check,
  Calendar,
  ArrowRight,
  TrendingUp,
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
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col text-left">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-xs mb-6 w-fit">
                <span>Built for Indian Gym Owners</span>
                <span className="text-base leading-none">🇮🇳</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-[58px] leading-[1.12]">
                Collect Gym Fees <br />
                Automatically on <br />
                <span className="inline-flex items-center gap-2 text-[#16a34a]">
                  WhatsApp
                  <svg
                    className="inline-block h-9 w-9 sm:h-12 sm:w-12 text-[#16a34a]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.177 1.564 5.927l-1.657 6.053 6.196-1.625c1.702.929 3.651 1.462 5.727 1.462 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                  </svg>
                </span>
              </h1>

              {/* Subhead */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Send fee reminders, collect payments, and track your gym&apos;s revenue — all in one simple tool made for gyms in India.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all active:scale-[0.98] border border-emerald-600 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3.5 text-base font-semibold text-slate-800 shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <span>Book a Demo</span>
                </button>
              </div>

              {/* 3 Checkmarks */}
              <div className="mt-7 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#16a34a] stroke-[3]" />
                  No setup hassle
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#16a34a] stroke-[3]" />
                  Works with your existing WhatsApp
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#16a34a] stroke-[3]" />
                  Made for Indian gyms
                </span>
              </div>
            </div>

            {/* Right Column: Phone Mockup, Floating Badges & Trainer Photo */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
              
              {/* Outer Wrapper for realistic depth */}
              <div className="relative w-full max-w-[540px] flex items-center justify-between">
                
                {/* 1. Phone Frame Mockup (Left Side of composition) */}
                <div className="relative z-20 w-[270px] sm:w-[290px] rounded-[38px] p-2.5 bg-slate-900 shadow-2xl border-4 border-slate-800 flex-shrink-0">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-full z-30" />

                  <div className="rounded-[28px] overflow-hidden bg-[#e5ddd5] flex flex-col h-[460px] text-slate-900">
                    {/* WhatsApp Business Header */}
                    <div className="bg-[#075e54] text-white px-3.5 pt-7 pb-2.5 flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs text-white">
                        SR
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-xs leading-tight truncate">SetRenew</span>
                          <CheckCircle2 className="h-3 w-3 text-emerald-300 fill-emerald-300 text-white" />
                        </div>
                        <span className="text-[10px] text-emerald-100 block">Business Account</span>
                      </div>
                    </div>

                    {/* Chat Bubble Area */}
                    <div className="flex-1 p-3 space-y-3 bg-[#efeae2] bg-opacity-95 text-xs flex flex-col justify-start">
                      <div className="mx-auto rounded-md bg-[#ffeecd] px-2 py-0.5 text-[10px] text-slate-600 shadow-xs flex items-center gap-1">
                        <Lock className="h-2.5 w-2.5" /> End-to-end encrypted
                      </div>

                      {/* WhatsApp Message Bubble */}
                      <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xs space-y-2 max-w-[95%] border border-slate-100">
                        <p className="font-medium text-slate-800">
                          Hi Rohan! 💪
                        </p>
                        <p className="text-slate-700 leading-snug">
                          Your gym membership of <strong className="text-slate-900">₹1,499</strong> is due on <strong className="text-slate-900">5 Jan</strong>.
                        </p>
                        <p className="text-slate-700 leading-snug">
                          Pay now and keep your streak going! 🔥
                        </p>

                        {/* WhatsApp CTA Action Button */}
                        <div className="pt-1">
                          <div className="rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white p-2 text-center font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <LinkIcon className="h-3 w-3" />
                            <span>Pay ₹1,499</span>
                          </div>
                        </div>

                        <div className="text-[9px] text-right text-slate-400">
                          10:24 AM
                        </div>
                      </div>
                    </div>

                    {/* Bottom WhatsApp bar */}
                    <div className="bg-[#f0f2f5] p-2 flex items-center gap-2 border-t border-slate-200">
                      <div className="flex-1 rounded-full bg-white px-3 py-1 text-[11px] text-slate-400 border border-slate-200">
                        Message...
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Floating Stat Badge 1: Fee Collected */}
                <div className="absolute top-4 right-0 sm:right-4 z-30 rounded-xl bg-white border border-slate-200 p-3.5 shadow-xl animate-fade-in">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Fee Collected</span>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                        ₹3,74,250
                        <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1 py-0.5">
                          +12%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Floating Stat Badge 2: Active Members */}
                <div className="absolute top-28 right-2 sm:right-8 z-30 rounded-xl bg-white border border-slate-200 p-3 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Active Members</span>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900">
                        248
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Fit Gym Owner / Trainer Photo (Right Side - visible on sm+) */}
                <div className="hidden sm:block relative z-10 w-[240px] sm:w-[280px] h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 -ml-16 sm:-ml-12">
                  <Image
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
                    alt="Indian Gym Owner & Fitness Coach"
                    fill
                    className="object-cover object-top filter brightness-95"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <span>IronFit Gym Club</span>
                    </div>
                    <span className="text-[10px] text-slate-200">Bangalore · 240+ Active Members</span>
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
