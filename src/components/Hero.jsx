import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import brochureHeroCircle from '../assets/brochure_hero_circle.png';
import ssRdso from '../assets/products/ss_rdso.jpg';
import plasticStandTrio from '../assets/products/plastic_stand_trio.jpg';
import safetyFireExtinguisher from '../assets/products/safety_fire_extinguisher.jpg';
import chemTemephosEc from '../assets/products/chem_temephos_ec.jpg';
import sacLogo from '../assets/sac_logo_circle.png';

const HERO_SLIDES = [
  {
    id: 'pillars',
    num: '01',
    category: 'Institutional Scope',
    title: 'The Four Pillars of Institutional Supply',
    subtitle: 'Grade 304 Stainless Steel • Municipal Waste Infrastructure • Industrial Safety PPE • Certified Agro Chemicals',
    image: brochureHeroCircle,
    spec: 'Authentic Brochure Catalog',
    highlight: 'Comprehensive Portfolio'
  },
  {
    id: 'railways',
    num: '02',
    category: 'Indian Railways Division',
    title: 'RDSO Drawing-Approved Stainless Steel Systems',
    subtitle: 'Heavy-gauge Grade 304 fabrication featuring tamper-proof security chain and coach lock assemblies.',
    image: ssRdso,
    spec: 'RDSO Compliant • Grade 304',
    highlight: 'Indian Railways Partner'
  },
  {
    id: 'municipal',
    num: '03',
    category: 'Urban Local Bodies',
    title: 'Trio Municipal Segregation Stations',
    subtitle: 'Color-coded hanging waste stations mounted on anti-corrosive frames for Gram Panchayats and Nagar Palikas.',
    image: plasticStandTrio,
    spec: 'UV-Stabilized Virgin HDPE',
    highlight: 'Swachh Bharat Infrastructure'
  },
  {
    id: 'safety',
    num: '04',
    category: 'Industrial Protection',
    title: 'ISI Mark Certified Fire Extinguishers & PPE',
    subtitle: 'Heavy-duty dry chemical pressure vessels and 360° retro-reflective gear safeguarding public workers.',
    image: safetyFireExtinguisher,
    spec: 'ISI Mark BIS Certified',
    highlight: 'Workplace Hazard Defense'
  },
  {
    id: 'chemicals',
    num: '05',
    category: 'Public Health Vector Control',
    title: 'Temephos 50% EC & Pyrethroid Formulations',
    subtitle: 'WHO-grade larvicide solutions engineered for large-scale mosquito eradication across civic water bodies.',
    image: chemTemephosEc,
    spec: '50% Active EC Concentration',
    highlight: 'Anti-Malaria Vector Control'
  }
];

const TICKER_ITEMS = [
  "ESTABLISHED 1984",
  "40+ YEARS INSTITUTIONAL EXCELLENCE",
  "SUPPLYING INDIAN RAILWAYS",
  "RDSO DRAWING COMPLIANT FABRICATION",
  "DELHI MANUFACTURING UNIT",
  "GORAKHPUR CORPORATE HEADQUARTERS",
  "MUNICIPAL CORPORATIONS & URBAN LOCAL BODIES",
  "INDIAN ARMY, NAVY & ONGC",
  "STRICT QUALITY CONTROL STANDARDS"
];

export default function Hero({ onEnquireClick, onExploreClick }) {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((prev) => (prev + 1) % total);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (next) => setIndex((next + total) % total);
  const currentSlide = HERO_SLIDES[index];

  return (
    <section id="overview" className="relative pt-24 sm:pt-28 pb-16 overflow-hidden bg-ivory-100">
      
      {/* Decorative Subtle Architecture Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Eyebrow & Headline Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 pt-4 sm:pt-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-600/30 text-gold-900 text-xs font-semibold uppercase tracking-luxe shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse" />
            <span>Established 1984 • Four Decades of Institutional Manufacturing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink-900 leading-[1.12] tracking-tight"
          >
            Dependable hygiene, safety, <br className="hidden sm:inline" />
            <span className="italic font-normal text-gold-700">and agro solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Saurabh Agro Chemicals is an established manufacturer and institutional supplier delivering RDSO-approved stainless steel systems, municipal waste infrastructure, industrial safety equipment, and public health agro-chemicals to Indian Railways and government bodies nationwide.
          </motion.p>
        </div>

        {/* Cinematic Grand Architectural Slideshow Box inspired by reference website */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-obsidian-950 text-ivory-100 shadow-luxe border border-gold-600/30 overflow-hidden"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          
          {/* Main Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[500px]">
            
            {/* Left Column: Product Spotlight Graphic with Ken Burns Motion */}
            <div className="lg:col-span-7 relative flex items-center justify-center p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-obsidian-950 via-[#111918] to-[#0A1816]">
              
              {/* Subtle gold halo glow */}
              <div className="absolute w-72 h-72 rounded-full bg-gold-600/10 filter blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center p-4"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] animate-kenburns"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Verified Seal Overlay */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-obsidian-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-gold-600/30 shadow-lg z-20">
                <img src={sacLogo} alt="SAC Official Emblem" className="w-7 h-7 rounded-full border border-gold-400" />
                <div className="text-left">
                  <p className="text-[11px] font-bold tracking-wider text-ivory-100 uppercase">{currentSlide.highlight}</p>
                  <p className="text-[10px] text-gold-400 font-mono">{currentSlide.spec}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Narrative & Specifications */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-gold-600/20 text-left bg-obsidian-900/60 backdrop-blur-xs">
              
              <div className="space-y-6">
                {/* Eyebrow & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest text-gold-400 uppercase">
                    CATALOG EXHIBIT {currentSlide.num} / 0{total}
                  </span>
                  <span className="text-xs uppercase tracking-luxe text-gold-500 font-semibold">
                    {currentSlide.category}
                  </span>
                </div>

                {/* Animated Slide Headline */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id + "-content"}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3"
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 leading-snug">
                      {currentSlide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-light">
                      {currentSlide.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={onEnquireClick}
                    className="btn-luxe flex-1 text-center justify-center"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onExploreClick}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-600/40 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-ivory-100 hover:bg-gold-600 hover:text-obsidian-950 transition-all duration-300"
                  >
                    <FileText className="w-3.5 h-3.5 text-gold-400" />
                    <span>View Catalog</span>
                  </button>
                </div>
              </div>

              {/* Bottom Navigation & Indicators bar like reference */}
              <div className="pt-8 mt-6 border-t border-gold-600/20 flex items-center justify-between">
                
                {/* Slide Indicators */}
                <div className="flex items-center gap-2" role="tablist">
                  {HERO_SLIDES.map((slide, sIdx) => (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={sIdx === index}
                      onClick={() => goTo(sIdx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        sIdx === index
                          ? 'w-8 bg-gold-400 shadow-[0_0_12px_rgba(212,175,55,0.7)]'
                          : 'w-2.5 bg-ivory-100/30 hover:bg-ivory-100/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                  <span className="mr-2 text-xs font-mono tracking-widest text-gold-400/80 select-none">
                    {currentSlide.num} / 0{total}
                  </span>
                  <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 bg-obsidian-950/70 text-ivory-100 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all"
                    aria-label="Previous exhibit"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 bg-obsidian-950/70 text-ivory-100 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all"
                    aria-label="Next exhibit"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Continuous Smooth Left-to-Right Scrolling Ticker from reference website */}
      <div className="mt-14 py-3.5 bg-obsidian-950 border-y border-gold-600/30 overflow-hidden text-ivory-100 select-none shadow-md">
        <div className="animate-marquee-ltr text-xs font-medium tracking-luxe uppercase text-gold-400/90 flex items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8 mx-4">
              <span>{item}</span>
              <span className="text-gold-500 text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
