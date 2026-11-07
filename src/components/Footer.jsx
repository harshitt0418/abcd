import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Mail, ArrowUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import sacLogo from '../assets/sac_logo_circle.png';
import MagneticButton from './MagneticButton';
import GoldDustParticles from './GoldDustParticles';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Collection", href: "#products" },
    { label: "Heritage", href: "#about" },
    { label: "Institutional Supply", href: "#capabilities" },
    { label: "Sectors Served", href: "#sectors" },
    { label: "Requisition Dossier", href: "#enquiry" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-obsidian-950 text-ivory-300 pt-20 pb-12 border-t border-gold-600/30 text-left overflow-hidden relative">
      <GoldDustParticles count={16} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-gold-600/20">
          
          {/* Brand & Wordmark (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.05 }}
                className="w-11 h-11 rounded-full bg-white p-0.5 flex-shrink-0 cursor-pointer border border-gold-400"
              >
                <img
                  src={sacLogo}
                  alt="Saurabh Agro Chemicals Seal"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              <div>
                <h3 className="font-serif text-xl text-ivory-100 font-medium">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-gold-400 tracking-luxe uppercase font-sans font-semibold">
                  {COMPANY_INFO.brandName} • Established {COMPANY_INFO.established}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed max-w-sm font-light">
              Manufacturer and bulk supplier of stainless steel dustbins, waste management systems, safety equipment, and agro chemicals. Serving Indian Railways, government departments, and municipal corporations nationwide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span>Managing Director: {COMPANY_INFO.managingDirector}</span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-luxe text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-ivory-300 hover:text-gold-400 transition-colors uppercase tracking-wider text-[11px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brochure Addresses (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-luxe text-gold-400">
              Brochure Listed Addresses
            </h4>

            <div className="space-y-3 text-xs font-light">
              {/* Regd Office */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory-100 font-semibold uppercase tracking-wider text-[10px] block">Registered Office:</span>
                  <span className="text-ivory-300">{COMPANY_INFO.locations[0].address}</span>
                </div>
              </div>

              {/* Branch Office */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory-100 font-semibold uppercase tracking-wider text-[10px] block">Branch Office & Manufacturing Unit:</span>
                  <span className="text-ivory-300">{COMPANY_INFO.locations[1].address}</span>
                </div>
              </div>

              {/* Contact Notice */}
              <div className="flex items-start gap-3 pt-1">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory-100 font-semibold uppercase tracking-wider text-[10px] block">Official Email:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.contacts.email}`}
                    className="text-gold-400 hover:underline font-mono"
                  >
                    {COMPANY_INFO.contacts.email}
                  </a>
                </div>
              </div>

              {/* Verified Phone Notice */}
              <div className="p-3 rounded-xl bg-obsidian-900 border border-gold-600/20 text-[11px] text-ivory-300 font-light">
                <strong className="text-gold-400 font-semibold">Contact Number:</strong> Contact numbers differ between brochure cover and back page and are flagged for verification.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400 font-light">
          <p>© 1984–2026 {COMPANY_INFO.name}. All brochure specifications, product images, and credentials verified.</p>
          
          <MagneticButton
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian-900 border border-gold-600/30 text-gold-400 hover:text-ivory-100 hover:bg-gold-600/20 transition-all text-xs uppercase tracking-wider font-semibold cursor-pointer shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>

      </div>
    </footer>
  );
}
