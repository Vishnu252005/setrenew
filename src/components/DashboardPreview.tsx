'use client';

import React from 'react';
import Image from 'next/image';
import {
  IndianRupee,
  CheckCircle,
  Send,
  Clock,
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="preview" className="relative py-24 border-t border-zinc-800/80 bg-zinc-950 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-3.5 py-1 text-xs font-semibold text-zinc-300 mb-3 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>THE 10-SECOND REVENUE PULSE</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl uppercase">
            Built for Gym Owners. Not Accountants.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Forget 50-field ERP dropdowns. You get one clean mobile pulse that tells you what came in today, 
            what’s pending, and recovers overdue dues on WhatsApp with a single tap.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 1. Real Gym Context Card with Photography (4 Cols) */}
          <div className="lg:col-span-4 rounded-xl border border-zinc-800 bg-zinc-900/80 overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                alt="Strength Training Gym Equipment"
                fill
                className="object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
              <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md rounded-md px-2.5 py-1 text-[11px] font-semibold text-white border border-zinc-700">
                Live Gym Overview
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Software Fatigue</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Traditional gym software takes 2 weeks to learn and forces your trainers to become computer operators. 
                  SetRenew is so simple any trainer can add a new member in 10 seconds.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">Member Onboarding:</span>
                  <strong className="text-emerald-400 font-semibold">10 Seconds</strong>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">Hardware Needed:</span>
                  <strong className="text-blue-400 font-semibold">₹0 (Phone / Tablet)</strong>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">Renewal Collection:</span>
                  <strong className="text-purple-400 font-semibold">100% Automated</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Interactive Revenue & Renewal Live Cards (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Top Revenue Banner */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Live Monthly Pulse · November 2026
                  </span>
                  <div className="text-sm text-zinc-400">CrossFit & Strength Club</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Sync Active
                  </span>
                </div>
              </div>

              {/* Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                <div className="rounded-lg bg-zinc-950/80 border border-zinc-800 p-4">
                  <span className="text-xs text-zinc-400 block mb-1">Collected This Month</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-baseline gap-1">
                    <span className="text-zinc-500 text-lg">₹</span>1,45,000
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3.5 w-3.5" /> +18% vs October
                  </span>
                </div>

                <div className="rounded-lg bg-zinc-950/80 border border-red-500/20 p-4">
                  <span className="text-xs text-zinc-400 block mb-1">Pending / Overdue</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-400 flex items-baseline gap-1">
                    <span className="text-zinc-500 text-lg">₹</span>28,500
                  </div>
                  <span className="text-[11px] text-red-400/80 font-medium mt-1 block">
                    14 members need follow-up
                  </span>
                </div>

                <div className="rounded-lg bg-zinc-950/80 border border-amber-500/20 p-4">
                  <span className="text-xs text-zinc-400 block mb-1">Expiring in 7 Days</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                    9 Members
                  </div>
                  <span className="text-[11px] text-amber-400/80 font-medium mt-1 block">
                    Auto WhatsApp queued
                  </span>
                </div>
              </div>
            </div>

            {/* Actionable Member Cards */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-xl flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Priority Action List
                </span>
                <span className="text-xs text-zinc-500">Sorted by payment urgency</span>
              </div>

              <div className="space-y-3 mt-4">
                {/* Member 1: Overdue */}
                <div className="rounded-lg bg-zinc-950/90 border border-red-500/30 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-red-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      RS
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">Rahul Sharma</span>
                        <span className="rounded-md bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 text-[10px] font-bold text-red-400 uppercase">
                          Overdue 2 Days
                        </span>
                      </div>
                      <span className="text-xs text-zinc-400 block">Monthly Gym Plan · ₹1,500</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors border border-emerald-500 cursor-pointer shadow-sm">
                      <Send className="h-3 w-3" />
                      <span>Ping on WhatsApp</span>
                    </button>
                    <button className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 transition-colors border border-zinc-700 cursor-pointer">
                      Mark Paid
                    </button>
                  </div>
                </div>

                {/* Member 2: Due Soon */}
                <div className="rounded-lg bg-zinc-950/90 border border-amber-500/30 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      AK
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">Arun Kumar</span>
                        <span className="rounded-md bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 text-[10px] font-bold text-amber-400 uppercase">
                          Expires in 3 Days
                        </span>
                      </div>
                      <span className="text-xs text-zinc-400 block">Quarterly Plan · ₹4,200</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Clock className="h-3.5 w-3.5 text-amber-400" />
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
