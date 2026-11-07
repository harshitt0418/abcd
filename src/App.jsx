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
import DossierDrawer from './components/DossierDrawer';
import LuxuryCursor from './components/LuxuryCursor';
import FloatingNavDots from './components/FloatingNavDots';
import { PRODUCTS } from './data/products';

export default function App() {
  // Pre-seed 2 flagship brochure items
  const [selectedProducts, setSelectedProducts] = useState([
    PRODUCTS.find((p) => p.id === 'ss-rdso') || PRODUCTS[3],
    PRODUCTS.find((p) => p.id === 'plastic-stand-trio') || PRODUCTS[11],
  ].filter(Boolean));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-ivory-100 text-ink-900 antialiased selection:bg-gold-500 selection:text-obsidian-950 relative">
      {/* Luxury Ambient Interactive Cursor (Desktop) */}
      <LuxuryCursor />

      {/* Luxury Vertical Navigation Dots (Desktop) */}
      <FloatingNavDots />

      {/* Top Sticky Navigation with scroll progress & dossier trigger */}
      <Navbar
        enquiryItemsCount={selectedProducts.length}
        onOpenEnquiry={() => setIsDrawerOpen(true)}
      />

      <main className="flex-grow">
        {/* Dynamic Hero Section with interactive brochure visual showcase and live progress timer */}
        <Hero
          onEnquireClick={scrollToEnquiry}
          onExploreClick={scrollToProducts}
        />

        {/* Proof Points & Factual Highlights with animated spring metrics */}
        <ProofPoints />

        {/* Comprehensive Product Catalog Explorer with 3D tilt cards & sliding tabs */}
        <ProductCatalog
          selectedItems={selectedProducts}
          onToggleSelect={handleToggleSelect}
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />

        {/* Company Introduction & Group Synergy with interactive timeline */}
        <AboutSection />

        {/* Institutional Strengths & Tender Execution with animated cascade */}
        <InstitutionalStrengths />

        {/* Documented Public Sectors & Clientele with interactive sector viewer */}
        <SectorsServed />

        {/* Institutional Enquiry & Quote Generator with dual confetti cannons */}
        <EnquirySection
          selectedItems={selectedProducts}
          onRemoveItem={handleRemoveItem}
          onClearSelected={handleClearSelected}
        />
      </main>

      {/* Slide-over Requisition Dossier Drawer */}
      <DossierDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={selectedProducts}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearSelected}
        onProceedToEnquiry={scrollToEnquiry}
      />

      {/* Persistent Floating Quote Button */}
      <FloatingQuoteButton
        count={selectedProducts.length}
        onOpen={() => setIsDrawerOpen(true)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
