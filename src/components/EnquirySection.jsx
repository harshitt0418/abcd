import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Trash2, Info, Building, ShieldCheck, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/company';

export default function EnquirySection({ selectedItems, onRemoveItem, onClearSelected }) {
  const [formData, setFormData] = useState({
    officerName: '',
    department: '',
    organizationType: 'Indian Railways',
    officialEmail: '',
    procurementRef: '',
    deliveryLocation: 'New Delhi (Manufacturing Facility)',
    quantityTier: 'Bulk Tender (> 500 units / Multi-ton)',
    productScopeNotes: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Validate form
  const validate = () => {
    const errs = {};
    if (!formData.officerName.trim()) {
      errs.officerName = 'Official / Indenting Officer name is required';
    }
    if (!formData.officialEmail.trim()) {
      errs.officialEmail = 'Official email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.officialEmail)) {
      errs.officialEmail = 'Please provide a valid official email address';
    }
    if (!formData.department.trim()) {
      errs.department = 'Department / Municipal division is required';
    }
    return errs;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      officerName: true,
      department: true,
      officialEmail: true,
    });
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate frontend-only submission mock
      setTimeout(() => {
        setIsSubmitting(false);
        const refId = 'SAC-RFQ-' + Math.floor(100000 + Math.random() * 900000);
        setSubmittedData({
          ...formData,
          refId,
          queuedItems: [...selectedItems],
          timestamp: new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }),
        });

        // Dual luxury gold/brass confetti cannons
        try {
          // Left cannon
          confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0.1, y: 0.7 },
            colors: ['#D4AF37', '#C5A059', '#B8935A', '#0F1211', '#17625A']
          });
          // Right cannon
          confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 0.9, y: 0.7 },
            colors: ['#D4AF37', '#C5A059', '#B8935A', '#0F1211', '#17625A']
          });
        } catch (err) {
          // graceful fallback
        }
      }, 750);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      officerName: '',
      department: '',
      organizationType: 'Indian Railways',
      officialEmail: '',
      procurementRef: '',
      deliveryLocation: 'New Delhi (Manufacturing Facility)',
      quantityTier: 'Bulk Tender (> 500 units / Multi-ton)',
      productScopeNotes: '',
    });
    setTouched({});
    setErrors({});
  };

  return (
    <section id="enquiry" className="py-24 sm:py-32 bg-ivory-50 border-b border-gold-600/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
            <span>Institutional Procurement Desk</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight leading-tight">
            Request Institutional Quotation Dossier
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed font-light">
            Direct channel for Indian Railways procurement directors, municipal chief engineers, and institutional buyers requiring GeM compatibility, batch metallurgical testing, and factory estimates.
          </p>
        </motion.div>

        {/* Demo Disclaimer Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-gold-500/10 border border-gold-600/30 text-ink-800 flex items-start gap-3.5 text-xs leading-relaxed font-light">
          <Info className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-ink-900">Institutional Mockup Notice:</strong> This portal demonstrates the high-end RFQ requisition workflow for public tenders. No backend database or live transmission is active; submitting prepares a simulated tender reference dossier on your device.
          </div>
        </div>

        {/* Main Grid: Form + Queued Catalog Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gold-600/20 shadow-xs p-7 sm:p-10">
            <AnimatePresence mode="wait">
              {submittedData ? (
                /* Success State with celebratory scale & rotation */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="space-y-6 text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0.4, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-600/40 text-gold-800 mx-auto flex items-center justify-center shadow-gold-glow"
                  >
                    <CheckCircle2 className="w-9 h-9 text-gold-700" />
                  </motion.div>
                  
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-obsidian-950 text-gold-400 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-gold-600/40">
                      DOSSIER ID: {submittedData.refId}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 font-medium">
                      Institutional Requisition Prepared
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-600 max-w-lg mx-auto font-light leading-relaxed">
                      Your confidential quotation inquiry for <strong>{submittedData.organizationType}</strong> ({submittedData.department}) has been generated with official brochure specifications.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-ivory-100 border border-gold-600/20 text-left text-xs space-y-2.5 max-w-md mx-auto shadow-2xs">
                    <div className="flex justify-between">
                      <span className="text-ink-500">Indenting Officer:</span>
                      <span className="font-serif font-medium text-ink-900">{submittedData.officerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-500">Official Email:</span>
                      <span className="font-mono text-ink-900">{submittedData.officialEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-500">Fulfillment Hub:</span>
                      <span className="font-medium text-ink-900">{submittedData.deliveryLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-500">Quantity Schedule:</span>
                      <span className="font-medium text-ink-900">{submittedData.quantityTier}</span>
                    </div>
                    {submittedData.queuedItems.length > 0 && (
                      <div className="pt-2 border-t border-ivory-300">
                        <span className="text-ink-500 block mb-1">Attached Brochure Items ({submittedData.queuedItems.length}):</span>
                        <ul className="list-disc list-inside space-y-1 text-ink-900 font-medium">
                          {submittedData.queuedItems.map((item) => (
                            <li key={item.id}>{item.name} ({item.highlight})</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-3">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      type="button"
                      onClick={handleReset}
                      className="btn-luxe"
                    >
                      Submit Another Requisition
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                /* Active Form */
                <motion.form
                  key="enquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Officer Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Indenting Officer / Signatory <span className="text-gold-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="officerName"
                        value={formData.officerName}
                        onChange={handleChange}
                        onBlur={() => handleBlur('officerName')}
                        placeholder="e.g. Er. R. K. Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          touched.officerName && errors.officerName
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                            : 'border-gold-600/30 bg-ivory-50 focus:ring-gold-500 focus:bg-white'
                        }`}
                      />
                      {touched.officerName && errors.officerName && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-light">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.officerName}</span>
                        </p>
                      )}
                    </div>

                    {/* Department */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Department / Municipal Division <span className="text-gold-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        onBlur={() => handleBlur('department')}
                        placeholder="e.g. Carriage & Wagon / Public Health"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          touched.department && errors.department
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                            : 'border-gold-600/30 bg-ivory-50 focus:ring-gold-500 focus:bg-white'
                        }`}
                      />
                      {touched.department && errors.department && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-light">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.department}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Organization Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Organization / Public Body
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gold-600/30 bg-ivory-50 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        <option value="Indian Railways">Indian Railways (Zonal / Carriage / Station)</option>
                        <option value="Municipal Corporation">Municipal Corporation / Nagar Palika</option>
                        <option value="State Government Department">State Government Department</option>
                        <option value="Central Public Sector / ONGC">Central Public Sector / ONGC</option>
                        <option value="Defense / Army / Navy">Defense (Army / Navy Establishments)</option>
                        <option value="Public Health / Vector Control">Public Health & Vector Control</option>
                        <option value="Authorized GeM Reseller">Authorized Tender Contractor</option>
                      </select>
                    </div>

                    {/* Official Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Official Government / Corporate Email <span className="text-gold-700">*</span>
                      </label>
                      <input
                        type="email"
                        name="officialEmail"
                        value={formData.officialEmail}
                        onChange={handleChange}
                        onBlur={() => handleBlur('officialEmail')}
                        placeholder="officer@railnet.gov.in"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          touched.officialEmail && errors.officialEmail
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                            : 'border-gold-600/30 bg-ivory-50 focus:ring-gold-500 focus:bg-white'
                        }`}
                      />
                      {touched.officialEmail && errors.officialEmail && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-light">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.officialEmail}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Tender / Procurement Ref */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Tender Reference / GeM Bid No. (Optional)
                      </label>
                      <input
                        type="text"
                        name="procurementRef"
                        value={formData.procurementRef}
                        onChange={handleChange}
                        placeholder="e.g. GEM/2026/B/872412"
                        className="w-full px-4 py-3 rounded-xl border border-gold-600/30 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>

                    {/* Volume Tier */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Estimated Supply Quantity
                      </label>
                      <select
                        name="quantityTier"
                        value={formData.quantityTier}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gold-600/30 bg-ivory-50 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        <option value="Bulk Tender (> 500 units / Multi-ton)">Bulk Tender (&gt; 500 units / Multi-ton)</option>
                        <option value="Medium Institutional (100 - 500 units)">Medium Institutional (100 - 500 units)</option>
                        <option value="Trial / Pilot Depot Batch (25 - 100 units)">Trial / Pilot Depot Batch (25 - 100 units)</option>
                        <option value="Annual Rate Contract Requirement">Annual Rate Contract Requirement</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Scope Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                      Custom Drawing Numbers, RDSO Gauges or Active Assays
                    </label>
                    <textarea
                      rows="3"
                      name="productScopeNotes"
                      value={formData.productScopeNotes}
                      onChange={handleChange}
                      placeholder="Specify RDSO drawing numbers, SS sheet gauge, color code or pesticide percentages required..."
                      className="w-full px-4 py-3 rounded-xl border border-gold-600/30 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    ></textarea>
                  </div>

                  {/* Submit CTA with animated state */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxe w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <span>Compiling Dossier...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Generate Institutional Dossier</span>
                        </>
                      )}
                    </motion.button>

                    <span className="text-[11px] text-ink-400 font-light">
                      Confidential institutional inquiry • Verified against brochure catalog
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Queued Brochure Items + Institutional Contacts (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Queued Items Card */}
            <div className="p-7 rounded-3xl bg-white border border-gold-600/20 shadow-xs">
              <div className="flex items-center justify-between pb-3.5 border-b border-ivory-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-600"></span>
                  <span className="text-xs font-bold uppercase tracking-luxe text-ink-900">
                    Queued Specimens ({selectedItems.length})
                  </span>
                </div>
                {selectedItems.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearSelected}
                    className="text-xs text-rose-600 hover:underline font-semibold uppercase tracking-wider text-[10px]"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {selectedItems.length === 0 ? (
                <div className="py-8 text-center text-xs text-ink-500 font-light">
                  <p>No catalog items queued yet.</p>
                  <a
                    href="#products"
                    className="mt-2 inline-block font-semibold text-gold-700 hover:underline"
                  >
                    Explore collection to add specimens
                  </a>
                </div>
              ) : (
                <div className="mt-4 space-y-3 max-h-72 overflow-y-auto pr-1">
                  <AnimatePresence>
                    {selectedItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="p-3 rounded-2xl bg-ivory-100 border border-gold-600/20 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-contain bg-white rounded-xl border border-gold-600/20 flex-shrink-0 p-1"
                          />
                          <div className="overflow-hidden">
                            <p className="font-serif font-medium text-ink-900 truncate">{item.name}</p>
                            <p className="text-[10px] text-gold-700 uppercase tracking-wider truncate font-semibold">{item.highlight}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-ink-400 hover:text-rose-600 p-1 rounded transition-colors flex-shrink-0"
                          title="Remove specimen"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Official Coordinates in Obsidian & Gold */}
            <div className="p-7 rounded-3xl bg-obsidian-950 text-ivory-100 space-y-5 border border-gold-600/30 shadow-luxe">
              <h3 className="font-serif text-base tracking-wide text-ivory-100 font-medium">
                Administrative Coordinates
              </h3>
              
              <div className="space-y-4 text-xs font-light">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gold-400 block text-[10px] uppercase tracking-wider font-semibold">Official Tender Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contacts.email}`}
                      className="font-mono text-ivory-100 hover:text-gold-400 transition-colors"
                    >
                      {COMPANY_INFO.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gold-400 block text-[10px] uppercase tracking-wider font-semibold">Delhi Manufacturing Facility</span>
                    <span className="text-ivory-200">Uttam Nagar, New Delhi - 110059</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gold-400 block text-[10px] uppercase tracking-wider font-semibold">Gorakhpur Corporate Headquarters</span>
                    <span className="text-ivory-200">Kunraghat, Gorakhpur - 273008</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-600/20 text-[11px] text-ivory-300 font-light">
                <strong className="text-gold-400 font-semibold">Phone Inquiries:</strong> Contact numbers differ between brochure pages and are pending administrative verification.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
