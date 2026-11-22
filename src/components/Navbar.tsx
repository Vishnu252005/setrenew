'use client';

import React from 'react';
import Link from 'next/link';
import { Dumbbell, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('waitlist-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/20 transition-transform group-hover:scale-105">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
              SetRenew
              <span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-200">
                VIP Early Access
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#preview" className="transition-colors hover:text-slate-900">
            Dashboard
          </a>
          <a href="#calculator" className="transition-colors hover:text-slate-900">
            ROI Calculator
          </a>
          <a href="#features" className="transition-colors hover:text-slate-900">
            How it Works
          </a>
          <a href="#comparison" className="transition-colors hover:text-slate-900">
            Why SetRenew
          </a>
          <a href="#faq" className="transition-colors hover:text-slate-900">
            FAQ
          </a>
        </nav>

        {/* CTA Button (Strictly rectangular rounded-lg, 0 oval) */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToWaitlist}
            className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.98] border border-blue-600 cursor-pointer"
          >
            <span>Get 30 Days Free</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
