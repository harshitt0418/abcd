import React from 'react';
import { Calendar, Award, MapPin, Factory } from 'lucide-react';

export default function ProofPoints() {
  const points = [
    {
      metric: "1984",
      label: "Year Established",
      detail: "More than four decades of dedicated manufacturing and institutional supply experience.",
      icon: Calendar,
    },
    {
      metric: "40+",
      label: "Years of Experience",
      detail: "Specialized in public sector tender handling, compliance, and bulk distribution.",
      icon: Award,
    },
    {
      metric: "2 Hubs",
      label: "Delhi & Gorakhpur",
      detail: "Dedicated manufacturing facility in Delhi with corporate headquarters in Gorakhpur (U.P.).",
      icon: Factory,
    },
    {
      metric: "Grade 304",
      label: "RDSO Standards",
      detail: "Approved drawings and heavy-gauge stainless steel for Indian Railways installations.",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.label}
                className={`flex flex-col text-left ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2 text-sac-700">
                  <Icon className="w-4 h-4 text-sac-700" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                    {pt.label}
                  </span>
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  {pt.metric}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pt.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
