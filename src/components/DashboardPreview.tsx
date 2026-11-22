'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from './react-bits/CountUp';
import {
  TrendingUp,
  Send,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="preview" className="relative py-24 border-t border-slate-200 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>DAILY REVENUE PULSE</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built for Gym Owners. Not Accountants.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Know what was collected today, who is overdue, and send reminders in one tap.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 1. Real Gym Context Card with Photography (4 Cols) */}
          <div className="lg:col-span-4 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                alt="Strength Training Gym Equipment"
                fill
                className="object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md rounded-md px-2.5 py-1 text-[11px] font-semibold text-slate-800 border border-slate-200 shadow-xs">
                Live Gym Overview
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Zero Software Clutter</h3>
                <p className="text-xs text-slate-500">
                  Clean, fast, and mobile-first. Any trainer can pick it up in seconds.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Member Onboarding:</span>
                  <strong className="text-emerald-600 font-bold">10 Seconds</strong>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Hardware Needed:</span>
                  <strong className="text-blue-600 font-bold">₹0 (Phone / Tablet)</strong>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Renewal Collection:</span>
                  <strong className="text-indigo-600 font-bold">100% Automated</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Interactive Revenue & Renewal Live Cards (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Top Revenue Banner */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Live Monthly Pulse · November 2026
                  </span>
                  <div className="text-sm font-semibold text-slate-800">CrossFit & Strength Club</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Sync Active
                  </span>
                </div>
              </div>

              {/* Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                  <span className="text-xs text-slate-500 block mb-1">Collected This Month</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-baseline gap-1">
                    <span className="text-slate-400 text-lg">₹</span>
                    <CountUp to={145000} separator="," duration={1.4} trigger="load" />
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3.5 w-3.5" /> +18% vs October
                  </span>
                </div>

                <div className="rounded-lg bg-red-50/50 border border-red-200 p-4">
                  <span className="text-xs text-slate-500 block mb-1">Pending / Overdue</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-600 flex items-baseline gap-1">
                    <span className="text-slate-400 text-lg">₹</span>
                    <CountUp to={28500} separator="," duration={1.4} trigger="load" />
                  </div>
                  <span className="text-[11px] text-red-600 font-medium mt-1 block">
                    14 members need follow-up
                  </span>
                </div>

                <div className="rounded-lg bg-amber-50/50 border border-amber-200 p-4">
                  <span className="text-xs text-slate-500 block mb-1">Expiring in 7 Days</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">
                    <CountUp to={9} duration={1} trigger="load" /> Members
                  </div>
                  <span className="text-[11px] text-amber-700 font-medium mt-1 block">
                    Auto WhatsApp queued
                  </span>
                </div>
              </div>
            </div>

            {/* Actionable Member Cards */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Priority Action List
                </span>
                <span className="text-xs text-slate-500">Sorted by payment urgency</span>
              </div>

              <div className="space-y-3 mt-4">
                {/* Member 1: Overdue */}
                <div className="rounded-lg bg-white border border-red-200 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-red-300 transition-colors shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-100 border border-red-200 text-red-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      RS
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900 text-sm">Rahul Sharma</span>
                        <span className="rounded-md bg-red-100 border border-red-200 px-1.5 py-0.5 text-[10px] font-bold text-red-700 uppercase">
                          Overdue 2 Days
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 block">Monthly Gym Plan · ₹1,500</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors border border-emerald-600 cursor-pointer shadow-sm">
                      <Send className="h-3 w-3" />
                      <span>Ping on WhatsApp</span>
                    </button>
                    <button className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200 cursor-pointer">
                      Mark Paid
                    </button>
                  </div>
                </div>

                {/* Member 2: Due Soon */}
                <div className="rounded-lg bg-white border border-amber-200 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-300 transition-colors shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-100 border border-amber-200 text-amber-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      AK
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900 text-sm">Arun Kumar</span>
                        <span className="rounded-md bg-amber-100 border border-amber-200 px-1.5 py-0.5 text-[10px] font-bold text-amber-800 uppercase">
                          Expires in 3 Days
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 block">Quarterly Plan · ₹4,200</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-amber-600" />
                    <span>Auto-Reminder Scheduled for 09:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
