import React, { useEffect } from 'react';
import { X, Check, Plus, ExternalLink, Shield, Bookmark, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductModal({ product, isOpen, onClose, isSelected, onToggleSelect }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && product && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop with luxury dark tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-3xl bg-ivory-50 rounded-3xl shadow-floating border border-gold-600/30 overflow-hidden my-8 text-left z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gold-600/20 bg-ivory-200/50">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-luxe text-gold-800">
                <span className="w-2 h-2 rounded-full bg-gold-600"></span>
                <span>{product.brand} Official Catalog</span>
                <span className="text-gold-400">✦</span>
                <span className="text-ink-600 font-mono text-[11px]">{product.brochureRef}</span>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-ink-500 hover:text-ink-900 hover:bg-gold-500/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Image Showcase */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="w-full aspect-square bg-white rounded-2xl border border-gold-600/20 p-6 flex items-center justify-center relative overflow-hidden group shadow-xs">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                  <div className="absolute top-3 left-3 bg-obsidian-950/90 text-[10px] font-bold text-gold-400 px-2.5 py-1 rounded-full border border-gold-600/30 shadow-xs">
                    {product.highlight}
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-ink-500 text-center font-light">
                  Exact catalog photograph from Saurabh Agro Chemicals brochure
                </p>
              </div>

              {/* Details & Specs */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 text-gold-800 border border-gold-600/30 text-[11px] font-semibold tracking-wider uppercase mb-2">
                    {product.material}
                  </span>
                  <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-ink-900 leading-snug">
                    {product.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                  {product.features}
                </p>

                {/* Technical Specifications */}
                <div className="pt-3 border-t border-gold-600/20">
                  <h4 className="text-[11px] font-bold uppercase tracking-luxe text-gold-700 mb-3">
                    Brochure Technical Specifications
                  </h4>
                  <dl className="grid grid-cols-1 gap-2 text-xs">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-ivory-200">
                        <dt className="text-ink-500 font-normal">{s.label}</dt>
                        <dd className="text-ink-900 font-semibold sm:text-right mt-0.5 sm:mt-0">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onToggleSelect(product)}
                    className={`w-full sm:flex-1 py-3 px-5 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-gold-500/20 text-gold-900 border border-gold-600 hover:bg-gold-500/30'
                        : 'bg-obsidian-950 text-ivory-100 hover:bg-gold-600 hover:text-obsidian-950 shadow-md'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 text-gold-800" />
                        <span>Included in Enquiry Dossier</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Quotation Dossier</span>
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto py-3 px-6 rounded-full border border-ink-900/20 text-ink-700 text-xs font-semibold uppercase tracking-wider hover:bg-ivory-200"
                  >
                    Close
                  </motion.button>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
