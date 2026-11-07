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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-floating border border-slate-200 overflow-hidden my-8 text-left z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sac-800">
                <span className="w-2 h-2 rounded-full bg-sac-600"></span>
                <span>{product.brand} Official Catalog</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-mono">{product.brochureRef}</span>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sac-600"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Image Showcase */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="w-full aspect-square bg-[#f8faf9] rounded-xl border border-slate-200/80 p-6 flex items-center justify-center relative overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-sac-900 px-2 py-0.5 rounded border border-slate-200">
                    {product.highlight}
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-slate-400 text-center">
                  Cropped directly from Saurabh Agro Chemicals brochure
                </p>
              </div>

              {/* Details & Specs */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-sac-50 text-sac-800 border border-sac-200/80 text-xs font-medium mb-2">
                    {product.material}
                  </div>
                  <h3 id="modal-title" className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {product.features}
                </p>

                {/* Specifications List */}
                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Brochure Technical Specifications
                  </h4>
                  <dl className="grid grid-cols-1 gap-2.5 text-xs">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-50">
                        <dt className="text-slate-500 font-medium">{s.label}</dt>
                        <dd className="text-slate-900 font-semibold sm:text-right mt-0.5 sm:mt-0">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onToggleSelect(product)}
                    className={`w-full sm:flex-1 py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-sac-100 text-sac-900 border border-sac-300 hover:bg-sac-200'
                        : 'bg-sac-800 text-white hover:bg-sac-900 shadow-xs'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 text-sac-800" />
                        <span>Included in Enquiry List</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Institutional Quote</span>
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 font-medium text-xs sm:text-sm hover:bg-slate-50"
                  >
                    Back to Catalog
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
