import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Train, Building, LandPlot, Flag, Shield, Flame, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SectorsServed() {
  const [selectedSectorIndex, setSelectedSectorIndex] = useState(0);
  const iconList = [Train, Building, LandPlot, Flag, Shield, Flame];

  const sectorDetails = [
    {
      scope: "Indian Railways Zonal Divisions",
      products: "RDSO-approved SS coach dustbins, platform pole-hanging twin bins, coach sanitation chemicals & trackman high-vis jackets."
    },
    {
      scope: "Central & State Ministries",
      products: "Institutional waste management systems, public works safety apparel, and administrative facility hygiene products."
    },
    {
      scope: "Urban Local Bodies (Gram Panchayats & Nagar Palika)",
      products: "3-bin metal stand stations, wet & dry waste segregation stations, heavy-duty HDPE wheelie containers & drain bleaching powder."
    },
    {
      scope: "State Civil Supplies & Health Depts",
      products: "Temephos 50% EC larvicides, Deltamethrin space sprays, malathion crop sprays & public health vector eradication."
    },
    {
      scope: "Defense Establishments (Army & Navy)",
      products: "Cantonment sanitation equipment, full-body safety harnesses, thermal pulse-jet foggers & institutional hygiene supplies."
    },
    {
      scope: "Public Sector Enterprises (ONGC)",
      products: "ISI mark fire safety extinguishers, chemical handling latex gloves, industrial safety shoes & industrial waste bins."
    }
  ];

  return (
    <section id="sectors" className="py-24 sm:py-32 bg-ivory-100 border-b border-gold-600/20 overflow-hidden">
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
            <span>Documented Institutional Clientele</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight leading-tight">
            Key Sectors & Organizations Served
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed font-light">
            As documented in our corporate brochure index, Saurabh Agro Chemicals executes direct institutional tenders and contract manufacturing for premier national infrastructure authorities.
          </p>
        </motion.div>

        {/* Sectors Grid with Luxury Elevation and Gold Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {COMPANY_INFO.clientele.map((client, idx) => {
            const Icon = iconList[idx % iconList.length];
            const isSelected = selectedSectorIndex === idx;

            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedSectorIndex(idx)}
                className={`p-7 rounded-3xl cursor-pointer border transition-all duration-300 flex flex-col justify-between text-left ${
                  isSelected
                    ? 'bg-white border-gold-600 shadow-luxe ring-1 ring-gold-600'
                    : 'bg-white border-gold-600/20 shadow-xs hover:border-gold-600/40 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-luxe text-gold-700 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-600/20">
                      {client.category}
                    </span>
                    <Icon className={`w-4 h-4 transition-colors ${isSelected ? 'text-gold-700' : 'text-ink-400'}`} />
                  </div>
                  <h3 className="font-serif text-xl text-ink-900 mb-2 font-medium">
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                    {client.highlight}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-ivory-200 flex items-center justify-between text-[11px]">
                  <span className="text-ink-400 font-mono text-[10px]">CITED IN BROCHURE</span>
                  {isSelected && (
                    <span className="text-gold-700 font-bold flex items-center gap-1 uppercase tracking-wider text-[10px]">
                      <CheckCircle className="w-3 h-3 text-gold-600" /> Active Scope
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Sector Scope Detail Box in Obsidian & Gold */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSectorIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-10 p-7 sm:p-8 rounded-3xl bg-obsidian-950 text-ivory-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-luxe border border-gold-600/30 text-left"
          >
            <div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-luxe block mb-1">
                Verified Scope of Supply: {COMPANY_INFO.clientele[selectedSectorIndex].name}
              </span>
              <p className="text-sm sm:text-base text-ivory-200 font-serif font-light leading-relaxed">
                {sectorDetails[selectedSectorIndex].products}
              </p>
            </div>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gold-500 text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition-all shadow-md whitespace-nowrap"
            >
              <span>Explore Matching Products</span>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Verification Note */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-gold-600/20 text-xs text-ink-600 text-left font-light">
          <p>
            <strong className="text-ink-900 font-semibold">Institutional Authenticity:</strong> All organizations listed above are cited directly from the Saurabh Agro Chemicals corporate brochure (Page 3). Deliveries occur strictly through designated government tender handling, GeM portal procurement, and authorized rate contract schedules.
          </p>
        </div>

      </div>
    </section>
  );
}
