import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Building2, Compass, Target, ArrowRight, ShieldCheck, Factory, Users } from 'lucide-react';
import sacLogo from '../assets/sac_logo_circle.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f8faf9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sac-800 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sac-700"></span>
            <span>Corporate Background & Leadership</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Four decades of precision manufacturing and nationwide supply.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Under the leadership of Managing Director <strong>{COMPANY_INFO.managingDirector}</strong>, Saurabh Agro Chemicals has grown since 1984 into a trusted manufacturing partner for Indian Railways, state utility boards, and municipal corporations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Narrative & Group Synergy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              <p>
                Headquartered in Gorakhpur (Uttar Pradesh) with a dedicated manufacturing unit in Delhi, the company combines precision metal fabrication with agricultural chemical formulation. Over more than 40 years, our focus has remained steadfast: manufacturing durable, compliant sanitation and safety assets that withstand heavy public usage.
              </p>
              <p>
                Our Delhi manufacturing plant is equipped with modern press tooling, shearing machinery, and welding infrastructure, enabling bulk supply capacity and strict quality-control adherence across every production run.
              </p>
            </div>

            {/* Sister Concerns Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-4 text-xs font-bold uppercase tracking-wider text-sac-800">
                <Users className="w-4 h-4 text-sac-700" />
                <span>Our Group Concerns</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                Saurabh Agro Chemicals operates in active operational synergy with its two established sister concerns:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY_INFO.sisterConcerns.map((sc) => (
                  <div key={sc.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                    <p className="font-semibold text-xs sm:text-sm text-slate-900">{sc.name}</p>
                    <p className="text-xs text-sac-700 font-medium mt-0.5">{sc.location}</p>
                    <p className="text-[11px] text-slate-500 mt-1">{sc.scope}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Hubs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {COMPANY_INFO.locations.map((loc) => (
                <div key={loc.city} className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                    <Building2 className="w-3.5 h-3.5 text-sac-700" />
                    <span>{loc.city} ({loc.state})</span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono leading-tight">{loc.address}</p>
                  <p className="text-[11px] text-sac-700 font-medium mt-2">{loc.role}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Vision & Mission Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Vision Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-sac-50 border border-sac-200 flex items-center justify-center text-sac-800 mb-4">
                <Compass className="w-5 h-5 text-sac-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                "{COMPANY_INFO.vision}"
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-sac-50 border border-sac-200 flex items-center justify-center text-sac-800 mb-4">
                <Target className="w-5 h-5 text-sac-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                "{COMPANY_INFO.mission}"
              </p>
            </div>

            {/* Quality Standard Note */}
            <div className="p-5 rounded-2xl bg-sac-900 text-white flex items-start gap-3.5">
              <img src={sacLogo} alt="SAC Seal" className="w-8 h-8 rounded-full flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sac-200">
                  Strict Quality Control Standards
                </p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  We adhere to strict quality control standards to maintain consistency across stainless steel grades, polymer thickness, and active agro-chemical percentages.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
