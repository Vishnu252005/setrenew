import React from 'react';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-zinc-400 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Dumbbell className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold text-white">SetRenew</span>
          <span className="text-zinc-500">· Automated Gym Dues & WhatsApp Reminders</span>
        </div>

        <div className="flex items-center gap-6 text-zinc-400">
          <a href="#preview" className="hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="#calculator" className="hover:text-white transition-colors">
            Calculator
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        <div className="text-zinc-500">
          &copy; 2026 SetRenew. Built for Indian Gyms.
        </div>
      </div>
    </footer>
  );
}
