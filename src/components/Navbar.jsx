import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ClipboardList, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import sacLogo from '../assets/sac_logo_circle.png';

export default function Navbar({ enquiryItemsCount, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Subtle scroll progress bar at the very top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Products", href: "#products" },
    { label: "About SAC", href: "#about" },
    { label: "Institutional Supply", href: "#capabilities" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-[#fcfdfd]/90 backdrop-blur-xs border-b border-slate-200/40 py-4'
      }`}
    >
      {/* Animated Top Reading Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sac-800 via-sac-600 to-forest-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a
            href="#overview"
            onClick={(e) => handleNavClick(e, '#overview')}
            className="flex items-center gap-3.5 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sac-600 rounded-lg p-1"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-xs border border-sac-800/10 flex-shrink-0 bg-white"
            >
              <img
                src={sacLogo}
                alt="Saurabh Agro Chemicals SAC Official Monogram"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-sac-800 transition-colors">
                Saurabh Agro Chemicals
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="text-sac-700 font-semibold tracking-wider uppercase text-[10px] bg-sac-50 px-1.5 py-0.5 rounded border border-sac-200/60">
                  SAC • Estd. 1984
                </span>
                <span className="hidden md:inline text-slate-400">•</span>
                <span className="hidden md:inline">Govt. & Institutional Supplier</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links with animated hover underline */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-slate-600 hover:text-sac-800 transition-colors duration-200 py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sac-700 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <AnimatePresence>
              {enquiryItemsCount > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 10 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={onOpenEnquiry}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sac-50 border border-sac-200 text-sac-800 text-xs font-semibold hover:bg-sac-100 transition-colors shadow-2xs"
                  title="View products queued for enquiry"
                >
                  <ClipboardList className="w-3.5 h-3.5 text-sac-700" />
                  <span>{enquiryItemsCount} {enquiryItemsCount === 1 ? 'item' : 'items'} queued</span>
                </motion.button>
              )}
            </AnimatePresence>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#enquiry"
              onClick={(e) => handleNavClick(e, '#enquiry')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sac-800 text-white text-xs sm:text-sm font-semibold hover:bg-sac-900 transition-all shadow-xs hover:shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-sac-600 focus-visible:ring-offset-2"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <AnimatePresence>
              {enquiryItemsCount > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  type="button"
                  onClick={onOpenEnquiry}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-sac-50 border border-sac-200 text-sac-800 text-xs font-semibold"
                >
                  <ClipboardList className="w-3 h-3 text-sac-700" />
                  <span>{enquiryItemsCount}</span>
                </motion.button>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sac-700"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Framer Motion slide-down */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="sm:hidden pt-4 pb-6 mt-3 border-t border-slate-200/80 space-y-3 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-sac-50 hover:text-sac-800 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#enquiry"
                  onClick={(e) => handleNavClick(e, '#enquiry')}
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-sac-800 text-white text-sm font-semibold hover:bg-sac-900 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Institutional Enquiry Form</span>
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
