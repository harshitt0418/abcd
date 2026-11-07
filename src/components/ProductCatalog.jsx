import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Search, Plus, Check, ArrowRight, Layers, SlidersHorizontal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductModal from './ProductModal';

export default function ProductCatalog({ selectedItems, onToggleSelect, onScrollToEnquiry }) {
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
    <section id="products" className="py-20 md:py-28 bg-[#fcfdfd] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sac-800 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sac-700"></span>
            <span>Comprehensive Brochure Catalog</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Institutional Product Range
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Fabricated and formulated for Indian Railways, municipal corporations, public works, and health departments. Select any item to view detailed brochure specifications or queue it for an institutional quotation.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-10">
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, materials, RDSO, specs..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sac-600 focus:border-transparent transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick summary pill */}
            <div className="text-xs text-slate-500 font-medium self-end sm:self-center">
              Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> of {PRODUCTS.length} brochure items
            </div>
          </div>

          {/* Animated Category Tabs with Sliding Layout Pill */}
          <div className="relative flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sac-600 z-10 ${
                    isActive ? 'text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {/* Sliding Pill Background with Framer Motion layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-sac-800 rounded-xl shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {!isActive && (
                    <div className="absolute inset-0 bg-white border border-slate-200/90 rounded-xl -z-20" />
                  )}

                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Banner with Smooth Fade */}
          <AnimatePresence mode="wait">
            {activeCategoryObj && (
              <motion.div
                key={activeCategoryObj.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="p-4 rounded-xl bg-sac-50/70 border border-sac-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left"
              >
                <div>
                  <p className="text-xs font-semibold text-sac-900">{activeCategoryObj.label}</p>
                  <p className="text-xs text-sac-700 mt-0.5 font-normal">{activeCategoryObj.description}</p>
                </div>
                {activeCategoryObj.tagline && (
                  <span className="text-[11px] font-semibold text-sac-800 bg-white/80 border border-sac-200/80 px-2.5 py-1 rounded-md whitespace-nowrap">
                    {activeCategoryObj.tagline}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Product Cards Grid with Framer Motion layout and crossfade */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center bg-white rounded-2xl border border-dashed border-slate-300"
          >
            <p className="text-sm font-medium text-slate-600">No products found matching "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-3 text-xs font-semibold text-sac-700 hover:underline"
            >
              Reset search & category filter
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => {
                const isSelected = selectedItems.some((item) => item.id === product.id);

                return (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-premium hover:border-slate-300 transition-shadow duration-300 flex flex-col text-left"
                  >
                    {/* Image Container with Zoom */}
                    <div
                      onClick={() => setActiveModalProduct(product)}
                      className="relative aspect-square bg-[#fbfcfb] p-4 flex items-center justify-center cursor-pointer overflow-hidden border-b border-slate-100"
                    >
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain filter drop-shadow-2xs"
                      />

                      {/* Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-sac-900 px-2 py-0.5 rounded border border-slate-200/80 shadow-2xs">
                        {product.highlight}
                      </div>

                      {/* Brochure Ref Tag */}
                      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-white/80 px-1.5 py-0.5 rounded">
                        {product.brochureRef}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-[11px] font-semibold text-sac-700 uppercase tracking-wider mb-1">
                          {product.material}
                        </div>
                        <h3
                          onClick={() => setActiveModalProduct(product)}
                          className="font-display font-bold text-sm sm:text-base text-slate-900 group-hover:text-sac-900 cursor-pointer line-clamp-2 transition-colors"
                        >
                          {product.name}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {product.features}
                        </p>
                      </div>

                      {/* Action Buttons with Spring Feedback */}
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                        <motion.button
                          whileTap={{ scale: 0.94 }}
                          type="button"
                          onClick={() => onToggleSelect(product)}
                          className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                            isSelected
                              ? 'bg-sac-100 text-sac-900 border border-sac-200 hover:bg-sac-200'
                              : 'bg-slate-100 text-slate-700 hover:bg-sac-50 hover:text-sac-800'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-sac-700" />
                              <span>Queued</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Quote</span>
                            </>
                          )}
                        </motion.button>

                        <motion.button
                          whileTap={{ scale: 0.94 }}
                          type="button"
                          onClick={() => setActiveModalProduct(product)}
                          className="py-2 px-3 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-slate-200"
                          title="View brochure specifications"
                        >
                          Specs
                        </motion.button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Selected Items Sticky Floating Bar */}
        <AnimatePresence>
          {selectedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 p-4 rounded-2xl bg-sac-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-floating text-left"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  key={selectedItems.length}
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="w-9 h-9 rounded-xl bg-sac-700 flex items-center justify-center font-bold text-sm"
                >
                  {selectedItems.length}
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {selectedItems.length} {selectedItems.length === 1 ? 'product' : 'products'} queued for institutional quotation
                  </p>
                  <p className="text-xs text-sac-200 mt-0.5">
                    Items will be auto-populated into the RFQ tender form below.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onScrollToEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-sac-900 text-xs sm:text-sm font-bold hover:bg-sac-50 transition-colors shadow-xs"
              >
                <span>Proceed to Enquiry Form</span>
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
