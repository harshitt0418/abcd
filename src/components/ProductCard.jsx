import React, { useState, useRef } from 'react';
import { Plus, Check, Sparkles, Eye } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProductCard({ product, isSelected, onToggle, onOpenModal }) {
  const cardRef = useRef(null);
  const [isJustAdded, setIsJustAdded] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax & Glare on Hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setSpotlightPos({ x: mouseX, y: mouseY });

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    onToggle(product);
    setIsJustAdded(true);
    setTimeout(() => setIsJustAdded(false), 1400);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -8, scale: 1.018 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group bg-white rounded-3xl border border-gold-600/20 overflow-hidden shadow-xs hover:shadow-luxe hover:border-gold-600/60 transition-all duration-300 flex flex-col text-left relative"
    >
      {/* Dynamic Cursor Spotlight Glare Overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(197, 160, 89, 0.14), transparent 75%)`,
          }}
        />
      )}

      {/* Floating "+1 Added" Toast Animation on Card */}
      {isJustAdded && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.8 }}
          animate={{ opacity: 1, y: -24, scale: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 z-30 bg-gold-500 text-obsidian-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1 pointer-events-none"
        >
          <Sparkles className="w-3 h-3" />
          <span>Dossier Updated!</span>
        </motion.div>
      )}

      {/* Image Stage with Interactive Reveal */}
      <div
        onClick={onOpenModal}
        className="relative aspect-square bg-[#FAF9F6] p-6 flex items-center justify-center cursor-pointer overflow-hidden border-b border-ivory-200"
      >
        <motion.img
          whileHover={{ scale: 1.12, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-500"
        />

        {/* Highlight Badge */}
        <div className="absolute top-3.5 left-3.5 bg-obsidian-950/90 text-[10px] font-bold text-gold-400 px-2.5 py-0.5 rounded-full border border-gold-600/30 shadow-xs">
          {product.highlight}
        </div>

        {/* Brochure Citation */}
        <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-ink-400 bg-white/80 px-2 py-0.5 rounded-full border border-ivory-200">
          {product.brochureRef}
        </div>

        {/* Hover View Hint */}
        <div className="absolute inset-0 bg-obsidian-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white/90 backdrop-blur-sm text-ink-900 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-gold-600" /> Inspect Specs
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[10px] font-bold text-gold-700 uppercase tracking-luxe mb-1.5 flex items-center justify-between">
            <span>{product.material}</span>
            <span className="font-mono text-ink-400 text-[10px]">{product.id.split('-')[0].toUpperCase()}</span>
          </div>
          <h3
            onClick={onOpenModal}
            className="font-serif text-lg text-ink-900 group-hover:text-gold-800 cursor-pointer line-clamp-2 transition-colors font-medium leading-snug"
          >
            {product.name}
          </h3>
          <p className="mt-2 text-xs text-ink-600 line-clamp-2 leading-relaxed font-light">
            {product.features}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-ivory-200 flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.02 }}
            type="button"
            onClick={handleAdd}
            className={`flex-1 py-2.5 px-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 ${
              isSelected
                ? 'bg-gold-500 text-obsidian-950 shadow-xs'
                : 'bg-obsidian-950 text-ivory-100 hover:bg-gold-600 hover:text-obsidian-950'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Dossier</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-gold-400" />
                <span>Add to RFQ</span>
              </>
            )}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.08 }}
            type="button"
            onClick={onOpenModal}
            className="p-2.5 rounded-full border border-gold-600/30 text-ink-700 hover:text-gold-700 hover:border-gold-600 transition-colors"
            title="Inspect brochure specifications"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
