import React from 'react';
import { Calendar, Award, MapPin, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

export default function ProofPoints() {
  const points = [
    {
      type: 'counter',
      from: 1950,
      to: 1984,
      suffix: '',
      label: 'Foundation Year',
      detail: 'More than four decades of continuous precision manufacturing and institutional tender fulfillment.',
      icon: Calendar,
      tag: 'ESTABLISHED',
    },
    {
      type: 'counter',
      from: 0,
      to: 40,
      suffix: '+',
      label: 'Years Public Experience',
      detail: 'Specialized in government tender execution, GeM compliance, and nationwide institutional supply.',
      icon: Award,
      tag: 'PROVEN TRACK RECORD',
    },
    {
      type: 'counter',
      from: 0,
      to: 2,
      prefix: '0',
      suffix: ' Hubs',
      label: 'Delhi & Gorakhpur',
      detail: 'Dedicated manufacturing unit in New Delhi with registered corporate headquarters in Gorakhpur (U.P.).',
      icon: Factory,
      tag: 'MANUFACTURING INFRASTRUCTURE',
    },
    {
      type: 'text',
      value: 'SS 304',
      label: 'RDSO Drawing Approved',
      detail: 'Fabricated strictly in accordance with Indian Railways RDSO specifications for railway coaches & platforms.',
      icon: MapPin,
      tag: 'INDIAN RAILWAYS STANDARD',
    },
  ];

  return (
    <section id="proof-points" className="py-20 bg-ivory-200/50 border-b border-gold-600/20 overflow-hidden relative">
      {/* Decorative top gold hairline with animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent origin-center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gold-600/20">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`flex flex-col text-left transition-all p-4 rounded-2xl group hover:bg-white/60 relative ${
                  idx > 0 ? 'sm:pl-6 lg:pl-8' : ''
                } ${idx > 0 ? 'pt-6 sm:pt-4' : ''}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    className="p-1 rounded-md bg-gold-500/10 text-gold-700"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.div>
                  <span className="text-[10px] font-bold uppercase tracking-luxe text-gold-700">
                    {pt.tag}
                  </span>
                </div>

                {/* Large Editorial Serif Metric with Live Animated Counter */}
                <motion.div
                  initial={{ scale: 0.85 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: idx * 0.12 + 0.1 }}
                  className="font-serif font-medium text-4xl sm:text-5xl text-ink-900 tracking-tight group-hover:text-gold-700 transition-colors"
                >
                  {pt.type === 'counter' ? (
                    <AnimatedCounter
                      from={pt.from}
                      to={pt.to}
                      prefix={pt.prefix || ''}
                      suffix={pt.suffix || ''}
                      duration={1.8}
                    />
                  ) : (
                    <span className="relative inline-block bg-gradient-to-r from-ink-900 via-gold-700 to-ink-900 bg-clip-text text-transparent group-hover:from-gold-700 group-hover:to-gold-500 transition-all">
                      {pt.value}
                    </span>
                  )}
                </motion.div>

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
