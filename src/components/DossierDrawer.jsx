import React, { useEffect } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, ClipboardList, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import sacLogo from '../assets/sac_logo_circle.png';

export default function DossierDrawer({ isOpen, onClose, items, onRemoveItem, onClearAll, onProceedToEnquiry }) {
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
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian-950/70 backdrop-blur-xs"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-ivory-50 text-ink-900 shadow-2xl border-l border-gold-600/30 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 bg-obsidian-950 text-ivory-100 border-b border-gold-600/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-gold-400">
                    <img src={sacLogo} alt="SAC Emblem" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-ivory-100">
                      Requisition Dossier
                    </h3>
                    <p className="text-[10px] text-gold-400 tracking-luxe uppercase font-mono">
                      {items.length} {items.length === 1 ? 'Specimen' : 'Specimens'} Selected
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  onClick={onClose}
                  className="p-2 rounded-full text-ivory-300 hover:text-ivory-100 hover:bg-obsidian-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="py-20 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-ivory-200 text-gold-700 mx-auto flex items-center justify-center">
                      <ClipboardList className="w-7 h-7" />
                    </div>
                    <p className="font-serif text-lg text-ink-900">Your dossier is currently empty</p>
                    <p className="text-xs text-ink-500 font-light max-w-xs mx-auto">
                      Explore the collection and click "Add to Dossier" to queue specifications for institutional quotation.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between pb-2 border-b border-gold-600/20 text-xs">
                      <span className="font-mono text-ink-500 uppercase tracking-wider text-[10px]">Active Requisition Items</span>
                      <button
                        onClick={onClearAll}
                        className="text-rose-600 hover:underline font-semibold uppercase tracking-wider text-[10px]"
                      >
                        Clear All
                      </button>
                    </div>

                    <div className="space-y-3">
                      <AnimatePresence>
                        {items.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.25 }}
                            className="p-3.5 rounded-2xl bg-white border border-gold-600/20 shadow-xs flex items-center justify-between gap-3 text-left"
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-contain bg-[#FAF9F6] rounded-xl border border-ivory-300 p-1 flex-shrink-0"
                              />
                              <div className="overflow-hidden">
                                <p className="font-serif text-sm text-ink-900 font-medium truncate">{item.name}</p>
                                <p className="text-[10px] text-gold-700 uppercase tracking-wider truncate font-semibold">{item.highlight}</p>
                                <p className="text-[10px] text-ink-400 font-mono truncate">{item.brochureRef}</p>
                              </div>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onRemoveItem(item.id)}
                              className="p-2 text-ink-400 hover:text-rose-600 rounded-full transition-colors flex-shrink-0"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </div>

              {/* Drawer Footer Actions */}
              {items.length > 0 && (
                <div className="p-6 bg-white border-t border-gold-600/20 space-y-3 shadow-lg">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onClose();
                      onProceedToEnquiry();
                    }}
                    className="btn-luxe w-full py-4 text-center justify-center text-xs tracking-wider"
                  >
                    <span>Proceed to Official Requisition</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <p className="text-[11px] text-ink-400 text-center font-light">
                    Confidential institutional RFQ • No payment required
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
