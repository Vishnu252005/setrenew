'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dumbbell, ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  // If page loads with a hash (e.g. /#pricing), smooth scroll to it and clean the URL
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          // Clean the ugly hash from address bar
          window.history.replaceState(null, '', window.location.pathname);
        }, 150);
      }
    }
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Keep URL clean without appending #hash
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

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

          {/* Desktop Nav Links (Clean smooth scrolling with NO URL hashes) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#features"
              onClick={(e) => handleScrollTo(e, 'features')}
              className="transition-colors hover:text-slate-900 cursor-pointer"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScrollTo(e, 'how-it-works')}
              className="transition-colors hover:text-slate-900 cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, 'pricing')}
              className="transition-colors hover:text-slate-900 cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScrollTo(e, 'faq')}
              className="transition-colors hover:text-slate-900 cursor-pointer"
            >
              FAQs
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

      {/* Modal */}
      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
