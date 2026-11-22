'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Dumbbell, ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16a34a] text-white shadow-sm shadow-emerald-500/20 transition-transform group-hover:scale-105">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-slate-900">
                SetRenew
              </span>
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span>|</span>
                <span className="text-slate-600 font-semibold">For Gym Owners</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="transition-colors hover:text-slate-900">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-slate-900">
              How It Works
            </a>
            <a href="#pricing" className="transition-colors hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-slate-900">
              Testimonials
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-[#16a34a] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#15803d] active:scale-[0.98] border border-[#16a34a] cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
