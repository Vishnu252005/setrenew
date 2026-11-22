import React from 'react';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 py-12 text-slate-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#16a34a] text-white shadow-sm">
            <Dumbbell className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold text-slate-900">SetRenew</span>
          <span className="text-slate-500">· Automated Gym Dues & WhatsApp Reminders</span>
        </div>

        <div className="flex items-center gap-6 text-slate-600 font-medium">
          <a href="#preview" className="hover:text-slate-900 transition-colors">
            Dashboard
          </a>
          <a href="#calculator" className="hover:text-slate-900 transition-colors">
            Calculator
          </a>
          <a href="#features" className="hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </div>

        <div className="text-slate-500">
          &copy; 2026 SetRenew. Built for Indian Gyms.
        </div>
      </div>
    </footer>
  );
}
