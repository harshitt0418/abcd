import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Building2, Compass, Target, ArrowRight, ShieldCheck, Factory, Users, Award, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import sacLogo from '../assets/sac_logo_circle.png';

const MILESTONES = [
  {
    year: "1984",
    title: "Company Inception",
    description: "Founded in Gorakhpur, Uttar Pradesh with a commitment to high-durability hygiene and agro solutions."
  },
  {
    year: "1990s",
    title: "Indian Railways Partnership",
    description: "Commenced direct supply of RDSO drawing-approved stainless steel dustbins for railway coaches and waiting concourses."
  },
  {
    year: "2000s",
    title: "Delhi Manufacturing Facility",
    description: "Commissioned dedicated metal fabrication and press unit in Uttam Nagar, New Delhi to scale bulk supply capacity."
  },
  {
    year: "Present",
    title: "National Institutional Reach",
    description: "Synergistic operations across sister concerns supplying municipal corporations, state boards, Indian Army, Navy, and ONGC."
  }
];

export default function AboutSection() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <section id="about" className="py-24 sm:py-32 bg-ivory-100 border-b border-gold-600/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
            <span>Executive Profile & Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight leading-tight">
            Four decades of precision metallurgy and nationwide supply.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed font-light">
            Under the executive direction of Managing Director <strong>{COMPANY_INFO.managingDirector}</strong>, Saurabh Agro Chemicals has operated since 1984 as an established manufacturing and supply partner for Indian Railways, state utility ministries, and municipal corporations nationwide.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Narrative & Group Synergy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Executive Quote Callout */}
            <div className="p-8 rounded-3xl bg-white border border-gold-600/30 shadow-xs relative">
              <span className="text-4xl font-serif text-gold-600/40 absolute top-4 left-6">“</span>
              <p className="font-serif italic text-lg sm:text-xl text-ink-900 leading-relaxed pl-6 pt-2 font-normal">
                Over four decades, our mandate has been unequivocal: delivering uncompromised metallurgical precision and certified chemical formulations that withstand continuous public utility deployment.
              </p>
              <div className="mt-6 pt-4 border-t border-ivory-200 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-ink-900">{COMPANY_INFO.managingDirector}</p>
                  <p className="text-[10px] font-mono tracking-wider text-gold-700 uppercase">Managing Director • Saurabh Agro Chemicals</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink-400">
                  <span>ESTD 1984</span>
                </div>
              </div>
            </div>

            {/* Interactive Timeline Progression */}
            <div className="p-7 rounded-3xl bg-white border border-gold-600/20 shadow-xs">
              <h4 className="text-[11px] font-bold uppercase tracking-luxe text-gold-700 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span>Institutional Milestones (1984 – Present)</span>
              </h4>

              {/* Year Selector Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {MILESTONES.map((m, idx) => (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => setActiveMilestone(idx)}
                    className={`py-2.5 px-2 text-center rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                      activeMilestone === idx
                        ? 'bg-obsidian-950 text-ivory-100 shadow-sm border border-gold-600/50'
                        : 'bg-ivory-100 text-ink-700 hover:bg-ivory-200'
                    }`}
                  >
                    {m.year}
                  </button>
                ))}
              </div>

              {/* Active Milestone Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-ivory-200/50 border border-gold-600/20 text-left"
                >
                  <p className="font-serif font-medium text-base text-ink-900">
                    {MILESTONES[activeMilestone].title}
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                    {MILESTONES[activeMilestone].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sister Concerns Box */}
            <div className="p-7 rounded-3xl bg-white border border-gold-600/20 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4 text-[11px] font-bold uppercase tracking-luxe text-gold-700">
                <Users className="w-4 h-4 text-gold-600" />
                <span>Group Operating Synergy</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-600 mb-5 leading-relaxed font-light">
                Saurabh Agro Chemicals operates in active commercial and distribution synergy with two long-established group concerns:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY_INFO.sisterConcerns.map((sc) => (
                  <motion.div
                    whileHover={{ y: -3 }}
                    key={sc.name}
                    className="p-5 rounded-2xl bg-ivory-50 border border-gold-600/20"
                  >
                    <p className="font-serif font-medium text-sm text-ink-900">{sc.name}</p>
                    <p className="text-xs text-gold-700 font-medium mt-0.5">{sc.location}</p>
                    <p className="text-[11px] text-ink-500 mt-1.5 font-light">{sc.scope}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Corporate Hubs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {COMPANY_INFO.locations.map((loc) => (
                <div key={loc.city} className="p-5 rounded-2xl bg-white border border-gold-600/20">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-900 mb-1.5">
                    <Building2 className="w-4 h-4 text-gold-600" />
                    <span>{loc.city} ({loc.state})</span>
                  </div>
                  <p className="text-xs text-ink-600 font-mono leading-relaxed">{loc.address}</p>
                  <p className="text-[11px] text-gold-800 font-medium mt-2">{loc.role}</p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Vision, Mission & Quality Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-gold-600/20 shadow-xs relative overflow-hidden transition-all"
            >
              <div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-600/30 flex items-center justify-center text-gold-700 mb-5">
                <Compass className="w-5 h-5 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ink-900 mb-2 font-medium">
                Our Corporate Vision
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                "{COMPANY_INFO.vision}"
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-gold-600/20 shadow-xs relative overflow-hidden transition-all"
            >
              <div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-600/30 flex items-center justify-center text-gold-700 mb-5">
                <Target className="w-5 h-5 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ink-900 mb-2 font-medium">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                "{COMPANY_INFO.mission}"
              </p>
            </motion.div>

            {/* Quality Standard Note in Obsidian & Gold */}
            <div className="p-7 rounded-3xl bg-obsidian-950 text-ivory-100 flex items-start gap-4 shadow-luxe border border-gold-600/30">
              <img src={sacLogo} alt="SAC Seal" className="w-10 h-10 rounded-full flex-shrink-0 mt-0.5 border border-gold-500/50" />
              <div>
                <p className="text-xs font-bold uppercase tracking-luxe text-gold-400">
                  Strict Metallurgical & Chemical Controls
                </p>
                <p className="text-xs text-ivory-300 mt-2 leading-relaxed font-light">
                  All stainless steel fabrications undergo rigorous 304-grade spectro-analysis; polymer molding strictly uses UV-stabilized virgin polymers, and vector control insecticides comply with designated active percentages.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
