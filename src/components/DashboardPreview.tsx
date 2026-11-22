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
  Calendar,
} from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function DashboardPreview() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="how-it-works" className="relative py-24 bg-slate-50 border-t border-slate-200">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Realistic Dashboard Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden flex flex-col sm:flex-row min-h-[420px]">
                
                {/* Dark Gym Sidebar */}
                <div className="w-full sm:w-48 bg-[#151f28] text-slate-300 p-4 flex flex-col justify-between flex-shrink-0 border-b sm:border-b-0 sm:border-r border-slate-800">
                  <div className="space-y-4">
                    {/* Brand in Sidebar */}
                    <div className="flex items-center gap-2 px-2 pb-2 border-b border-slate-800">
                      <div className="h-6 w-6 rounded bg-[#16a34a] text-white flex items-center justify-center font-bold text-xs">
                        SR
                      </div>
                      <span className="font-extrabold text-white text-sm">SetRenew</span>
                    </div>

                    {/* Nav Items */}
                    <div className="space-y-1 text-xs font-medium">
                      <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-[#16a34a] text-white font-semibold">
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

                  <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500">
                    Live Cloud Sync Active
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-5 sm:p-6 bg-slate-50 flex flex-col justify-between">
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm">Dashboard</h4>
                    <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-xs">
                      <span>Jan 2026</span>
                      <span className="text-[10px]">▼</span>
                    </div>
                  </div>

                  {/* 4 Stat Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5">
                    <div className="rounded-lg bg-white border border-slate-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Total Revenue</span>
                      <div className="text-sm font-extrabold text-slate-900 mt-0.5">₹3,74,250</div>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded mt-1 inline-block">
                        +12%
                      </span>
                    </div>

                    <div className="rounded-lg bg-white border border-slate-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Collected</span>
                      <div className="text-sm font-extrabold text-emerald-700 mt-0.5">₹3,21,000</div>
                    </div>

                    <div className="rounded-lg bg-white border border-red-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Pending</span>
                      <div className="text-sm font-extrabold text-red-600 mt-0.5">₹53,250</div>
                    </div>

                    <div className="rounded-lg bg-white border border-slate-200 p-2.5 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium block">Active Members</span>
                      <div className="text-sm font-extrabold text-slate-900 mt-0.5">248</div>
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
                            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.25" />
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
                        <circle cx="310" cy="12" r="4" fill="#16a34a" className="animate-pulse" />
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
            <div className="lg:col-span-5 flex flex-col text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Run Your Gym on{' '}
                <span className="relative inline-block text-slate-900">
                  Auto-Renew
                  <span className="absolute left-0 right-0 -bottom-1 h-2 bg-[#86efac] -z-10 rounded-sm transform -rotate-1 opacity-80" />
                </span>{' '}
                Mode
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#16a34a] flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">More on-time payments</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Members pay via WhatsApp in 1 tap without front desk delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#16a34a] flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Better cash flow & revenue visibility</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Instant live pulse of fees collected vs pending dues this month.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#16a34a] flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Less time on follow-ups, more time for your gym</h3>
                    <p className="text-xs text-slate-500 mt-0.5">End awkward fee conversations forever with automated polite nudges.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all active:scale-[0.98] border border-emerald-600 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
