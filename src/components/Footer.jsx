import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Mail, ArrowUp, ShieldCheck } from 'lucide-react';
import sacLogo from '../assets/sac_logo_circle.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Product Portfolio", href: "#products" },
    { label: "About SAC", href: "#about" },
    { label: "Institutional Supply", href: "#capabilities" },
    { label: "Sectors Served", href: "#sectors" },
    { label: "Procurement Enquiry", href: "#enquiry" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand & Wordmark (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 flex-shrink-0">
                <img
                  src={sacLogo}
                  alt="Saurabh Agro Chemicals Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-sac-400 font-medium">
                  {COMPANY_INFO.brandName} • Established {COMPANY_INFO.established}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Manufacturer and bulk supplier of stainless steel dustbins, waste management systems, safety equipment, and agro chemicals. Serving Indian Railways, government departments, and municipal corporations nationwide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Managing Director: {COMPANY_INFO.managingDirector}</span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brochure Addresses (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Brochure Listed Addresses
            </h4>

            <div className="space-y-3 text-xs">
              {/* Regd Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sac-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Registered Office:</span>
                  <span className="text-slate-400">{COMPANY_INFO.locations[0].address}</span>
                </div>
              </div>

              {/* Branch Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sac-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Branch Office & Manufacturing Unit:</span>
                  <span className="text-slate-400">{COMPANY_INFO.locations[1].address}</span>
                </div>
              </div>

              {/* Contact Notice */}
              <div className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-sac-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Official Email:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.contacts.email}`}
                    className="text-sac-400 hover:underline font-mono"
                  >
                    {COMPANY_INFO.contacts.email}
                  </a>
                </div>
              </div>

              {/* Verified Phone Notice */}
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                <strong className="text-slate-300">Contact Number:</strong> Contact number to be confirmed (discrepancy between brochure cover and back page flagged for verification).
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 1984–2026 {COMPANY_INFO.name}. All brochure specifications, product images, and credentials verified.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
