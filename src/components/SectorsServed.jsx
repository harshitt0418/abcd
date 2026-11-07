import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Train, Building, LandPlot, Flag, Shield, Flame } from 'lucide-react';

export default function SectorsServed() {
  const iconList = [Train, Building, LandPlot, Flag, Shield, Flame];

  return (
    <section id="sectors" className="py-20 md:py-28 bg-[#f8faf9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sac-800 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sac-700"></span>
            <span>Documented Public Sector Distribution</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Key Sectors & Organizations Served
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            As documented in our official brochure, Saurabh Agro Chemicals provides bulk supplies and tender fulfillment across these primary public utilities and government bodies.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.clientele.map((client, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={client.name}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-subtle transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sac-700 bg-sac-50 px-2.5 py-1 rounded-md border border-sac-100">
                      {client.category}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {client.highlight}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-[11px] text-slate-400">
                  <span>Brochure Stated Clientele</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-500 text-left">
          <p>
            <strong className="text-slate-700">Notice of Authenticity:</strong> All organizations and departments listed above are cited directly from the Saurabh Agro Chemicals corporate brochure index (Page 3). Product supply occurs through designated government tender handling and authorized procurement channels.
          </p>
        </div>

      </div>
    </section>
  );
}
