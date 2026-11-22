'use client';

import React from 'react';
import { IndianRupee, Bell, CheckCircle, Send, Smartphone, Clock, ArrowUpRight } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="preview" className="relative py-20 border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-semibold text-zinc-300 mb-3">
            <span>LIVE INTERACTIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Everything You Need to Collect 100% of Dues
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            No complex ERP menus. A clean, mobile-first pulse that tells you what came in, what’s pending, 
            and automates follow-ups with one tap.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Revenue Pulse (5 Columns) */}
          <div className="lg:col-span-5 glass-card rounded-xl p-6 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  IronFit Gym · November 2026
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Sync
                </span>
              </div>

              {/* Big Metrics */}
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-zinc-900/90 border border-zinc-800 p-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>Collected This Month</span>
                    <span className="text-emerald-400 font-medium">+18% vs Oct</span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-1 text-3xl font-extrabold text-white">
                    <span className="text-zinc-500 text-xl">₹</span>1,45,000
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-md bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-md" style={{ width: '83%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-zinc-900/90 border border-red-500/20 p-3.5">
                    <span className="text-xs text-zinc-400">Pending / Overdue</span>
                    <div className="mt-1 text-xl font-bold text-red-400">₹28,500</div>
                    <span className="text-[11px] text-zinc-500">14 members due</span>
                  </div>

                  <div className="rounded-lg bg-zinc-900/90 border border-amber-500/20 p-3.5">
                    <span className="text-xs text-zinc-400">Expiring in 7 Days</span>
                    <div className="mt-1 text-xl font-bold text-amber-400">9 Members</div>
                    <span className="text-[11px] text-zinc-500">Auto-queue active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>Active Members: <strong className="text-white">218</strong></span>
              <span>New this Month: <strong className="text-emerald-400">+19</strong></span>
            </div>
          </div>

          {/* Card 2: Actionable Member List (7 Columns) */}
          <div className="lg:col-span-7 glass-card rounded-xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Actionable Renewal Queue
              </span>
              <span className="text-xs text-zinc-500">Sorted by urgency</span>
            </div>

            <div className="mt-4 space-y-3">
              {/* Overdue Member */}
              <div className="rounded-lg bg-zinc-900/90 border border-red-500/30 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 font-bold text-xs flex-shrink-0">
                    RS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">Rahul Sharma</span>
                      <span className="rounded-md bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 py-0.2 text-[10px] font-semibold">
                        Overdue 2 Days
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Monthly Plan (₹1,500) · Expired 20 Nov
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors border border-emerald-500 cursor-pointer">
                    <Send className="h-3 w-3" />
                    <span>Ping WhatsApp</span>
                  </button>
                  <button className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 transition-colors border border-zinc-700 cursor-pointer">
                    Mark Paid
                  </button>
                </div>
              </div>

              {/* Expiring Soon Member */}
              <div className="rounded-lg bg-zinc-900/90 border border-amber-500/30 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold text-xs flex-shrink-0">
                    AK
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">Arun Kumar</span>
                      <span className="rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.2 text-[10px] font-semibold">
                        Expires in 3 Days
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Quarterly Plan (₹4,200) · Auto-Reminder Scheduled
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Auto-Bot Ready
                  </span>
                </div>
              </div>

              {/* Active Member */}
              <div className="rounded-lg bg-zinc-900/50 border border-zinc-800 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 font-bold text-xs flex-shrink-0">
                    SN
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">Sneha Nair</span>
                      <span className="rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.2 text-[10px] font-semibold">
                        Active
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Annual VIP Plan (₹12,000) · Renews 14 Jan 2027
                    </div>
                  </div>
                </div>
                <div className="text-xs text-zinc-500 flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500" /> Paid via UPI
                </div>
              </div>
            </div>

            {/* Simulated WhatsApp Notification Card */}
            <div className="mt-4 rounded-lg bg-gradient-to-r from-emerald-950/40 to-zinc-900 border border-emerald-500/30 p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white font-bold text-xs">
                  WA
                </div>
                <div className="text-xs">
                  <strong className="text-emerald-300 block">WhatsApp Member Experience:</strong>
                  <span className="text-zinc-400">
                    &ldquo;Hi Rahul! Your IronFit plan expires in 2 days. Tap to renew via GPay/PhonePe: [upi.link]&rdquo;
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-emerald-400 flex-shrink-0 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
