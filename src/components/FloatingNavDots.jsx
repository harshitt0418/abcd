import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_SECTIONS = [
  { id: 'overview', num: '01', label: 'Overview' },
  { id: 'proof-points', num: '02', label: 'Legacy' },
  { id: 'products', num: '03', label: 'Brochure Catalog' },
  { id: 'about', num: '04', label: 'Heritage' },
  { id: 'capabilities', num: '05', label: 'Strengths' },
  { id: 'sectors', num: '06', label: 'Sectors' },
  { id: 'enquiry', num: '07', label: 'RFQ Dossier' },
];

export default function FloatingNavDots() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto">
      {NAV_SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        const isHovered = hoveredSection === sec.id;

        return (
          <div
            key={sec.id}
            className="relative flex items-center justify-end group cursor-pointer py-1"
            onMouseEnter={() => setHoveredSection(sec.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => scrollTo(sec.id)}
          >
            {/* Tooltip on Hover */}
            <AnimatePresence>
              {(isHovered || (isActive && false)) && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-7 mr-2 px-3 py-1 rounded-full bg-obsidian-950/90 text-ivory-100 text-[11px] font-mono whitespace-nowrap border border-gold-600/40 shadow-lg pointer-events-none flex items-center gap-1.5 backdrop-blur-md"
                >
                  <span className="text-gold-400 font-bold">{sec.num}</span>
                  <span className="text-ivory-200">{sec.label}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Indicator Dot / Pill */}
            <motion.div
              animate={{
                width: isActive ? 28 : 8,
                backgroundColor: isActive ? '#C5A059' : '#A39988',
                opacity: isActive ? 1 : 0.45,
              }}
              whileHover={{ opacity: 0.9, scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="h-2 rounded-full shadow-xs"
            />
          </div>
        );
      })}
    </div>
  );
}
