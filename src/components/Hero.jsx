import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, CheckCircle2, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
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
    title: '4 Core Brochure Pillars',
    tag: 'Official Brochure Composition',
    desc: 'Stainless Steel Waste Systems, Heavy-Duty HDPE Municipal Bins, Industrial Safety PPE & Public Health Chemicals.',
    image: brochureHeroCircle,
    spec: 'Full Institutional Range',
    badge: 'SAC Verified Scope'
  },
  {
    id: 'railways',
    title: 'RDSO Approved SS Dustbin',
    tag: 'Indian Railways Specification',
    desc: 'Grade 304 heavy-gauge stainless steel with tamper-proof security chain and lock bracket for passenger coaches and station platforms.',
    image: ssRdso,
    spec: 'Grade 304 Stainless Steel',
    badge: 'Approved by RDSO Drawing'
  },
  {
    id: 'municipal',
    title: 'Nagar Palika Trio Waste Station',
    tag: 'Municipal Waste Segregation',
    desc: 'Color-coded triple hanging bins mounted on anti-corrosion powder-coated metal frame for Gram Panchayats and urban local bodies.',
    image: plasticStandTrio,
    spec: 'UV-Stabilized Virgin HDPE',
    badge: 'Nagar Palika Design'
  },
  {
    id: 'safety',
    title: 'ISI Mark Fire Extinguisher',
    tag: 'Industrial Safety & PPE',
    desc: 'Heavy-duty dry chemical powder stored-pressure vessel for public buildings, railway workshops, and industrial complexes.',
    image: safetyFireExtinguisher,
    spec: 'ISI Mark Certified (BIS)',
    badge: 'Industrial Hazard Protection'
  },
  {
    id: 'chemicals',
    title: 'Temephos 50% EC Paraguard',
    tag: 'Public Health Vector Control',
    desc: 'Emulsifiable concentrate larvicide specifically recommended by health departments for eradicating mosquito larvae in breeding sites.',
    image: chemTemephosEc,
    spec: '50% EC Active Larvicide',
    badge: 'Anti-Malaria Vector Control'
  }
];

const TICKER_ITEMS = [
  "ESTABLISHED 1984",
  "40+ YEARS INSTITUTIONAL SUPPLY",
  "RDSO DRAWING APPROVED DUSTBINS",
  "DELHI MANUFACTURING UNIT",
  "GORAKHPUR CORPORATE HQ",
  "SUPPLYING INDIAN RAILWAYS",
  "MUNICIPAL CORPORATIONS & LOCAL BODIES",
  "INDIAN ARMY, NAVY & ONGC",
  "STRICT QUALITY CONTROL STANDARDS"
];

export default function Hero({ onEnquireClick, onExploreClick }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Motion container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="overview" className="relative pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#fcfdfd] via-[#f7faf9] to-[#f4f7f6]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#09332f_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Column: Restrained Editorial Copy with Staggered Entrance */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Fact-based Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sac-100/70 border border-sac-200 text-sac-900 text-xs font-semibold tracking-wide uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-sac-600 animate-pulse"></span>
              <span>Established 1984 • Over 40 Years of Institutional Supply</span>
            </motion.div>

            {/* Confident Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight"
            >
              Dependable hygiene, safety, and agro solutions.
            </motion.h1>

            {/* One Concise Supporting Sentence */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              Saurabh Agro Chemicals is an established manufacturer and institutional supplier delivering RDSO-approved stainless steel systems, municipal waste infrastructure, industrial safety equipment, and public health agro-chemicals to Indian Railways and government bodies nationwide.
            </motion.p>

            {/* Actions with Spring Hover */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sac-800 text-white font-semibold text-sm hover:bg-sac-900 transition-all shadow-subtle hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-sac-600 focus:ring-offset-2"
              >
                <span>Request Institutional Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                <FileText className="w-4 h-4 text-sac-700" />
                <span>Explore Brochure Catalog</span>
              </motion.button>
            </motion.div>

            {/* Institutional Credentials Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600"
            >
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
            </motion.div>
          </div>

          {/* Right Column: Dynamic Interactive Brochure Visual Showcase */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer Interactive Showcase Card */}
              <div className="relative p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-premium transition-all">
                
                {/* Visual Viewport with AnimatePresence Transitions */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f3f7f6] flex items-center justify-center p-4 sm:p-6">
                  
                  {/* Subtle ambient animated pulse glow behind image */}
                  <div className="absolute inset-0 bg-radial from-sac-100/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, scale: 0.94, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.04, y: -10 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full flex flex-col items-center justify-center relative z-10"
                    >
                      <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating Verified Badge with Breathing Motion */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xs border border-slate-200/80 flex items-center gap-2.5 z-20"
                  >
                    <img src={sacLogo} alt="SAC Logo" className="w-6 h-6 rounded-full" />
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-slate-900 leading-none">{currentSlide.badge}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{currentSlide.spec}</p>
                    </div>
                  </motion.div>

                  {/* Auto-cycle indicator pill */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[10px] font-medium text-slate-500 px-2 py-0.5 rounded-md border border-slate-200/80 flex items-center gap-1.5 z-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-sac-600 animate-ping" />
                    <span>0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}</span>
                  </div>
                </div>

                {/* Slide Details */}
                <div className="mt-4 px-1 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sac-700">
                      {currentSlide.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="text-slate-400 hover:text-slate-700 p-1"
                      title={isAutoPlaying ? "Pause slideshow" : "Resume slideshow"}
                    >
                      {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                    {currentSlide.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {currentSlide.desc}
                  </p>
                </div>

                {/* Interactive Thumbnail Selector Tabs */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {HERO_SLIDES.map((slide, idx) => {
                    const isActive = idx === currentSlideIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-semibold text-center transition-all ${
                          isActive
                            ? 'bg-sac-800 text-white shadow-2xs'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Dynamic Infinite Scrolling Institutional Ticker */}
      <div className="mt-12 sm:mt-16 py-3 bg-sac-900 border-y border-sac-800 overflow-hidden text-white relative">
        <div className="flex select-none">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex items-center space-x-8 whitespace-nowrap text-xs font-semibold tracking-wider text-sac-200"
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sac-400 opacity-60" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
