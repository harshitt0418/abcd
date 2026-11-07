import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Truck, Factory, FileCheck, Award, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstitutionalStrengths() {
  const iconMap = [Award, ShieldCheck, Factory, FileCheck, Truck, RefreshCw];
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-ivory-200/40 border-b border-gold-600/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
            <span>Tender Execution & Manufacturing Standards</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight leading-tight">
            Institutional Capabilities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed font-light">
            Engineered to fulfill demanding public sector tender mandates, multi-ton bulk delivery commitments, and stringent RDSO/BIS compliance protocols across Indian Railways and municipal corporations.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.strengths.map((st, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={st.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.018 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-3xl bg-white border border-gold-600/20 transition-all duration-300 shadow-xs hover:shadow-luxe hover:border-gold-600/60 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle gold gradient sheen on hover */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gold-400/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-600/30 flex items-center justify-center text-gold-700 mb-6 origin-center"
                  >
                    <Icon className="w-6 h-6 text-gold-600" />
                  </motion.div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink-900 mb-3 font-medium">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                    {st.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ivory-200 flex items-center justify-between text-[11px] font-mono text-ink-400">
                  <span className="text-gold-700 tracking-wider">PILLAR {romanNumerals[idx]}</span>
                  <span className="text-ink-600 font-sans font-semibold uppercase tracking-wider text-[10px]">Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
