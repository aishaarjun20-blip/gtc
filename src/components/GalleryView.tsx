import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Eye, Image as ImageIcon
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

// Import newly uploaded system assets
import migTrolleyFeeder from '../assets/images/mig_trolley_feeder_1783838166873.jpg';
import mkgCutSic from '../assets/images/mkg_cut_sic_1783838643145.jpg';
import mkgMigSic from '../assets/images/mkg_mig_sic_1783838626394.jpg';
import mkgMmaSic from '../assets/images/mkg_mma_sic_1783838608406.jpg';
import mkgTigWelder from '../assets/images/mkg_tig_welder_1783838129019.jpg';
import mmaYellowGrey from '../assets/images/mma_yellow_grey_1783838114397.jpg';
import mma400stWelder from '../assets/images/mma_400st_welder_1783840646987.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'showroom' | 'machines' | 'accessories';
  image: string;
  description: string;
  timestamp?: number;
}

interface GalleryViewProps {
  setLightboxImage: (image: { src: string, alt: string, title?: string } | null) => void;
}

export default function GalleryView({ setLightboxImage }: GalleryViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Curated professional gallery items (includes previous user uploads as system photos)
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
    {
      id: 'sys-mig-trolley',
      title: 'MKG MIG Trolley Feeder Unit',
      category: 'machines',
      image: migTrolleyFeeder,
      description: 'Heavy duty external wire feeder unit with a stable mobile trolley base for large-scale shipyard fabrication.',
    },
    {
      id: 'sys-cut-sic',
      title: 'MKG CUT-100 SiC Plasma Cutter',
      category: 'machines',
      image: mkgCutSic,
      description: 'High efficiency Silicon Carbide inverter plasma cutting system, delivering precise CNC-ready steel separation.',
    },
    {
      id: 'sys-mig-sic',
      title: 'MKG MIG-350 SiC Industrial Welder',
      category: 'machines',
      image: mkgMigSic,
      description: 'Premium MIG/MAG welding machine with SiC power modules, designed for low-spatter gas-shielded fabrication.',
    },
    {
      id: 'sys-mma-sic',
      title: 'MKG MMA-400 SiC Manual Arc Welder',
      category: 'machines',
      image: mkgMmaSic,
      description: 'Silicon Carbide inverter stick welder optimized for highly stable root pass welding in rugged environments.',
    },
    {
      id: 'sys-tig-welder',
      title: 'MKG TIG-200 Pulse TIG/ARC System',
      category: 'machines',
      image: mkgTigWelder,
      description: 'High frequency pulsed TIG welder featuring digital controls and stable arc start for immaculate alloy fabrication.',
    },
    {
      id: 'sys-mma-yellow-grey',
      title: 'MKG Yellow-Grey Series Arc Welder',
      category: 'machines',
      image: mmaYellowGrey,
      description: 'High portability dual-voltage manual metal arc welder featuring dynamic hot start and arc force adjustments.',
    },
    {
      id: 'sys-mma-400st',
      title: 'MKG MMA-400ST Heavy Duty Welder',
      category: 'machines',
      image: mma400stWelder,
      description: 'High-amperage industrial stick welding system optimized for cellulosic electrode performance on overland pipelines.',
    }
  ];

  // Filter handlers
  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'showroom', label: 'Showroom & Stock' },
    { id: 'machines', label: 'Welding Machines' },
    { id: 'accessories', label: 'Hose & Spares' },
  ];

  // Filter items
  const filteredItems = defaultItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const displayCount = filteredItems.length;

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
            Browse our heavy machine stock, showroom layouts, and specialized welding systems.
          </p>
        </div>

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
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 bg-white border border-zinc-200 rounded-lg px-3 py-2 shrink-0 self-start">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Showing {displayCount} elements</span>
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
                  No photos fit your active filtration selection parameters.
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
                        </div>
                      </div>

                      {/* Tag stamp badge */}
                      <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-xs text-white text-[9px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-md shadow-sm z-10 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>{item.category.toUpperCase()}</span>
                      </div>
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
                        <span>Source: HQ Factory Showroom</span>
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
