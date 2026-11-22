'use client';

import React, { useState } from 'react';
import { Check, X, ArrowRight, AlertCircle, ShieldAlert } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function Comparison() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="py-24 border-t border-slate-200 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-[#16a34a] mb-3 shadow-xs">
              <span>THE HONEST COMPARISON</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Cut the Clutter. <br className="hidden sm:block" />
              Collect 100% of Your Dues.
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              See why Indian gym owners are ditching expensive biometric turnstiles and manual Excel registers for SetRenew.
            </p>
          </div>

          {/* 3 Comparison Bento Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* 1. Legacy Gym ERPs Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between opacity-95 hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Outdated & Heavy
                  </span>
                  <ShieldAlert className="h-4 w-4 text-slate-400" />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900">Legacy Gym Software</h3>
                <p className="text-xs text-slate-500 mt-1">GymKhata, FitnessForce, eSSL Biometrics</p>

                <div className="mt-5 pb-5 border-b border-slate-100">
                  <div className="text-2xl font-black text-slate-800">
                    ₹1,500 – ₹3,000 <span className="text-xs font-normal text-slate-500">/ month</span>
                  </div>
                  <span className="text-[11px] text-red-600 font-semibold block mt-1">
                    + ₹25,000 to ₹50,000 upfront hardware cost
                  </span>
                </div>

                {/* Feature Crosses */}
                <div className="mt-6 space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Only SMS or complex scripts that members ignore</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>No direct 1-tap UPI payment buttons in reminders</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Expensive fingerprint machines that stop working</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Desk check-in lines cause morning rush crowd</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Long 30-field forms take 10 minutes per member</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Complicated software that needs staff training</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center font-medium">
                High setup friction & expensive maintenance
              </div>
            </div>

            {/* 2. SetRenew Card (The Clear Winner - Highlighted) */}
            <div className="relative rounded-2xl border-2 border-[#16a34a] bg-white p-7 sm:p-8 shadow-xl shadow-emerald-500/10 flex flex-col justify-between lg:-translate-y-2">
              
              {/* Top Banner Tag */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-[#16a34a] border border-emerald-500 px-4 py-0.5 text-[11px] font-bold text-white shadow-md uppercase tracking-wide">
                <span>Recommended</span>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900 mt-2">SetRenew</h3>
                <p className="text-xs text-slate-600 mt-1">100% WhatsApp Native Fee Recovery Tool</p>

                <div className="mt-5 pb-5 border-b border-emerald-100">
                  <div className="text-4xl font-black text-slate-900 flex items-baseline gap-1">
                    <span className="text-slate-400 text-2xl font-normal">₹</span>
                    499
                    <span className="text-xs font-semibold text-slate-500">/ month flat</span>
                  </div>
                  <span className="text-xs font-semibold text-[#16a34a] block mt-1">
                    First 30 Days 100% Free · Unlimited Members
                  </span>
                </div>

                {/* Feature Checks */}
                <div className="mt-6 space-y-3.5 text-xs text-slate-800 font-medium">
                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span><strong>Automated WhatsApp Reminders</strong> sent directly to members</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span><strong>1-Tap UPI Payment Links</strong> (GPay, PhonePe, Paytm directly to your bank)</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span><strong>₹0 Hardware</strong> — No biometric machines needed</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span><strong>Members Walk in Freely</strong> — No daily desk queues</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span><strong>10-Second Member Setup</strong> right from your mobile</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span><strong>Works on Any Device</strong> — phone, tablet, and computer</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-5 py-3 text-sm font-bold text-white shadow-md transition-all active:scale-[0.99] border border-emerald-600 cursor-pointer"
                >
                  <span>Start Free Trial (30 Days Free)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-[10px] text-slate-400 block text-center mt-2">
                  No credit card required. Cancel anytime.
                </span>
              </div>
            </div>

            {/* 3. Excel & Paper Registers Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between opacity-95 hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-md bg-amber-50 border border-amber-200 px-2.5 py-1 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                    High Revenue Leakage
                  </span>
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900">Excel & Registers</h3>
                <p className="text-xs text-slate-500 mt-1">Manual Notebooks & WhatsApp Groups</p>

                <div className="mt-5 pb-5 border-b border-slate-100">
                  <div className="text-2xl font-black text-slate-800">
                    ₹0 Upfront <span className="text-xs font-normal text-slate-500">cost</span>
                  </div>
                  <span className="text-[11px] text-red-600 font-semibold block mt-1">
                    But leaks ₹35,000 to ₹50,000 every month in forgotten dues
                  </span>
                </div>

                {/* Feature Crosses */}
                <div className="mt-6 space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>100% manual phone calls and repetitive typing</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>No automated WhatsApp reminders on expiry day</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Awkward front desk confrontations: &ldquo;Bhai, fees pending hai&rdquo;</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Members keep lifting for weeks past expiry unnoticed</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Zero cloud backup (data lost if phone breaks or notebook is lost)</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>Silent member churn because nobody followed up on time</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center font-medium">
                High stress & awkward confrontations
              </div>
            </div>

          </div>

          {/* Quick FAQ Callout Strip */}
          <div className="mt-14 max-w-4xl mx-auto rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Have an existing member spreadsheet?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Import your members from Excel or CSV in under 60 seconds with zero data entry.</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Import Your Gym Free →
            </button>
          </div>

        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
