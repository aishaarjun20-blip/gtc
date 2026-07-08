import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, SlidersHorizontal, Eye, FileText, CheckCircle2, 
  X, MessageSquare, Info, ShieldAlert, ShoppingBag, Plus, Sparkles
} from 'lucide-react';
import { PRODUCTS, BRANDS } from '../data';
import { Product } from '../types';

interface ProductsViewProps {
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  openQuoteModal: boolean;
  setOpenQuoteModal: (open: boolean) => void;
  quoteProductModel: string;
  setQuoteProductModel: (model: string) => void;
}

export default function ProductsView({
  selectedProductId,
  setSelectedProductId,
  openQuoteModal,
  setOpenQuoteModal,
  quoteProductModel,
  setQuoteProductModel
}: ProductsViewProps) {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhase, setActivePhase] = useState<string>('all');
  const [submittingQuote, setSubmittingQuote] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  // Quote form state
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [quoteMessage, setQuoteMessage] = useState('');

  // Selected product logic
  const selectedProduct = selectedProductId 
    ? PRODUCTS.find(p => p.id === selectedProductId) 
    : null;

  // Filtered products list
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.tagline?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    
    const matchesPhase = activePhase === 'all' || p.phase === activePhase;

    return matchesSearch && matchesCategory && matchesPhase;
  });

  const categoryTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'mma', label: 'MMA / ARC Inverters' },
    { id: 'tig', label: 'TIG Inverters' },
    { id: 'mig', label: 'MIG Inverters' },
    { id: 'plasma', label: 'Plasma Cutters' }
  ];

  const phaseFilters = [
    { id: 'all', label: 'All Phases' },
    { id: '1 Phase', label: '1 Phase (230V)' },
    { id: '1/2 Phase', label: '1/2 Phase (80-560V)' },
    { id: '1/2/3 Phase', label: '1/2/3 Phase (60-560V)' },
    { id: '3 Phase', label: '3 Phase (380-415V)' }
  ];

  // Auto scroll to detail if active
  useEffect(() => {
    if (selectedProductId) {
      const element = document.getElementById('product-details-container');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedProductId]);

  const handleOpenQuote = (modelName: string) => {
    setQuoteProductModel(modelName);
    setOpenQuoteModal(true);
    setQuoteSuccess(false);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingQuote(true);

    // Save quote to localStorage for direct verification/retrieval
    const newQuote = {
      id: 'quote-' + Date.now(),
      productName: quoteProductModel,
      productModel: quoteProductModel,
      customerName,
      customerEmail,
      customerPhone,
      message: quoteMessage,
      timestamp: new Date().toISOString(),
      status: 'Pending'
    };

    const existingQuotesStr = localStorage.getItem('garg_quotes') || '[]';
    const existingQuotes = JSON.parse(existingQuotesStr);
    existingQuotes.unshift(newQuote);
    localStorage.setItem('garg_quotes', JSON.stringify(existingQuotes));

    // Simulated successful callback
    setTimeout(() => {
      setSubmittingQuote(false);
      setQuoteSuccess(true);
      // Reset form
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setQuoteMessage('');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header strip */}
        <div className="mb-10 text-center">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">Authorized Dealer Catalog</span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-900 mt-3">
            MKG™ Professional Inverters
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Authorized products with official technical specification sheets, exact phase configurations, and product photos.
          </p>
        </div>

        {/* Filters and search panel */}
        <div className="bg-white rounded-2xl border border-zinc-200/80 p-5 shadow-sm space-y-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, features, or spec values..."
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-xl py-3 pl-11 pr-4 font-sans text-zinc-800 transition-all placeholder:text-zinc-400"
                id="product-search-input"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Phase Selection Dropdown / Selector */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end">
              <span className="text-xs font-mono font-bold text-zinc-500 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Phase Input:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {phaseFilters.map((ph) => (
                  <button
                    key={ph.id}
                    onClick={() => setActivePhase(ph.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      activePhase === ph.id
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
                    }`}
                  >
                    {ph.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Navigation Tabs */}
          <div className="border-t border-zinc-100 pt-4 flex flex-wrap gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setSelectedProductId(null); // Clear selected if changing tabs
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/10'
                    : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT/MID: Products list */}
          <div className="lg:col-span-2 space-y-6">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-zinc-200/80 p-12 text-center text-zinc-500">
                <Info className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
                <p className="font-semibold text-lg text-zinc-800">No Industrial Systems Found</p>
                <p className="text-sm text-zinc-500 mt-1">Please try modifying your search term or adjusting filters.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setActivePhase('all');
                  }}
                  className="mt-4 bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((p) => {
                  const isSelected = selectedProductId === p.id;
                  return (
                    <motion.div
                      key={p.id}
                      layout
                      className={`bg-white rounded-2xl overflow-hidden border transition-all flex flex-col justify-between ${
                        isSelected 
                          ? 'ring-2 ring-orange-500 border-transparent shadow-lg' 
                          : 'border-zinc-200/80 hover:border-zinc-300 shadow-xs'
                      }`}
                      id={`product-card-${p.id}`}
                    >
                      <div>
                        {/* Image area */}
                        <div className="relative aspect-video bg-zinc-50 border-b border-zinc-100 overflow-hidden">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-3 left-3 bg-zinc-950/80 text-zinc-300 text-[9px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm backdrop-blur-xs">
                            {p.brand}
                          </div>
                          <div className="absolute top-3 right-3 bg-orange-600 text-white text-[9px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-sm shadow-sm">
                            {p.phase}
                          </div>
                        </div>

                        {/* Text details */}
                        <div className="p-5 space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase text-orange-600">{p.category.toUpperCase()} SYSTEM</span>
                          <h3 className="font-display font-black text-lg text-zinc-900 tracking-tight leading-tight">
                            {p.name}
                          </h3>
                          <p className="text-zinc-500 text-xs sm:text-sm leading-snug line-clamp-2">
                            {p.tagline}
                          </p>

                          {/* Quick Specs Strip */}
                          <div className="grid grid-cols-2 gap-1.5 py-2.5 px-3 bg-zinc-50 rounded-lg text-[10px] font-mono text-zinc-600">
                            <div>
                              <span className="text-zinc-400 block uppercase">Net Weight</span>
                              <span className="font-bold text-zinc-800">{p.specs['Net Weight'] || p.specs['Net Weight (KG)'] || p.specs['Weight'] || 'N/A'}</span>
                            </div>
                            <div>
                              <span className="text-zinc-400 block uppercase">Out Current</span>
                              <span className="font-bold text-zinc-800">{p.specs['Output Current Range (A)'] || p.specs['Output Current Range'] || p.specs['Welding Current Range'] || p.specs['Max Output Current'] || 'N/A'}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom action bar */}
                      <div className="px-5 pb-5 pt-2 flex gap-2">
                        <button
                          onClick={() => setSelectedProductId(p.id)}
                          className={`flex-1 text-center font-bold text-xs py-3 rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-orange-50 text-orange-600 border-orange-200'
                              : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                          }`}
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Specs</span>
                        </button>
                        <button
                          onClick={() => handleOpenQuote(p.model)}
                          className="flex-1 text-center bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer"
                        >
                          Request Quote
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT: Selected Product Spec Details Sheet */}
          <div className="lg:col-span-1" id="product-details-container">
            {selectedProduct ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-zinc-200 shadow-md p-6 sticky top-24 space-y-6"
              >
                {/* Header */}
                <div className="flex justify-between items-start pb-4 border-b border-zinc-100">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider">{selectedProduct.brand} Professional Inverters</span>
                    <h2 className="font-display font-black text-xl text-zinc-900 tracking-tight mt-1">
                      {selectedProduct.name}
                    </h2>
                    <span className="inline-block mt-1 bg-zinc-100 text-zinc-800 text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-sm">
                      Model: {selectedProduct.model}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedProductId(null)}
                    className="p-1 rounded-md text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Machine features (PDF parsing) */}
                <div className="space-y-2.5">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-orange-600 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>System Advantages</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications (PDF table match) */}
                <div className="space-y-2.5">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-orange-600 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Technical Specification Table</span>
                  </h4>
                  <div className="border border-zinc-200 rounded-lg overflow-hidden text-xs">
                    <table className="w-full text-left border-collapse font-sans">
                      <thead>
                        <tr className="bg-zinc-950 text-white font-mono font-bold text-[10px] uppercase tracking-wider">
                          <th className="px-3 py-2 border-r border-zinc-800">Parameter</th>
                          <th className="px-3 py-2">Specification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200">
                        {Object.entries(selectedProduct.specs).map(([param, val], idx) => (
                          <tr 
                            key={param} 
                            className={`hover:bg-orange-50/40 transition-colors ${
                              idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
                            }`}
                          >
                            <td className="px-3 py-2.5 font-medium text-zinc-800 border-r border-zinc-100">{param}</td>
                            <td className="px-3 py-2.5 font-mono text-zinc-600">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Standard Accessories (matches PDF contents section) */}
                {selectedProduct.accessories && selectedProduct.accessories.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-orange-600">Standard Accessories</h4>
                    <div className="bg-zinc-50 rounded-lg p-3 text-xs text-zinc-600 space-y-1 border border-zinc-100">
                      {selectedProduct.accessories.map((acc, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 font-mono">
                          <span className="text-orange-500 font-bold">{idx + 1}.</span>
                          <span>{acc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Quote requests */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => handleOpenQuote(selectedProduct.model)}
                    className="flex-1 text-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Request Callback</span>
                  </button>
                  <a
                    href={`https://wa.me/919836746409?text=Hello%20Mohit,%20I%20am%20interested%20in%20buying%20the%20MKG%20${encodeURIComponent(selectedProduct.name)}%20(Model:%20${encodeURIComponent(selectedProduct.model)}).%20Please%20share%20the%20price%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-emerald-500/10 cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <svg className="w-4.5 h-4.5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
                    </svg>
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-2xl p-8 text-center text-zinc-500 sticky top-24">
                <Info className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                <p className="font-semibold text-sm text-zinc-700">Detailed Technical Sheet</p>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">Select a machine from the left listings to load the detailed specification table and system manual highlights here.</p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Quote Dialog overlay */}
      <AnimatePresence>
        {openQuoteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenQuoteModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden z-10"
            >
              {/* Top header banner */}
              <div className="bg-zinc-950 text-white px-6 py-5 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-mono text-orange-500 uppercase tracking-widest font-bold">Inquiry Submission Form</span>
                  <h3 className="font-display font-black text-lg">Request Pricing Quote</h3>
                </div>
                <button
                  onClick={() => setOpenQuoteModal(false)}
                  className="p-1 rounded-md text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form panel body */}
              <div className="p-6">
                {quoteSuccess ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-display font-bold text-lg text-zinc-900">Inquiry Registered Successfully!</h4>
                      <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                        Your quote request for <strong className="text-zinc-800">{quoteProductModel}</strong> has been logged. Mohit Agarwal or Sunil Agarwal will reach out on your contact number shortly.
                      </p>
                    </div>
                    <div className="pt-2 text-xs font-mono text-zinc-400">
                      Save details to local state ledger.
                    </div>
                    <button
                      onClick={() => setOpenQuoteModal(false)}
                      className="bg-zinc-900 text-white font-bold text-xs px-6 py-2.5 rounded-lg"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    
                    {/* Selected Item prefill */}
                    <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg text-xs">
                      <span className="text-orange-600 block uppercase font-bold font-mono">Selected Machine / Product:</span>
                      <span className="text-zinc-800 font-bold block mt-1">{quoteProductModel}</span>
                      <p className="text-[10px] text-zinc-500 mt-0.5">Change selected product by clicking "Request Quote" on another card in the catalog.</p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-zinc-600 block">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Rajat Sharma"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-zinc-600 block">Contact Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-zinc-600 block">Email Address (Optional)</label>
                        <input
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="e.g. partner@industry.com"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-zinc-600 block">Order / Quantity Requirements & Details</label>
                      <textarea
                        rows={3}
                        value={quoteMessage}
                        onChange={(e) => setQuoteMessage(e.target.value)}
                        placeholder="Tell us about your requirement, required wire length, accessories, or wholesale delivery address..."
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submittingQuote}
                        className="w-full text-center bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-300 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {submittingQuote ? (
                          <span>Registering Inquiry...</span>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Submit Formal GTC Quote Request</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
