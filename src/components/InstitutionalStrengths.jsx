import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Truck, Factory, FileCheck, Award, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstitutionalStrengths() {
  const iconMap = [Award, ShieldCheck, Factory, FileCheck, Truck, RefreshCw];

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sac-800 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sac-700"></span>
            <span>Brochure Verified Competencies</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Institutional Supply & Tender Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Equipped to satisfy stringent public sector procurement guidelines, bulk quantity schedules, and multi-location deliveries across Indian Railways and municipal bodies.
          </p>
        </motion.div>

        {/* Strengths Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.strengths.map((st, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={st.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, borderColor: '#94a3b8' }}
                className="p-6 sm:p-7 rounded-2xl bg-[#fafbfb] border border-slate-200/80 transition-all duration-300 shadow-2xs hover:shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="w-10 h-10 rounded-xl bg-sac-100/70 border border-sac-200 flex items-center justify-center text-sac-800 mb-5 origin-center"
                  >
                    <Icon className="w-5 h-5 text-sac-700" />
                  </motion.div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2.5">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>CAPABILITY 0{idx + 1}</span>
                  <span className="text-sac-700 font-sans font-semibold">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
