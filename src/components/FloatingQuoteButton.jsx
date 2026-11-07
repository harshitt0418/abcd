import React, { useState, useEffect } from 'react';
import { ClipboardList, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingQuoteButton({ count, onOpen }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-sac-800 text-white font-semibold text-xs sm:text-sm shadow-floating hover:bg-sac-900 border border-sac-700/60 transition-all focus:outline-none focus:ring-2 focus:ring-sac-600 focus:ring-offset-2"
          >
            <div className="relative">
              <ClipboardList className="w-4 h-4 text-sac-200" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold flex items-center justify-center animate-pulse">
                  {count}
                </span>
              )}
            </div>
            <span>{count > 0 ? `${count} Queued • Get Quote` : 'Request Quote'}</span>
            <ArrowUpRight className="w-4 h-4 text-sac-300" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
