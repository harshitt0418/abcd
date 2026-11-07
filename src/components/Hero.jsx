import React from 'react';
import { ArrowRight, FileText, CheckCircle2, Building2 } from 'lucide-react';
import brochureHeroCircle from '../assets/brochure_hero_circle.png';
import sacLogo from '../assets/sac_logo_circle.png';

export default function Hero({ onEnquireClick, onExploreClick }) {
  return (
    <section id="overview" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#fcfdfd] via-[#f7faf9] to-[#f4f7f6]">
      {/* Background Architectural Accent lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#09332f_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Restrained Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Fact-based Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sac-100/70 border border-sac-200 text-sac-900 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-sac-600 animate-pulse"></span>
              <span>Established 1984 • Over 40 Years of Institutional Supply</span>
            </div>

            {/* Confident, Strong Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight">
              Dependable hygiene, safety, and agro solutions.
            </h1>

            {/* One Concise Supporting Sentence */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Saurabh Agro Chemicals is an established manufacturer and institutional supplier delivering RDSO-approved stainless steel systems, municipal waste infrastructure, industrial safety equipment, and public health agro-chemicals to Indian Railways and government bodies nationwide.
            </p>

            {/* Clear Route to Main Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sac-800 text-white font-semibold text-sm hover:bg-sac-900 transition-all shadow-subtle hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-sac-600 focus:ring-offset-2"
              >
                <span>Request Institutional Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                <FileText className="w-4 h-4 text-sac-700" />
                <span>Explore Brochure Catalog</span>
              </button>
            </div>

            {/* Institutional Credentials Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sac-700 flex-shrink-0" />
                <span>RDSO Drawing Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sac-700 flex-shrink-0" />
                <span>Delhi Manufacturing Facility</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sac-700 flex-shrink-0" />
                <span>Bulk Tender Fulfillment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual from Brochure */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer Subtle Frame */}
              <div className="relative p-3 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-premium">
                
                {/* Visual Image */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f0f4f3] flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={brochureHeroCircle}
                    alt="Saurabh Agro Chemicals 4 Product Pillars: Stainless Steel, Plastic Waste Bins, Insecticides, Safety Equipment"
                    className="w-full h-full object-contain filter drop-shadow-xs transform transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Floating Verified Badge */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xs border border-slate-200/80 flex items-center gap-2.5">
                    <img src={sacLogo} alt="SAC Logo" className="w-6 h-6 rounded-full" />
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-slate-900 leading-none">SAC Genuine Supply</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Brochure Certified Lines</p>
                    </div>
                  </div>
                </div>

                {/* Subtitle Caption under image */}
                <div className="mt-4 px-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium">4 Core Pillars: Steel, Waste, Safety & Agro</span>
                  <span className="font-semibold text-sac-800">40+ Active Products</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
