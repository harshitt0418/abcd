import React from 'react';
import { Calendar, Award, MapPin, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProofPoints() {
  const points = [
    {
      metric: "1984",
      label: "Foundation Year",
      detail: "More than four decades of continuous precision manufacturing and institutional tender fulfillment.",
      icon: Calendar,
      tag: "ESTABLISHED"
    },
    {
      metric: "40+",
      label: "Years Public Experience",
      detail: "Specialized in government tender execution, GeM compliance, and nationwide institutional supply.",
      icon: Award,
      tag: "PROVEN TRACK RECORD"
    },
    {
      metric: "02 Hubs",
      label: "Delhi & Gorakhpur",
      detail: "Dedicated manufacturing unit in New Delhi with registered corporate headquarters in Gorakhpur (U.P.).",
      icon: Factory,
      tag: "MANUFACTURING INFRASTRUCTURE"
    },
    {
      metric: "SS 304",
      label: "RDSO Drawing Approved",
      detail: "Fabricated strictly in accordance with Indian Railways RDSO specifications for railway coaches & platforms.",
      icon: MapPin,
      tag: "INDIAN RAILWAYS STANDARD"
    },
  ];

  return (
    <section className="py-16 bg-ivory-200/60 border-b border-gold-600/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gold-600/20">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`flex flex-col text-left transition-transform ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-luxe text-gold-700">
                    {pt.tag}
                  </span>
                </div>
                
                {/* Large Editorial Serif Metric */}
                <div className="font-serif font-medium text-4xl sm:text-5xl text-ink-900 tracking-tight">
                  {pt.metric}
                </div>
                
                <h4 className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-700">
                  {pt.label}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                  {pt.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
