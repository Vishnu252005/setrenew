'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  const comparisons = [
    {
      feature: 'Automated WhatsApp Cloud Reminders',
      setrenew: true,
      legacy: 'Only SMS or Unofficial Scripts',
      excel: false,
    },
    {
      feature: 'Direct 1-Tap UPI Payment Links (GPay/PhonePe)',
      setrenew: true,
      legacy: false,
      excel: false,
    },
    {
      feature: 'Requires Expensive Biometric Hardware',
      setrenew: 'No (Zero Hardware Required)',
      legacy: 'Yes (₹25k–₹50k eSSL / Turnstiles)',
      excel: 'No',
    },
    {
      feature: 'Member Desk Scanning Friction Everyday',
      setrenew: 'No (Members walk in freely)',
      legacy: 'Yes (Queues at desk)',
      excel: 'No',
    },
    {
      feature: 'Time Required to Onboard a Member',
      setrenew: '10 Seconds',
      legacy: '5–10 Minutes',
      excel: '2–3 Minutes',
    },
    {
      feature: 'Cloud Sync Across Phone, Tablet & Desk',
      setrenew: true,
      legacy: 'Desktop Only / Clunky App',
      excel: 'No (Local File)',
    },
    {
      feature: 'Monthly Cost',
      setrenew: 'Flat ₹499 / month',
      legacy: '₹1,500 – ₹3,000 / month',
      excel: 'Free (but ₹45,000 lost in leakage)',
    },
  ];

  return (
    <section id="comparison" className="py-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 mb-3 shadow-xs">
            <span>COMPARISON</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Gyms Choose SetRenew
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            How SetRenew compares to legacy software and manual spreadsheets.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase tracking-wider">
              <tr>
                <th className="py-4 px-6">Capability</th>
                <th className="py-4 px-6 text-emerald-800 bg-emerald-50/70 border-x border-emerald-200">
                  SetRenew (Our App)
                </th>
                <th className="py-4 px-6">Legacy Gym ERPs</th>
                <th className="py-4 px-6">Excel & Paper Registers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>

                  {/* SetRenew Column */}
                  <td className="py-4 px-6 font-bold text-slate-900 bg-emerald-50/30 border-x border-emerald-200">
                    {typeof row.setrenew === 'boolean' ? (
                      row.setrenew ? (
                        <div className="flex items-center gap-1.5 text-[#16a34a] font-bold">
                          <Check className="h-4 w-4 stroke-[3]" /> <span>Yes</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <X className="h-4 w-4" /> <span>No</span>
                        </div>
                      )
                    ) : (
                      <span className="text-[#16a34a] font-bold">{row.setrenew}</span>
                    )}
                  </td>

                  {/* Legacy ERPs */}
                  <td className="py-4 px-6 text-slate-600">
                    {typeof row.legacy === 'boolean' ? (
                      row.legacy ? (
                        <Check className="h-4 w-4 text-slate-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )
                    ) : (
                      <span>{row.legacy}</span>
                    )}
                  </td>

                  {/* Excel */}
                  <td className="py-4 px-6 text-slate-600">
                    {typeof row.excel === 'boolean' ? (
                      row.excel ? (
                        <Check className="h-4 w-4 text-slate-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )
                    ) : (
                      <span>{row.excel}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
