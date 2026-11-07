import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Trash2, Info, Building, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function EnquirySection({ selectedItems, onRemoveItem, onClearSelected }) {
  const [formData, setFormData] = useState({
    officerName: '',
    department: '',
    organizationType: 'Indian Railways',
    officialEmail: '',
    procurementRef: '',
    deliveryLocation: 'New Delhi (Manufacturing Hub)',
    quantityTier: 'Bulk Tender (> 500 units)',
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
      errs.officerName = 'Official / Officer name is required';
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
      }, 700);
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
      deliveryLocation: 'New Delhi (Manufacturing Hub)',
      quantityTier: 'Bulk Tender (> 500 units)',
      productScopeNotes: '',
    });
    setTouched({});
    setErrors({});
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-[#fcfdfd] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sac-800 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sac-700"></span>
            <span>Institutional Procurement Desk</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Request Institutional Quotation & Tender Specs
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Direct channel for Indian Railways, Municipal Corporations, Public Health departments, and institutional buyers seeking GeM compliance, batch testing, or bulk manufacturing estimates.
          </p>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mb-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs leading-relaxed">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Frontend Demonstration Mockup:</strong> This interface showcases the interactive enquiry workflow and validation states for institutional buyers. In accordance with project requirements, no live backend or database is connected; form submissions generate a simulated quotation reference on your screen without transmitting or storing private data.
          </div>
        </div>

        {/* Main Grid: Form + Queued Catalog Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-6 sm:p-8">
            {submittedData ? (
              /* Success State */
              <div className="space-y-6 text-center py-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-sac-100 text-sac-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-sac-700" />
                </div>
                
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sac-50 border border-sac-200 text-sac-800 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    Reference ID: {submittedData.refId}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Quotation Request Prepared (Demo)
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto font-normal">
                    Your institutional quotation request for <strong>{submittedData.organizationType}</strong> ({submittedData.department}) has been generated with official brochure specifications.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Officer:</span>
                    <span className="font-semibold text-slate-900">{submittedData.officerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-semibold text-slate-900">{submittedData.officialEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Delivery Hub:</span>
                    <span className="font-semibold text-slate-900">{submittedData.deliveryLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Volume Tier:</span>
                    <span className="font-semibold text-slate-900">{submittedData.quantityTier}</span>
                  </div>
                  {submittedData.queuedItems.length > 0 && (
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-500 block mb-1">Attached Items ({submittedData.queuedItems.length}):</span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-800 font-medium">
                        {submittedData.queuedItems.map((item) => (
                          <li key={item.id}>{item.name} ({item.highlight})</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-sac-800 text-white text-xs sm:text-sm font-semibold hover:bg-sac-900 transition-colors shadow-xs"
                  >
                    Submit Another Demo Enquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Officer Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Contact Officer / Indenting Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="officerName"
                      value={formData.officerName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('officerName')}
                      placeholder="e.g. Er. R. K. Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.officerName && errors.officerName
                          ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-slate-300 bg-white focus:ring-sac-600 focus:border-transparent'
                      }`}
                    />
                    {touched.officerName && errors.officerName && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.officerName}</span>
                      </p>
                    )}
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Department / Municipal Division <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      onBlur={() => handleBlur('department')}
                      placeholder="e.g. Mechanical Carriage / Sanitation Dept"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.department && errors.department
                          ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-slate-300 bg-white focus:ring-sac-600 focus:border-transparent'
                      }`}
                    />
                    {touched.department && errors.department && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.department}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Client / Organization Sector
                    </label>
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sac-600"
                    >
                      <option value="Indian Railways">Indian Railways (Zonal / Workshop)</option>
                      <option value="Municipal Corporation">Municipal Corporation / Nagar Palika</option>
                      <option value="State Government Department">State Government Department</option>
                      <option value="Central Public Sector / ONGC">Central Public Sector / ONGC</option>
                      <option value="Defense / Army / Navy">Defense (Army / Navy Establishments)</option>
                      <option value="Public Health / Vector Control">Public Health & Vector Control</option>
                      <option value="Private Contractor / GeM Reseller">Authorized Tender Contractor</option>
                    </select>
                  </div>

                  {/* Official Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Official / Gov Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="officialEmail"
                      value={formData.officialEmail}
                      onChange={handleChange}
                      onBlur={() => handleBlur('officialEmail')}
                      placeholder="officer@railnet.gov.in or similar"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.officialEmail && errors.officialEmail
                          ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-slate-300 bg-white focus:ring-sac-600 focus:border-transparent'
                      }`}
                    />
                    {touched.officialEmail && errors.officialEmail && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.officialEmail}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Tender / Procurement Ref */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Tender Reference / GeM Bid No. (Optional)
                    </label>
                    <input
                      type="text"
                      name="procurementRef"
                      value={formData.procurementRef}
                      onChange={handleChange}
                      placeholder="e.g. GEM/2026/B/872412"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sac-600"
                    >
                    </input>
                  </div>

                  {/* Volume Tier */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Estimated Supply Volume
                    </label>
                    <select
                      name="quantityTier"
                      value={formData.quantityTier}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sac-600"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Technical Specifications & Special Requirements
                  </label>
                  <textarea
                    rows="3"
                    name="productScopeNotes"
                    value={formData.productScopeNotes}
                    onChange={handleChange}
                    placeholder="Specify custom RDSO drawing numbers, SS gauge, color requirements, or pesticide active percentages required..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sac-600"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sac-800 text-white font-semibold text-sm hover:bg-sac-900 transition-all shadow-subtle hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-sac-600 focus:ring-offset-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Generating Quotation Mockup...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Generate Institutional Quotation</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-slate-400">
                    No payment or credit card required. Strictly frontend demo.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Queued Brochure Items + Institutional Contacts (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Queued Items Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sac-700"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Queued Products ({selectedItems.length})
                  </span>
                </div>
                {selectedItems.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearSelected}
                    className="text-xs text-rose-600 hover:underline font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {selectedItems.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500">
                  <p>No products queued yet.</p>
                  <a
                    href="#products"
                    className="mt-2 inline-block font-semibold text-sac-700 hover:underline"
                  >
                    Browse catalog to add items
                  </a>
                </div>
              ) : (
                <div className="mt-4 space-y-3 max-h-72 overflow-y-auto pr-1">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-9 h-9 object-contain bg-white rounded-md border border-slate-200 flex-shrink-0"
                        />
                        <div className="overflow-hidden">
                          <p className="font-semibold text-slate-900 truncate">{item.name}</p>
                          <p className="text-[10px] text-slate-500 truncate">{item.highlight}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors flex-shrink-0"
                        title="Remove from queue"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Official Inquiry Coordinates */}
            <div className="p-6 rounded-2xl bg-sac-900 text-white space-y-4">
              <h3 className="font-display font-bold text-sm tracking-wide uppercase text-sac-200">
                Direct Communications
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-sac-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Verified Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contacts.email}`}
                      className="font-mono text-white hover:text-sac-300 transition-colors"
                    >
                      {COMPANY_INFO.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sac-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Delhi Production Hub</span>
                    <span className="text-slate-300">Uttam Nagar, New Delhi - 110059</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sac-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Gorakhpur HQ</span>
                    <span className="text-slate-300">Kunraghat, Gorakhpur - 273008</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-sac-800 text-[11px] text-sac-300">
                <span className="font-medium">Phone Support:</span> Contact number to be confirmed upon verification of tender documentation.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
