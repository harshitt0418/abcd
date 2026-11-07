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
    <section id="sectors" className="py-20 md:py-28 bg-[#f8faf9] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sac-800 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sac-700"></span>
            <span>Documented Public Sector Distribution</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Key Sectors & Organizations Served
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            As documented in our official brochure, Saurabh Agro Chemicals provides bulk supplies and tender fulfillment across these primary public utilities and government bodies. Click any sector to view specific deployed products.
          </p>
        </motion.div>

        {/* Sectors Grid with Interactive Click & Motion Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.clientele.map((client, idx) => {
            const Icon = iconList[idx % iconList.length];
            const isSelected = selectedSectorIndex === idx;

            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedSectorIndex(idx)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between text-left ${
                  isSelected
                    ? 'bg-white border-sac-600 shadow-premium ring-2 ring-sac-600/20'
                    : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-subtle hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sac-700 bg-sac-50 px-2.5 py-1 rounded-md border border-sac-100">
                      {client.category}
                    </span>
                    <Icon className={`w-4 h-4 transition-colors ${isSelected ? 'text-sac-700' : 'text-slate-400'}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {client.highlight}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Brochure Clientele</span>
                  {isSelected && (
                    <span className="text-sac-700 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Selected Scope
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Sector Supplied Scope Detail Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSectorIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 rounded-2xl bg-sac-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle text-left"
          >
            <div>
              <span className="text-xs font-semibold text-sac-300 uppercase tracking-wider">
                Documented Scope for {COMPANY_INFO.clientele[selectedSectorIndex].name}
              </span>
              <p className="mt-1 text-sm text-slate-200 font-medium">
                {sectorDetails[selectedSectorIndex].products}
              </p>
            </div>
            <a
              href="#products"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sac-800 hover:bg-sac-700 text-white text-xs font-semibold whitespace-nowrap border border-sac-700 transition-colors"
            >
              <span>Explore Matching Products</span>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Verification Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-500 text-left">
          <p>
            <strong className="text-slate-700">Notice of Authenticity:</strong> All organizations and departments listed above are cited directly from the Saurabh Agro Chemicals corporate brochure index (Page 3). Product supply occurs through designated government tender handling and authorized procurement channels.
          </p>
        </div>

      </div>
    </section>
  );
}
