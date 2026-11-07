import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Search, ArrowRight, Layers, SlidersHorizontal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';

export default function ProductCatalog({ selectedItems, onToggleSelect, onOpenDrawer }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q) ||
        item.highlight.toLowerCase().includes(q) ||
        item.specs.some(
          (s) =>
            s.label.toLowerCase().includes(q) ||
            s.value.toLowerCase().includes(q)
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="products" className="py-24 sm:py-32 bg-ivory-50 border-b border-gold-600/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
            <span>The Institutional Collection • Brochure Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight leading-tight">
            Curated Institutional Range
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed font-light">
            Manufactured and formulated strictly for Indian Railways, municipal corporations, public utilities, and health departments. Select any specimen to inspect technical specifications or queue it for institutional procurement.
          </p>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-700/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection, RDSO, SS-304, larvicide, fogger..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gold-600/30 text-xs sm:text-sm text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gold-700 hover:text-ink-900"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick summary pill */}
            <div className="text-xs text-ink-600 tracking-wider uppercase font-mono self-end sm:self-center">
              Displaying <span className="font-bold text-ink-900">{filteredProducts.length}</span> of {PRODUCTS.length} Brochure Items
            </div>
          </div>

          {/* Animated Category Tabs with Sliding Pill */}
          <div className="relative flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 flex items-center gap-2.5 focus:outline-none z-10 ${
                    isActive ? 'text-ivory-100 font-bold' : 'text-ink-700 hover:text-ink-900'
                  }`}
                >
                  {/* Sliding Pill Background with Framer Motion layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-obsidian-950 rounded-full shadow-md -z-10 border border-gold-600/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && (
                    <div className="absolute inset-0 bg-white/80 border border-gold-600/20 rounded-full -z-20 hover:border-gold-600/50 transition-colors" />
                  )}

                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-gold-500 text-obsidian-950'
                        : 'bg-ivory-200 text-ink-700'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Banner */}
          <AnimatePresence mode="wait">
            {activeCategoryObj && (
              <motion.div
                key={activeCategoryObj.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl bg-white border border-gold-600/20 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-900">{activeCategoryObj.label}</p>
                  <p className="text-xs text-ink-600 mt-0.5 font-light">{activeCategoryObj.description}</p>
                </div>
                {activeCategoryObj.tagline && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-800 bg-gold-500/10 border border-gold-600/30 px-3 py-1 rounded-full whitespace-nowrap">
                    {activeCategoryObj.tagline}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Product Cards Grid with 3D Parallax Tilt Cards */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center bg-white rounded-3xl border border-dashed border-gold-600/30"
          >
            <p className="font-serif text-lg text-ink-700">No catalog items matching "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-gold-700 hover:underline"
            >
              Reset Search & Filter
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => {
                const isSelected = selectedItems.some((item) => item.id === product.id);

                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSelected={isSelected}
                    onToggle={onToggleSelect}
                    onOpenModal={() => setActiveModalProduct(product)}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Selected Items Sticky Floating Bar */}
        <AnimatePresence>
          {selectedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.35 }}
              className="mt-14 p-5 sm:p-6 rounded-3xl bg-obsidian-950 text-ivory-100 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-floating border border-gold-600/30 text-left"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  key={selectedItems.length}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="w-11 h-11 rounded-full bg-gold-600 text-obsidian-950 flex items-center justify-center font-serif font-bold text-base shadow-gold-glow"
                >
                  {selectedItems.length}
                </motion.div>
                <div>
                  <p className="font-serif text-lg text-ivory-100 font-medium">
                    {selectedItems.length} {selectedItems.length === 1 ? 'Specimen' : 'Specimens'} queued for institutional quotation
                  </p>
                  <p className="text-xs text-gold-400 font-light mt-0.5">
                    Pre-populated into your confidential institutional tender dossier below.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={onOpenDrawer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-gold-500 text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition-all shadow-md"
              >
                <span>Inspect Requisition Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        isOpen={!!activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        isSelected={activeModalProduct && selectedItems.some((i) => i.id === activeModalProduct.id)}
        onToggleSelect={onToggleSelect}
      />
    </section>
  );
}
