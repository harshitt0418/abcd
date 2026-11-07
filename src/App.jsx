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
import FloatingQuoteButton from './components/FloatingQuoteButton';
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
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-slate-800 antialiased selection:bg-sac-700 selection:text-white relative">
      {/* Top Sticky Navigation with scroll progress */}
      <Navbar
        enquiryItemsCount={selectedProducts.length}
        onOpenEnquiry={scrollToEnquiry}
      />

      <main className="flex-grow">
        {/* Dynamic Hero Section with interactive brochure visual showcase and infinite ticker */}
        <Hero
          onEnquireClick={scrollToEnquiry}
          onExploreClick={scrollToProducts}
        />

        {/* Proof Points & Factual Highlights with animated triggers */}
        <ProofPoints />

        {/* Comprehensive Product Catalog Explorer with sliding tabs & layout transitions */}
        <ProductCatalog
          selectedItems={selectedProducts}
          onToggleSelect={handleToggleSelect}
          onScrollToEnquiry={scrollToEnquiry}
        />

        {/* Company Introduction & Group Synergy with interactive timeline */}
        <AboutSection />

        {/* Institutional Strengths & Tender Execution with animated cascade */}
        <InstitutionalStrengths />

        {/* Documented Public Sectors & Clientele with interactive sector viewer */}
        <SectorsServed />

        {/* Institutional Enquiry & Quote Generator with confetti celebratory submission */}
        <EnquirySection
          selectedItems={selectedProducts}
          onRemoveItem={handleRemoveItem}
          onClearSelected={handleClearSelected}
        />
      </main>

      {/* Persistent Floating Quote Button */}
      <FloatingQuoteButton
        count={selectedProducts.length}
        onOpen={scrollToEnquiry}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
