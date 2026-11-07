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
          initial={{ opacity: 0, scale: 0.8, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 25 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-7 right-7 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-obsidian-950 text-ivory-100 font-semibold text-xs sm:text-sm shadow-floating hover:bg-gold-600 hover:text-obsidian-950 border border-gold-600/40 transition-all focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-gold-glow"
          >
            <div className="relative">
              <ClipboardList className="w-4 h-4 text-gold-400 group-hover:text-obsidian-950" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-extrabold flex items-center justify-center animate-pulse shadow-xs">
                  {count}
                </span>
              )}
            </div>
            <span className="tracking-wider uppercase text-xs">
              {count > 0 ? `${count} Queued • Requisition` : 'Request Dossier'}
            </span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
