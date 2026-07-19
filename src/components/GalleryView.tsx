import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Eye, Image as ImageIcon, Search, Tag, ArrowRight, 
  Upload, Trash2, RotateCcw, Plus, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';

// Import local premium assets
import gargTradingHero from '../assets/images/garg_trading_hero_1783838198658.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'showroom' | 'machines' | 'accessories' | 'safety' | 'catalog';
  image: string; // supports imported assets and Base64 data URLs
  description: string;
  brand: string;
  isNew?: boolean;
  specs?: string;
  isCustom?: boolean; // flags user-uploaded assets
}

interface GalleryViewProps {
  setLightboxImage: (image: { 
    src: string; 
    alt: string; 
    title?: string;
    isCatalog?: boolean;
    catalogDetails?: {
      subtitle?: string;
      highlights?: string[];
      modelsOrDetails?: string[][];
      brands?: string[];
      whatsappMessage?: string;
    };
  } | null) => void;
}

export default function GalleryView({ setLightboxImage }: GalleryViewProps) {
  // 1. Core State & LocalStorage Persistence
  const defaultItems: GalleryItem[] = [
    {
      id: 'def-showroom-1',
      title: 'Strand Road Headquarters Showroom',
      category: 'showroom',
      image: gargTradingHero,
      brand: 'MKG Premium',
      description: 'Our primary retail outlet at 40 Strand Road, Ground Floor, Room No. 1, Kolkata. Populated with heavy machine inventory, cutting units, safety kits, and ready-to-ship accessories.',
      specs: 'Strand Road, Kolkata',
    }
  ];

  const [items, setItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('gtc_gallery_items_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse gallery items:', e);
      }
    }
    return defaultItems;
  });

  useEffect(() => {
    localStorage.setItem('gtc_gallery_items_v2', JSON.stringify(items));
  }, [items]);

  // 2. Filter & Search State
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 3. UI control states
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // 4. Form states for the new image upload
  const [newTitle, setNewTitle] = useState('');
  const [newBrand, setNewBrand] = useState('MKG');
  const [newCategory, setNewCategory] = useState<'showroom' | 'machines' | 'accessories' | 'safety' | 'catalog'>('showroom');
  const [newDescription, setNewDescription] = useState('');
  const [newSpecs, setNewSpecs] = useState('Strand Road, Kolkata');
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // 5. Drag & Drop Handlers for the Drop Zone
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setFormError('Invalid file type. Please upload an image file (PNG, JPG, JPEG, WEBP).');
      return;
    }
    
    // Check file size (recommend under 4MB for localStorage comfort)
    if (file.size > 4.5 * 1024 * 1024) {
      setFormError('Image size is too large. Please use an image smaller than 4MB for high-performance offline storage.');
      return;
    }

    setFormError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setUploadPreview(event.target.result as string);
      }
    };
    reader.onerror = () => {
      setFormError('Could not parse the dropped image file. Please try another image.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  // 6. Action: Add new item to gallery
  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!uploadPreview) {
      setFormError('Please drag and drop or choose an image file to upload first.');
      return;
    }
    if (!newTitle.trim()) {
      setFormError('Please enter a Title for your photo.');
      return;
    }

    const newItem: GalleryItem = {
      id: `custom-img-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      image: uploadPreview,
      brand: newBrand.trim() || 'MKG',
      description: newDescription.trim() || 'Custom added showroom/machinery photo.',
      specs: newSpecs.trim() || 'Strand Road, Kolkata',
      isNew: true,
      isCustom: true
    };

    setItems(prev => [newItem, ...prev]);
    
    // Reset Form fields
    setNewTitle('');
    setNewDescription('');
    setUploadPreview(null);
    setFormError(null);
    setSuccessMessage('Successfully uploaded and added your photo to the live Gallery!');
    
    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
  };

  // 7. Action: Delete a photo
  const handleDeleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  // 8. Action: Revert back to original setup
  const handleRestoreDefaults = () => {
    if (window.confirm('Are you sure you want to restore the original verified factory photo and remove all custom additions?')) {
      setItems(defaultItems);
      localStorage.removeItem('gtc_gallery_items_v2');
    }
  };

  // Filter items based on active tab and search query
  const filteredItems = items.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
                          item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.specs?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayCount = filteredItems.length;

  const filters = [
    { id: 'all', label: 'All Stock Photos' },
    { id: 'showroom', label: 'Showroom & Sites' },
    { id: 'machines', label: 'Welding Machines' },
    { id: 'accessories', label: 'Cables & Consumables' },
    { id: 'safety', label: 'Safety & Protection' },
    { id: 'catalog', label: 'Catalog & Flyers' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0e] py-16 px-4 sm:px-6 lg:px-8 text-[#f8f7f4]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Aesthetic Header Block */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#ff4d00]/10 px-3.5 py-1.5 rounded-none border border-[#ff4d00]/20 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#ff4d00]">Authorized Photo Gallery</span>
          </div>
          
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#f8f7f4] tracking-tight leading-none uppercase">
            Authorized Photo Gallery
          </h1>
          
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Real photos demonstrating our heavy welding machinery stock, high-performance cables, premium chemical consumables, and authorized industrial safety wear.
          </p>

          {/* Quick toggle to launch the Drag and Drop Manager */}
          <div className="pt-2">
            <button
              onClick={() => setIsEditorOpen(!isEditorOpen)}
              className="inline-flex items-center gap-2 bg-[#ff4d00]/10 hover:bg-[#ff4d00]/20 text-[#ff4d00] font-mono font-black text-[11px] uppercase tracking-wider px-4 py-2 border border-[#ff4d00]/25 hover:border-[#ff4d00]/50 transition-all rounded-none cursor-pointer"
            >
              <span>{isEditorOpen ? 'Close Image Editor Console' : 'Open Drag & Drop Gallery Editor'}</span>
              {isEditorOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 9. Collapsible Drag & Drop Photo Manager Console */}
        <AnimatePresence>
          {isEditorOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-zinc-950 border border-[#ff4d00]/20 text-[#f8f7f4] rounded-none space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-zinc-900 pb-4">
                  <div>
                    <h2 className="font-display font-black text-lg text-white uppercase tracking-tight flex items-center gap-2">
                      <Upload className="w-5 h-5 text-[#ff4d00]" />
                      Drag & Drop Gallery Console
                    </h2>
                    <p className="text-xs text-zinc-500 font-sans mt-0.5">
                      Upload local product images, job sites, and certificates to showcase on your public website.
                    </p>
                  </div>
                  
                  {/* Restore defaults reset trigger */}
                  <button
                    onClick={handleRestoreDefaults}
                    className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-850 hover:text-white border border-zinc-800 text-zinc-400 px-3.5 py-2 text-xs font-mono font-bold uppercase transition-all rounded-none cursor-pointer"
                    title="Remove all custom uploads and revert to original verified showroom view."
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restore Factory Defaults</span>
                  </button>
                </div>

                {/* Form & Drag Zone Grid */}
                <form onSubmit={handleAddNewItem} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column: Drag and Drop Target Area (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-stretch">
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`flex-1 border-2 border-dashed rounded-none flex flex-col items-center justify-center p-6 text-center transition-all min-h-[220px] relative ${
                        isDragging 
                          ? 'border-[#ff4d00] bg-[#ff4d00]/5 text-white' 
                          : uploadPreview 
                            ? 'border-zinc-800 bg-black/40' 
                            : 'border-zinc-900 hover:border-[#ff4d00]/30 bg-black/20 text-zinc-400'
                      }`}
                    >
                      {uploadPreview ? (
                        <div className="space-y-4 w-full">
                          <img 
                            src={uploadPreview} 
                            alt="Upload Preview" 
                            className="max-h-[160px] mx-auto object-contain border border-zinc-900"
                          />
                          <div className="space-y-1">
                            <p className="text-[11px] text-green-500 font-mono flex items-center justify-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Image Loaded & Ready
                            </p>
                            <button
                              type="button"
                              onClick={() => setUploadPreview(null)}
                              className="text-[10px] text-zinc-500 hover:text-[#ff4d00] underline uppercase tracking-wider font-mono cursor-pointer"
                            >
                              Remove & Use Different Image
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center border border-zinc-850 text-zinc-400 mx-auto">
                            <Upload className="w-6 h-6 text-[#ff4d00] animate-bounce" />
                          </div>
                          <div>
                            <p className="text-xs font-mono font-bold text-zinc-300 uppercase">
                              Drag & Drop Image Here
                            </p>
                            <p className="text-[10px] text-zinc-600 font-sans mt-1">
                              Supports JPG, PNG, WEBP, or GIF up to 4MB
                            </p>
                          </div>
                          <div>
                            <label className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer inline-block">
                              Browse Computer
                              <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleFileInputChange} 
                                className="hidden" 
                              />
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Form Fields (7 Cols) */}
                  <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Title input */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">Photo Title</label>
                        <input
                          type="text"
                          placeholder="e.g. MKG MMA Arc Welder Unboxing"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          className="w-full bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 focus:border-[#ff4d00] px-3 py-2 text-xs font-sans text-zinc-100 outline-hidden transition-all placeholder:text-zinc-700 rounded-none"
                        />
                      </div>

                      {/* Brand Input */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">Brand Name</label>
                        <input
                          type="text"
                          placeholder="e.g. MKG, Panasonic, Esab"
                          value={newBrand}
                          onChange={(e) => setNewBrand(e.target.value)}
                          className="w-full bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 focus:border-[#ff4d00] px-3 py-2 text-xs font-sans text-zinc-100 outline-hidden transition-all placeholder:text-zinc-700 rounded-none"
                        />
                      </div>

                      {/* Category Selector */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">Inventory Category</label>
                        <select
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value as any)}
                          className="w-full bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 focus:border-[#ff4d00] px-3 py-2 text-xs font-sans text-zinc-100 outline-hidden transition-all rounded-none"
                        >
                          <option value="showroom">Showroom & Sites</option>
                          <option value="machines">Welding Machines</option>
                          <option value="accessories">Cables & Consumables</option>
                          <option value="safety">Safety & Protection</option>
                          <option value="catalog">Catalog & Flyers</option>
                        </select>
                      </div>

                      {/* Specs / Location Badge */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">Location / Specs Tag</label>
                        <input
                          type="text"
                          placeholder="e.g. Strand Road, Kolkata"
                          value={newSpecs}
                          onChange={(e) => setNewSpecs(e.target.value)}
                          className="w-full bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 focus:border-[#ff4d00] px-3 py-2 text-xs font-sans text-zinc-100 outline-hidden transition-all placeholder:text-zinc-700 rounded-none"
                        />
                      </div>
                    </div>

                    {/* Description text block */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">Photo Description (Optional)</label>
                      <textarea
                        rows={2}
                        placeholder="Write a brief line or list of technical specs explaining this photo..."
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="w-full bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 focus:border-[#ff4d00] px-3 py-2 text-xs font-sans text-zinc-100 outline-hidden transition-all placeholder:text-zinc-700 rounded-none resize-none"
                      />
                    </div>

                    {/* Feedback & Actions */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pt-2">
                      <div className="text-xs">
                        {formError && <p className="text-[#ff4d00] font-mono font-semibold">❌ {formError}</p>}
                        {successMessage && <p className="text-green-500 font-mono font-semibold">✓ {successMessage}</p>}
                      </div>

                      <button
                        type="submit"
                        className="bg-[#ff4d00] hover:bg-[#e04400] text-black font-display font-black text-xs uppercase tracking-wider px-6 py-3 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                      >
                        <Plus className="w-4 h-4 text-black" strokeWidth={3} />
                        <span>Add to Gallery Feed</span>
                      </button>
                    </div>

                  </div>

                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Grid Feed Segment */}
        <section className="space-y-8">
          
          {/* Filters Bar & Real-time Search */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-none shadow-xs">
            
            {/* Filter tags buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filters.map(filt => {
                const isActive = activeFilter === filt.id;
                return (
                  <button
                    key={filt.id}
                    onClick={() => setActiveFilter(filt.id)}
                    className={`relative px-4 py-2.5 rounded-none text-xs font-display font-black uppercase tracking-wider transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#ff4d00] text-black shadow-sm' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900 bg-transparent'
                    }`}
                  >
                    {filt.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Search & Count Wrapper */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search stock photos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-[#0c0c0e] hover:bg-[#0c0c0e] focus:bg-[#0c0c0e] border border-zinc-900 rounded-none text-xs outline-hidden focus:border-[#ff4d00] transition-all w-full sm:w-64 font-sans text-zinc-300 placeholder:text-zinc-650"
                />
              </div>

              <div className="text-xs font-mono text-zinc-400 flex items-center justify-center gap-1.5 bg-[#0c0c0e] border border-zinc-900 rounded-none px-4 py-2.5 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#ff4d00] animate-pulse" />
                <span>Showing {displayCount} Stock Items</span>
              </div>
            </div>
          </div>

          {/* Dynamic Feed Grid */}
          {filteredItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-zinc-950 rounded-none border border-zinc-900 border-dashed space-y-4 shadow-2xs"
            >
              <div className="w-16 h-16 bg-zinc-900/50 rounded-none flex items-center justify-center text-zinc-500 mx-auto border border-zinc-850">
                <ImageIcon className="w-7 h-7" />
              </div>
              <div className="space-y-1.5 max-w-xs mx-auto">
                <h4 className="font-display font-black text-base text-[#f8f7f4] tracking-tight uppercase">
                  No stock items match
                </h4>
                <p className="text-zinc-500 text-xs font-sans">
                  Try adjusting your search terms or filter tabs to browse other verified inventory.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              id="gallery-images-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="bg-zinc-950 rounded-none overflow-hidden border border-zinc-900 hover:border-[#ff4d00]/40 transition-all duration-300 flex flex-col group relative shadow-2xs"
                  >
                    {/* Visual Panel frame */}
                    <div className="relative aspect-video bg-[#0c0c0e] overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Interactive click overlay with blur glass effect */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 z-10 p-4 text-center">
                        <button
                          type="button"
                          onClick={() => setLightboxImage({ 
                            src: item.image, 
                            alt: item.description, 
                            title: item.title,
                          })}
                          className="bg-[#ff4d00] hover:bg-[#e04400] text-black px-4.5 py-2.5 rounded-none shadow-lg font-display font-black uppercase text-xs flex items-center gap-2 transition-colors cursor-pointer"
                          title="Zoom High-Res"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Full Size Photo</span>
                        </button>

                        {/* Interactive Trash button for custom uploads */}
                        {item.isCustom && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteItem(item.id);
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white px-4.5 py-2 rounded-none shadow-lg font-mono font-black uppercase text-[10px] flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete Photo</span>
                          </button>
                        )}
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                        {/* Category badge */}
                        <div className="bg-zinc-950/90 backdrop-blur-xs text-zinc-300 text-[9px] font-mono uppercase font-black tracking-wider px-2.5 py-1.5 rounded-none border border-zinc-900 shadow-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                          <span>
                            {item.category === 'showroom' 
                              ? 'Showroom' 
                              : item.category === 'machines' 
                                ? 'Welder' 
                                : item.category === 'safety' 
                                  ? 'Safety' 
                                  : item.category === 'catalog'
                                    ? 'Flyer/Catalog'
                                    : 'Supplies'}
                          </span>
                        </div>

                        {/* New Tag badge */}
                        {item.isNew && (
                          <div className="bg-[#ff4d00] text-black text-[9px] font-mono uppercase font-black tracking-wider px-2.5 py-1.5 rounded-none shadow-sm flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 fill-black" strokeWidth={3} />
                            <span>NEW</span>
                          </div>
                        )}

                        {/* Custom/User tag badge */}
                        {item.isCustom && (
                          <div className="bg-zinc-950/90 backdrop-blur-xs text-green-400 text-[9px] font-mono uppercase font-black tracking-wider px-2.5 py-1.5 rounded-none border border-green-950 shadow-sm">
                            <span>USER UPLOADED</span>
                          </div>
                        )}
                      </div>

                      {/* Brand Label Overlay */}
                      <div className="absolute bottom-3 left-4 bg-zinc-950/90 border border-zinc-900 text-zinc-400 text-[10px] font-mono uppercase px-2 py-1 rounded-none">
                        Brand: <span className="font-bold text-[#ff4d00]">{item.brand}</span>
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-display font-black text-xs sm:text-sm text-zinc-300 uppercase tracking-tight leading-snug group-hover:text-[#ff4d00] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-zinc-500 text-xs font-sans line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-900">
                        <div className="flex items-center gap-1 text-zinc-550">
                          <Tag className="w-3.5 h-3.5 text-zinc-600" />
                          <span>{item.specs || 'MKG Premium'}</span>
                        </div>
                        <span 
                          className="text-[#ff4d00] font-black font-display uppercase hover:underline cursor-pointer flex items-center gap-1" 
                          onClick={() => setLightboxImage({ 
                             src: item.image, 
                             alt: item.description, 
                             title: item.title,
                          })}
                        >
                          Inspect <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </section>

      </div>
    </div>
  );
}
