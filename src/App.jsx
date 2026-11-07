import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofPoints from './components/ProofPoints';
import ProductCatalog from './components/ProductCatalog';
import AboutSection from './components/AboutSection';
import InstitutionalStrengths from './components/InstitutionalStrengths';
import SectorsServed from './components/SectorsServed';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';

export default function App() {
  // Pre-seed 2 flagship brochure items to demonstrate immediate interactivity
  const [selectedProducts, setSelectedProducts] = useState([
    PRODUCTS.find((p) => p.id === 'ss-rdso') || PRODUCTS[3],
    PRODUCTS.find((p) => p.id === 'plastic-stand-trio') || PRODUCTS[11],
  ].filter(Boolean));

  const handleToggleSelect = (product) => {
    setSelectedProducts((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveItem = (productId) => {
    setSelectedProducts((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearSelected = () => {
    setSelectedProducts([]);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-slate-800 antialiased selection:bg-sac-700 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar
        enquiryItemsCount={selectedProducts.length}
        onOpenEnquiry={scrollToEnquiry}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onEnquireClick={scrollToEnquiry}
          onExploreClick={scrollToProducts}
        />

        {/* Proof Points & Factual Highlights */}
        <ProofPoints />

        {/* Comprehensive Product Catalog Explorer */}
        <ProductCatalog
          selectedItems={selectedProducts}
          onToggleSelect={handleToggleSelect}
          onScrollToEnquiry={scrollToEnquiry}
        />

        {/* Company Introduction & Group Synergy */}
        <AboutSection />

        {/* Institutional Strengths & Tender Execution */}
        <InstitutionalStrengths />

        {/* Documented Public Sectors & Clientele */}
        <SectorsServed />

        {/* Institutional Enquiry & Quote Generator (Frontend Demo) */}
        <EnquirySection
          selectedItems={selectedProducts}
          onRemoveItem={handleRemoveItem}
          onClearSelected={handleClearSelected}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
