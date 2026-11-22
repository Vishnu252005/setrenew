import React from 'react';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 py-12 text-slate-600 text-xs font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main 5-Column Grid for SEO Crawlability */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-200">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#16a34a] text-white shadow-sm">
                <Dumbbell className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-slate-900">SetRenew</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              100% WhatsApp-native fee recovery and automated gym dues collection tool for Indian fitness clubs.
            </p>
            <div className="text-[11px] text-slate-400">
              Built for Indian Gyms & Fitness Clubs
            </div>
          </div>

          {/* Features Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Features
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features/whatsapp-fee-reminders" className="hover:text-emerald-700 transition-colors">
                  WhatsApp Reminders
                </Link>
              </li>
              <li>
                <Link href="/features/upi-payment-collection" className="hover:text-emerald-700 transition-colors">
                  Direct UPI Collection
                </Link>
              </li>
              <li>
                <Link href="/features/gym-membership-management" className="hover:text-emerald-700 transition-colors">
                  Member Management
                </Link>
              </li>
              <li>
                <Link href="/features/zero-hardware-gym-system" className="hover:text-emerald-700 transition-colors">
                  Zero Hardware System
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Comparisons
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/vs/gymkhata" className="hover:text-emerald-700 transition-colors">
                  vs GymKhata
                </Link>
              </li>
              <li>
                <Link href="/vs/fitnessforce" className="hover:text-emerald-700 transition-colors">
                  vs FitnessForce
                </Link>
              </li>
              <li>
                <Link href="/vs/okfit" className="hover:text-emerald-700 transition-colors">
                  vs OkFit
                </Link>
              </li>
              <li>
                <Link href="/vs/biometric-turnstiles" className="hover:text-emerald-700 transition-colors">
                  vs Biometrics
                </Link>
              </li>
              <li>
                <Link href="/vs/excel-registers" className="hover:text-emerald-700 transition-colors">
                  vs Excel Registers
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Gyms in India
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cities/delhi-ncr" className="hover:text-emerald-700 transition-colors">
                  Delhi NCR Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/mumbai" className="hover:text-emerald-700 transition-colors">
                  Mumbai Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/bangalore" className="hover:text-emerald-700 transition-colors">
                  Bangalore Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/hyderabad" className="hover:text-emerald-700 transition-colors">
                  Hyderabad Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/pune" className="hover:text-emerald-700 transition-colors">
                  Pune Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/chennai" className="hover:text-emerald-700 transition-colors">
                  Chennai Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/kerala" className="hover:text-emerald-700 transition-colors">
                  Kerala Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/ahmedabad" className="hover:text-emerald-700 transition-colors">
                  Ahmedabad Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/kolkata" className="hover:text-emerald-700 transition-colors">
                  Kolkata Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/jaipur" className="hover:text-emerald-700 transition-colors">
                  Jaipur Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/chandigarh" className="hover:text-emerald-700 transition-colors">
                  Chandigarh Gyms
                </Link>
              </li>
              <li>
                <Link href="/cities/lucknow" className="hover:text-emerald-700 transition-colors">
                  Lucknow Gyms
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-emerald-700 transition-colors">
                  Interactive Demo
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-emerald-700 transition-colors">
                  Pricing (Flat ₹499)
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-700 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 SetRenew. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">
              Terms
            </Link>
            <span>·</span>
            <a href="mailto:support@vihaya.app" className="hover:text-slate-800 transition-colors">
              support@vihaya.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
