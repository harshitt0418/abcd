import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, CheckCircle2, ShieldCheck, Sparkles, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import brochureHeroCircle from '../assets/brochure_hero_circle.png';
import ssRdso from '../assets/products/ss_rdso.jpg';
import plasticStandTrio from '../assets/products/plastic_stand_trio.jpg';
import safetyFireExtinguisher from '../assets/products/safety_fire_extinguisher.jpg';
import chemTemephosEc from '../assets/products/chem_temephos_ec.jpg';
import sacLogo from '../assets/sac_logo_circle.png';
import GoldDustParticles from './GoldDustParticles';
import MagneticButton from './MagneticButton';

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

const SLIDE_DURATION = 6000;

export default function Hero({ onEnquireClick, onExploreClick }) {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;
  const isHoveredRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((prev) => (prev + 1) % total);
        setProgressKey((prev) => prev + 1);
      }
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [total, isPaused, index]);

  const goTo = (next) => {
    setIndex((next + total) % total);
    setProgressKey((prev) => prev + 1);
  };

  const currentSlide = HERO_SLIDES[index];

  // Animated text container
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="overview" className="relative pt-24 sm:pt-28 pb-20 md:pb-28 overflow-hidden bg-ivory-100">
      
      {/* Decorative Subtle Architecture Grid Background with Animated Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />
      
      {/* Soft Ambient Floating Orbs in Background */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gold-400/20 filter blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-96 h-96 rounded-full bg-forest-600/15 filter blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Eyebrow & Staggered Animated Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 pt-4 sm:pt-6 pb-12">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-600/30 text-gold-900 text-xs font-semibold uppercase tracking-luxe shadow-xs"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gold-600"
            />
            <span>Established 1984 • Four Decades of Institutional Manufacturing</span>
          </motion.div>

          {/* Staggered Words Headline */}
          <motion.h1
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink-900 leading-[1.12] tracking-tight"
          >
            <motion.span variants={wordVariants} className="inline-block mr-2">Dependable</motion.span>
            <motion.span variants={wordVariants} className="inline-block mr-2">hygiene,</motion.span>
            <motion.span variants={wordVariants} className="inline-block mr-2">safety,</motion.span>
            <br className="hidden sm:inline" />
            <motion.span variants={wordVariants} className="inline-block italic font-normal text-gold-700">
              and agro solutions.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Saurabh Agro Chemicals is an established manufacturer and institutional supplier delivering RDSO-approved stainless steel systems, municipal waste infrastructure, industrial safety equipment, and public health agro-chemicals to Indian Railways and government bodies nationwide.
          </motion.p>
        </div>

        {/* Cinematic Grand Architectural Slideshow Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-obsidian-950 text-ivory-100 shadow-luxe border border-gold-600/30 overflow-hidden"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          {/* Ambient Floating Champagne Gold Dust Particles inside Slide Card */}
          <GoldDustParticles count={32} />
          
          {/* Active Slide Live Progress Bar at Top of Card */}
          <div className="w-full bg-obsidian-900/80 h-1 relative overflow-hidden z-20">
            <motion.div
              key={progressKey}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-forest-500 shadow-gold-glow"
            />
          </div>

          {/* Main Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[500px] relative z-10">
            
            {/* Left Column: Product Spotlight Graphic with Ken Burns Motion & Floating Glow */}
            <div className="lg:col-span-7 relative flex items-center justify-center p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-obsidian-950 via-[#111918] to-[#0A1816]">
              
              {/* Subtle gold halo glow with gentle breathing animation */}
              <motion.div
                animate={{ scale: [1, 1.18, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-80 h-80 rounded-full bg-gold-600/20 filter blur-3xl pointer-events-none"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 0.92, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.06, y: -14 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center p-4"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] animate-kenburns"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Verified Seal Overlay with Spring Entrance */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute bottom-6 left-6 flex items-center gap-3 bg-obsidian-900/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gold-600/30 shadow-lg z-20"
              >
                <img src={sacLogo} alt="SAC Official Emblem" className="w-7 h-7 rounded-full border border-gold-400" />
                <div className="text-left">
                  <p className="text-[11px] font-bold tracking-wider text-ivory-100 uppercase">{currentSlide.highlight}</p>
                  <p className="text-[10px] text-gold-400 font-mono">{currentSlide.spec}</p>
                </div>
              </motion.div>
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

                {/* Animated Slide Headline with Smooth Motion Transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id + "-content"}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3"
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 leading-snug font-medium">
                      {currentSlide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-light">
                      {currentSlide.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Magnetic Action Buttons with Spring Hover Physics */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <MagneticButton
                    onClick={onEnquireClick}
                    className="btn-luxe w-full text-center justify-center cursor-pointer shadow-gold-glow"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>

                  <MagneticButton
                    onClick={onExploreClick}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-600/40 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-ivory-100 hover:bg-gold-600 hover:text-obsidian-950 transition-all duration-300 cursor-pointer w-full sm:w-auto"
                  >
                    <FileText className="w-3.5 h-3.5 text-gold-400" />
                    <span>View Catalog</span>
                  </MagneticButton>
                </div>
              </div>

              {/* Bottom Navigation & Indicators bar */}
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
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
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
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => goTo(index - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 bg-obsidian-950/70 text-ivory-100 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all cursor-pointer"
                    aria-label="Previous exhibit"
                  >
                    <ChevronLeft size={16} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => goTo(index + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 bg-obsidian-950/70 text-ivory-100 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all cursor-pointer"
                    aria-label="Next exhibit"
                  >
                    <ChevronRight size={16} />
                  </motion.button>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
