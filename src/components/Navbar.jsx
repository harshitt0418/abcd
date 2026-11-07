import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ClipboardList, Shield } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import sacLogo from '../assets/sac_logo_circle.png';
import MagneticButton from './MagneticButton';

export default function Navbar({ enquiryItemsCount, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Collection", href: "#products" },
    { label: "Heritage", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Sectors", href: "#sectors" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/90 backdrop-blur-md border-b border-gold-600/20 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Golden Scroll Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-forest-600 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Luxury Wordmark */}
          <a
            href="#overview"
            onClick={(e) => handleNavClick(e, '#overview')}
            className="flex items-center gap-3.5 group text-left focus:outline-none rounded-lg"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 border border-gold-500/50 bg-white shadow-xs flex-shrink-0"
            >
              <img
                src={sacLogo}
                alt="Saurabh Agro Chemicals SAC Official Seal"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-ink-900 group-hover:text-gold-700 transition-colors">
                Saurabh Agro Chemicals
              </span>
              <div className="flex items-center gap-2 text-[10px] text-ink-600 tracking-luxe uppercase font-sans">
                <span className="text-gold-700 font-bold">SAC • 1984</span>
                <span className="text-gold-400">✦</span>
                <span className="hidden sm:inline">Institutional Manufacturing</span>
              </div>
            </div>
          </a>

          {/* Luxury Centered Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9 text-xs font-semibold uppercase tracking-widest text-ink-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 text-ink-700 hover:text-gold-700 transition-colors duration-200 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gold-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-3">
            <AnimatePresence>
              {enquiryItemsCount > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={onOpenEnquiry}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-600/30 text-gold-900 text-xs font-semibold tracking-wide shadow-2xs hover:bg-gold-500/20 transition-all"
                >
                  <ClipboardList className="w-3.5 h-3.5 text-gold-700" />
                  <span>{enquiryItemsCount} Selected</span>
                </motion.button>
              )}
            </AnimatePresence>

            <MagneticButton
              onClick={(e) => handleNavClick(e, '#enquiry')}
              className="inline-flex items-center gap-2 rounded-full bg-obsidian-950 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-ivory-100 hover:bg-gold-600 hover:text-obsidian-950 transition-all duration-300 shadow-md hover:shadow-gold-glow cursor-pointer"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            {enquiryItemsCount > 0 && (
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-bold"
              >
                <span>{enquiryItemsCount}</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-ink-900 hover:bg-ivory-200 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden pt-4 pb-6 mt-3 border-t border-gold-600/20 space-y-3 overflow-hidden bg-ivory-50/95 rounded-2xl p-4 shadow-xl"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold text-ink-800 hover:bg-gold-50 hover:text-gold-800 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="pt-2 border-t border-ivory-300">
                <a
                  href="#enquiry"
                  onClick={(e) => handleNavClick(e, '#enquiry')}
                  className="w-full text-center py-3 rounded-full bg-obsidian-950 text-ivory-100 text-xs font-semibold uppercase tracking-wider hover:bg-gold-600 hover:text-obsidian-950 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Institutional Dossier</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
