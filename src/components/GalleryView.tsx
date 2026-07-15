import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, Trash2, Camera, Filter, Sparkles, Eye, 
  PlusCircle, Search, Image as ImageIcon, AlertCircle, CheckCircle, Info
} from 'lucide-react';

// Import local premium assets
import gargTradingHero from '../assets/images/garg_trading_hero_1783838198658.jpg';
import mkgGasHosepipe from '../assets/images/mkg_gas_hosepipe_1784119192764.jpg';
import mkgMma250e from '../assets/images/mkg_mma_250_e_1784119208150.jpg';
import mkgArc200n from '../assets/images/mkg_arc_200n_1784119221028.jpg';
import mkgMma500sic from '../assets/images/mkg_mma_500_sic_1784119233192.jpg';
import mkgCut140sic from '../assets/images/mkg_cut_140_sic_1784119245796.jpg';
import mkgArcWelder from '../assets/images/mkg_arc_welder_1783838078581.jpg';
import mmaBlackWelder from '../assets/images/mma_black_welder_1783838095890.jpg';
import mkgMigWelder from '../assets/images/mkg_mig_welder_1783838145697.jpg';
import plasmaCutter from '../assets/images/plasma_cutter_1783838182629.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'showroom' | 'machines' | 'accessories' | 'uploads';
  image: string;
  description: string;
  isUserUploaded?: boolean;
  timestamp?: number;
}

interface GalleryViewProps {
  setLightboxImage: (image: { src: string, alt: string, title?: string } | null) => void;
}

export default function GalleryView({ setLightboxImage }: GalleryViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<'showroom' | 'machines' | 'accessories' | 'uploads'>('uploads');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // Default professional gallery items
  const defaultItems: GalleryItem[] = [
    {
      id: 'def-showroom-1',
      title: 'Strand Road Headquarters Showroom',
      category: 'showroom',
      image: gargTradingHero,
      description: 'Our primary retail outlet at 40 Strand Road, Ground Floor, Room No. 1, Kolkata.',
    },
    {
      id: 'def-hosepipe',
      title: 'MKG ARC EXTREME Gas Hose Pipes',
      category: 'accessories',
      image: mkgGasHosepipe,
      description: 'Thermoplastic Rubber (TPR) burst-resistant welding hoses side-by-side.',
    },
    {
      id: 'def-mma-250',
      title: 'E-Series MMA-250 Inverter Welder',
      category: 'machines',
      image: mkgMma250e,
      description: 'Wide-voltage dual phase portable stick welding inverter in orange and black.',
    },
    {
      id: 'def-arc-200',
      title: 'ARC 200N IGBT Inverter System',
      category: 'machines',
      image: mkgArc200n,
      description: 'Industrial yellow compact welding machine with high frequency arc start.',
    },
    {
      id: 'def-mma-500',
      title: 'MMA-500 SiC Heavy Duty Site Welder',
      category: 'machines',
      image: mkgMma500sic,
      description: 'Silicon Carbide modules delivering stable 500A power for shipyard gouging.',
    },
    {
      id: 'def-cut-140',
      title: 'CUT-140 SiC Plasma Cutter & MMA',
      category: 'machines',
      image: mkgCut140sic,
      description: 'Sleek steel cutter compatible with CNC tables, cutting up to 40mm thickness.',
    },
    {
      id: 'def-arc-standard',
      title: 'MKG ARC Professional Inverter',
      category: 'machines',
      image: mkgArcWelder,
      description: 'Our standard high durability MMA inverter for light structural fabrications.',
    },
    {
      id: 'def-mma-black',
      title: 'Matte Black Series MMA Inverter',
      category: 'machines',
      image: mmaBlackWelder,
      description: 'Heavy duty high capacity inverter with digital LED output monitors.',
    },
    {
      id: 'def-mig-combo',
      title: 'MKG 250ST Combined MIG / ARC Smart',
      category: 'machines',
      image: mkgMigWelder,
      description: 'Gas/gasless smart computer controlled system adapted to 1/2/3 phase.',
    },
    {
      id: 'def-plasma-cutter',
      title: 'CUT-80 Compact Plasma Cutter',
      category: 'machines',
      image: plasmaCutter,
      description: 'High pressure pilot arc cutter for precise dross-free mild steel slicing.',
    },
  ];

  // Load user uploads from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('garg_gallery_uploads');
      if (stored) {
        setUploadedPhotos(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse gallery uploads from storage', e);
    }
  }, []);

  // Save user uploads helper
  const saveToStorage = (updatedList: GalleryItem[]) => {
    localStorage.setItem('garg_gallery_uploads', JSON.stringify(updatedList));
    setUploadedPhotos(updatedList);
  };

  // Trigger brief alert/notification
  const triggerNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification({ type: null, message: '' });
    }, 4500);
  };

  // Filter handlers
  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'showroom', label: 'Showroom & Stock' },
    { id: 'machines', label: 'Welding Machines' },
    { id: 'accessories', label: 'Hose & Spares' },
    { id: 'uploads', label: 'My Uploaded Photos' },
  ];

  // Merge lists
  const allItems = [...uploadedPhotos, ...defaultItems];

  // Filter items
  const filteredItems = allItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  // Handle Drag & Drop events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      triggerNotification('error', 'Only image files (PNG, JPG, JPEG) are allowed.');
      return;
    }
    // Limit to 2.5MB to prevent filling up the 5MB browser localStorage quota quickly
    if (file.size > 2.5 * 1024 * 1024) {
      triggerNotification('error', 'Image size exceeds 2.5MB. Please upload a compressed or smaller image.');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleCancelFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewUrl) {
      triggerNotification('error', 'Please select or drag an image first.');
      return;
    }

    const titleText = title.trim() || selectedFile?.name.split('.')[0] || 'Uploaded Photo';
    const descText = description.trim() || 'Custom showroom reference photo uploaded by user.';

    const newItem: GalleryItem = {
      id: `user-img-${Date.now()}`,
      title: titleText,
      category: category,
      image: previewUrl,
      description: descText,
      isUserUploaded: true,
      timestamp: Date.now()
    };

    const updatedList = [newItem, ...uploadedPhotos];
    saveToStorage(updatedList);
    
    // Reset form states
    setTitle('');
    setDescription('');
    setSelectedFile(null);
    setPreviewUrl(null);
    setCategory('uploads');
    
    triggerNotification('success', `"${titleText}" uploaded successfully to your local gallery!`);
    
    // Auto switch view to Uploads category to show the user's newest post
    setActiveFilter('uploads');
  };

  // Delete user uploaded item
  const handleDeleteItem = (id: string, itemTitle: string) => {
    if (window.confirm(`Are you sure you want to delete "${itemTitle}" from your gallery?`)) {
      const updatedList = uploadedPhotos.filter(item => item.id !== id);
      saveToStorage(updatedList);
      triggerNotification('success', `"${itemTitle}" was deleted.`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">Live Media Hub</span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-900 tracking-tight">
            Garg Trading Photo Gallery
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto">
            Browse our heavy machine stock, showroom layouts, and specialized welding systems. Use the uploader tool to add real-time custom stock photos directly.
          </p>
        </div>

        {/* Upload Segment Panel */}
        <section className="bg-white rounded-3xl border border-zinc-200 shadow-xs overflow-hidden">
          <div className="border-b border-zinc-100 bg-zinc-50/40 p-6">
            <h2 className="font-display font-black text-lg sm:text-xl text-zinc-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-orange-600" />
              <span>Real-Time Stock Photo Uploader</span>
            </h2>
            <p className="text-zinc-500 text-xs mt-1">
              Store real-time warehouse pictures or client delivery snapshots. Images are saved locally inside your browser's secure data cache.
            </p>
          </div>

          <div className="p-6 md:p-8">
            {/* Notification alert toast */}
            <AnimatePresence>
              {notification.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-xl flex items-start gap-3 border text-xs sm:text-sm font-sans ${
                    notification.type === 'success' 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}
                  id="gallery-toast"
                >
                  {notification.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold block">
                      {notification.type === 'success' ? 'Success' : 'Upload Denied'}
                    </span>
                    <p className="mt-0.5">{notification.message}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Dropzone Upload Box (Col 7) */}
              <div className="lg:col-span-7">
                {!previewUrl ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all flex flex-col items-center justify-center min-h-[280px] cursor-pointer relative ${
                      isDragging 
                        ? 'border-orange-500 bg-orange-50/40' 
                        : 'border-zinc-200 hover:border-orange-500/50 hover:bg-zinc-50/50'
                    }`}
                  >
                    <input 
                      type="file" 
                      id="file-upload-input" 
                      accept="image/*" 
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-2xs">
                      <Upload className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-black text-base text-zinc-900 tracking-tight">
                      Drag & Drop Photo Here
                    </h3>
                    <p className="text-zinc-500 text-xs max-w-xs mt-1.5 font-sans">
                      Or click to browse from device. Supports JPG, JPEG, and PNG.
                    </p>

                    <div className="mt-6 flex items-center gap-1.5 bg-zinc-100 border border-zinc-200/60 text-zinc-500 rounded-lg px-3 py-1.5 text-[10px] font-mono">
                      <Info className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Max recommended resolution limit: 2.5 MB</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative aspect-video max-h-[300px] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-inner flex items-center justify-center">
                      <img 
                        src={previewUrl} 
                        alt="Preview upload" 
                        className="max-h-full object-contain"
                      />
                      <button 
                        type="button"
                        onClick={handleCancelFile}
                        className="absolute top-4 right-4 bg-zinc-900/90 hover:bg-red-600 text-white p-2 rounded-full transition-all cursor-pointer shadow-md border border-zinc-800"
                        title="Cancel photo select"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-xs text-zinc-500 font-mono bg-zinc-50 p-3 rounded-xl border border-zinc-200/60">
                      <span>File Selected: {selectedFile?.name}</span>
                      <span>({(selectedFile!.size / (1024 * 1024)).toFixed(2)} MB)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Upload Meta Form (Col 5) */}
              <div className="lg:col-span-5 bg-zinc-50/50 rounded-2xl p-5 border border-zinc-200/80">
                <form onSubmit={handleUploadSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-sm text-zinc-800 uppercase tracking-wider mb-2">Photo specifications</h3>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-zinc-600 block">Photo Title *</label>
                    <input 
                      type="text" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. MKG MMA-300 Delivery Stock" 
                      className="w-full bg-white border border-zinc-200 focus:border-orange-500 focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-zinc-600 block">Category Label *</label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full bg-white border border-zinc-200 focus:border-orange-500 focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                    >
                      <option value="uploads">My Uploads</option>
                      <option value="showroom">Showroom & Stock</option>
                      <option value="machines">Welding Machines</option>
                      <option value="accessories">Hose & Spares</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-zinc-600 block">Short Description / Details</label>
                    <textarea 
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. Stacked physical inventory of dual voltage inverters loaded at our Kolkata Room No. 1 dispatch bay." 
                      className="w-full bg-white border border-zinc-200 focus:border-orange-500 focus:outline-hidden text-sm rounded-lg p-2.5 font-sans text-xs"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={!previewUrl}
                      className="w-full text-center bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-200 disabled:text-zinc-400 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Add to Live Gallery View</span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Gallery Grid Feed Segment */}
        <section className="space-y-8">
          
          {/* Filters Bar & Quick Search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-zinc-200">
            {/* Filter tags buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-zinc-400 text-xs font-mono mr-2 hidden lg:inline">Filters:</span>
              {filters.map(filt => (
                <button
                  key={filt.id}
                  onClick={() => setActiveFilter(filt.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === filt.id 
                      ? 'bg-zinc-900 text-white shadow-sm' 
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 bg-white border border-zinc-200/80'
                  }`}
                >
                  {filt.label}
                  {filt.id === 'uploads' && uploadedPhotos.length > 0 && (
                    <span className="ml-1.5 bg-orange-600 text-white px-1.5 py-0.5 rounded-full text-[9px] font-mono">
                      {uploadedPhotos.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 bg-white border border-zinc-200 rounded-lg px-3 py-2 shrink-0 self-start">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Showing {filteredItems.length} elements</span>
            </div>
          </div>

          {/* Dynamic Feed Grid */}
          {filteredItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-zinc-200 border-dashed space-y-4"
            >
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 mx-auto border border-zinc-100">
                <ImageIcon className="w-7 h-7" />
              </div>
              <div className="space-y-1.5 max-w-xs mx-auto">
                <h4 className="font-display font-black text-base text-zinc-900 tracking-tight">
                  No images found
                </h4>
                <p className="text-zinc-500 text-xs font-sans">
                  {activeFilter === 'uploads' 
                    ? 'You have not uploaded any photo references to your local gallery yet.' 
                    : 'No photos fit your active filtration selection parameters.'}
                </p>
              </div>
              {activeFilter === 'uploads' && (
                <button
                  onClick={() => {
                    const el = document.getElementById('file-upload-input');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Choose Your First Image
                </button>
              )}
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-orange-500/20 shadow-2xs hover:shadow-lg transition-all flex flex-col group relative"
                  >
                    {/* Visual Panel frame */}
                    <div className="relative aspect-video bg-zinc-50 overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Interactive click overlay with blur glass effect */}
                      <div className="absolute inset-0 bg-zinc-950/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setLightboxImage({ src: item.image, alt: item.description, title: item.title })}
                            className="bg-white hover:bg-orange-600 hover:text-white text-zinc-900 px-4 py-2.5 rounded-xl shadow-md font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                            title="Zoom High-Res"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Full Size</span>
                          </button>
                          
                          {item.isUserUploaded && (
                            <button
                              type="button"
                              onClick={() => handleDeleteItem(item.id, item.title)}
                              className="bg-zinc-900 hover:bg-red-600 text-white p-2.5 rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center"
                              title="Delete Upload"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Tag stamp badge */}
                      <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-xs text-white text-[9px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-md shadow-sm z-10 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>{item.category === 'uploads' ? 'My Upload' : item.category.toUpperCase()}</span>
                      </div>

                      {/* Delete icon for mobile visible immediately */}
                      {item.isUserUploaded && (
                        <div className="absolute top-4 right-4 z-10 block lg:hidden">
                          <button
                            type="button"
                            onClick={() => handleDeleteItem(item.id, item.title)}
                            className="bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Content Panel */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display font-black text-sm sm:text-base text-zinc-900 tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-zinc-500 text-xs leading-relaxed font-sans line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-100">
                        <span>Source: {item.isUserUploaded ? 'Your Device' : 'HQ Factory Showroom'}</span>
                        {item.timestamp && (
                          <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                        )}
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

// Help sub-component: CheckCircle2 alias
function CheckCircle2(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// Help sub-component: X icon
function X(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
