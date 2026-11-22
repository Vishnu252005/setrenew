'use client';

import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  TrendingUp,
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  CalendarCheck,
  Settings,
} from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function DashboardPreview() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="how-it-works" className="relative pt-16 pb-20 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Realistic Dashboard Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden flex flex-col sm:flex-row min-h-[420px]">
                
                {/* Dark Gym Sidebar */}
                <div className="w-full sm:w-48 bg-[#0b1320] text-slate-300 p-4 flex flex-col justify-between flex-shrink-0 border-b sm:border-b-0 sm:border-r border-slate-800">
                  <div className="space-y-4">
                    {/* Brand in Sidebar */}
                    <div className="flex items-center gap-2 px-2 pb-2.5 border-b border-slate-800">
                      <div className="h-6 w-6 rounded bg-[#16a34a] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        SR
                      </div>
                      <span className="font-extrabold text-white text-sm tracking-tight">SetRenew</span>
                    </div>

                    {/* Nav Items */}
                    <div className="space-y-1 text-xs font-medium">
                      <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-[#16a34a] text-white font-semibold shadow-xs">
                        <LayoutDashboard className="h-3.5 w-3.5" />
                        <span>Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <Users className="h-3.5 w-3.5" />
                        <span>Members</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>Fee Collections</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <BarChart3 className="h-3.5 w-3.5" />
                        <span>Revenue</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <CalendarCheck className="h-3.5 w-3.5" />
                        <span>Plans</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <Settings className="h-3.5 w-3.5" />
                        <span>Settings</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[10px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Cloud Synced</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-5 sm:p-6 bg-slate-50/60 flex flex-col justify-between">
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm">Gym Overview</h4>
                    <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-xs">
                      <span>Jan 2026</span>
                      <span className="text-[10px] text-slate-400">▼</span>
                    </div>
                  </div>

                  {/* 4 Stat Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5">
                    <div className="rounded-xl bg-white border border-slate-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Total Revenue</span>
                      <div className="text-sm font-extrabold text-slate-900 mt-0.5">₹3,74,250</div>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded mt-1 inline-block">
                        +12%
                      </span>
                    </div>

                    <div className="rounded-xl bg-white border border-slate-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Collected</span>
                      <div className="text-sm font-extrabold text-emerald-700 mt-0.5">₹3,21,000</div>
                      <span className="text-[9px] font-medium text-slate-400 mt-1 inline-block">86% paid</span>
                    </div>

                    <div className="rounded-xl bg-white border border-red-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Pending</span>
                      <div className="text-sm font-extrabold text-red-600 mt-0.5">₹53,250</div>
                      <span className="text-[9px] font-medium text-red-500 mt-1 inline-block">14 due</span>
                    </div>

                    <div className="rounded-xl bg-white border border-slate-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Active Members</span>
                      <div className="text-sm font-extrabold text-slate-900 mt-0.5">248</div>
                      <span className="text-[9px] font-medium text-slate-400 mt-1 inline-block">+18 new</span>
                    </div>
                  </div>

                  {/* Revenue Trend Chart Card */}
                  <div className="rounded-xl bg-white border border-slate-200 p-4 mt-3.5 shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">Revenue Trend</span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" /> +12% vs last month
                      </span>
                    </div>

                    {/* SVG Chart */}
                    <div className="relative h-28 w-full mt-2">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Background Area */}
                        <path
                          d="M 10 65 Q 60 58 110 52 T 210 32 T 310 12 L 310 80 L 10 80 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Stroke Line */}
                        <path
                          d="M 10 65 Q 60 58 110 52 T 210 32 T 310 12"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Final Data Dot */}
                        <circle cx="310" cy="12" r="4" fill="#16a34a" />
                      </svg>
                      
                      {/* Months Axis */}
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1 px-1">
                        <span>Aug</span>
                        <span>Sep</span>
                        <span>Oct</span>
                        <span>Nov</span>
                        <span>Dec</span>
                        <span className="font-bold text-slate-700">Jan</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Copy & Checklist */}
            <div className="lg:col-span-5 flex flex-col text-left relative">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.15]">
                Run Your Gym on <br />
                <span className="relative inline-block text-slate-900">
                  Auto-Renew
                  <span className="absolute left-0 right-0 -bottom-1 h-3 bg-emerald-200 -z-10 rounded-sm transform -rotate-1 opacity-70" />
                </span>{' '}
                Mode
              </h2>

              {/* 3 Clean Benefit Rows */}
              <div className="mt-7 space-y-3">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#16a34a] flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">More on-time payments</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Members pay via WhatsApp in 1 tap without front desk delays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#16a34a] flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Better cash flow & revenue visibility</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Instant live pulse of fees collected vs pending dues this month.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#16a34a] flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Less time on follow-ups</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      End awkward fee conversations forever with automated polite nudges.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition-all active:scale-[0.98] border border-emerald-600 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  30 days free · Setup in 2 mins
                </span>
              </div>

              {/* Gym Rack Line-Art Illustration in Bottom Right Corner */}
              <div className="absolute right-0 -bottom-6 opacity-25 pointer-events-none hidden xl:block">
                <svg width="150" height="110" viewBox="0 0 180 140" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="20" y="50" width="24" height="60" rx="4" />
                  <path d="M26 50 V40 H38 V50" />
                  <path d="M24 68 H40" />
                  <line x1="60" y1="110" x2="160" y2="110" strokeWidth="2.5" />
                  <line x1="75" y1="110" x2="75" y2="40" strokeWidth="2" />
                  <line x1="145" y1="110" x2="145" y2="40" strokeWidth="2" />
                  <rect x="70" y="35" width="80" height="8" rx="2" fill="#16a34a" fillOpacity="0.1" />
                  <rect x="62" y="31" width="10" height="16" rx="2" />
                  <rect x="148" y="31" width="10" height="16" rx="2" />
                  <rect x="70" y="70" width="80" height="8" rx="2" fill="#16a34a" fillOpacity="0.1" />
                  <rect x="60" y="65" width="12" height="18" rx="2" />
                  <rect x="148" y="65" width="12" height="18" rx="2" />
                </svg>
              </div>

            </div>

          </div>
        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
