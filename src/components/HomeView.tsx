import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, ShieldAlert, Wrench, ArrowUpCircle, Settings, 
  ArrowRight, Phone, Mail, MapPin, Sparkles, Award, Star, ZoomIn
} from 'lucide-react';
import { PRODUCTS, BRANDS } from '../data';
import gargTradingHero from '../assets/images/garg_trading_hero_1783838198658.jpg';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  setSelectedProductId: (id: string) => void;
  setOpenQuoteModal: (open: boolean) => void;
  setQuoteProductModel: (model: string) => void;
  setLightboxImage: (image: { src: string, alt: string, title?: string } | null) => void;
}

function BrandCard({ brand }: { brand: typeof BRANDS[0]; key?: string | number }): React.JSX.Element {
  const [imgFailed, setImgFailed] = React.useState(!brand.logo);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement | HTMLAnchorElement>) => {
    if (e.key === 'Enter' && brand.url) {
      window.open(brand.url, '_blank', 'noopener,noreferrer');
    }
  };

  const cardClasses = `group relative bg-zinc-950 border border-zinc-900 hover:border-[#ff4d00] hover:bg-zinc-900/60 p-6 flex flex-col justify-between items-center text-center min-h-[160px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4d00] transition-all duration-300 ease-out hover:-translate-y-1 rounded-none ${
    brand.url ? 'cursor-pointer' : 'cursor-default'
  }`;

  const content = (
    <>
      <div className="w-full flex-1 flex items-center justify-center min-h-[70px]">
        {!imgFailed && brand.logo ? (
          <img
            src={brand.logo}
            alt={`${brand.name} official logo`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="max-h-11 max-w-[85%] object-contain select-none opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="font-display font-black text-zinc-600 group-hover:text-[#ff4d00] text-xl tracking-wider transition-colors select-none">
            {brand.logoText}
          </span>
        )}
      </div>
      
      <div className="mt-3 w-full">
        <h4 className="text-zinc-300 group-hover:text-[#f8f7f4] font-bold text-xs uppercase tracking-wider font-mono">
          {brand.name}
        </h4>
        {brand.description && (
          <p className="text-[10px] text-zinc-500 font-sans mt-1 leading-relaxed group-hover:text-zinc-400 transition-colors line-clamp-2">
            {brand.description}
          </p>
        )}
      </div>

      {/* External Link Indicator (only shown if brand has a URL) */}
      {brand.url && (
        <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-3.5 h-3.5 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      )}
    </>
  );

  if (brand.url) {
    return (
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        onKeyDown={handleKeyPress}
        className={cardClasses}
        id={`brand-card-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
        title={`Visit official website of ${brand.name}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyPress}
      className={cardClasses}
      id={`brand-card-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
      title={`${brand.name}`}
    >
      {content}
    </div>
  );
}

export default function HomeView({ 
  setCurrentPage, 
  setSelectedProductId, 
  setOpenQuoteModal,
  setQuoteProductModel,
  setLightboxImage
}: HomeViewProps) {
  
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

  const categories = [
    {
      id: 'mma',
      title: 'MMA / ARC Welding',
      desc: 'Smart inverter systems from 200A to 400A with Inbuilt VRD, Hot Start and Silicon Carbide Technology.',
      icon: Flame,
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'tig',
      title: 'TIG / Gas Welding',
      desc: 'Precision dual-purpose TIG/MMA inverters featuring high frequency (HF) arc ignition and 2T/4T trigger systems.',
      icon: Settings,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'mig',
      title: 'MIG / MAG Welding',
      desc: 'Combined continuous wire feed welding units with advanced MCU control, separate wire feeders, and CO2 heaters.',
      icon: Sparkles,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'plasma',
      title: 'Plasma Cutting',
      desc: 'Advanced cutting solutions offering dross-free clean cuts up to 25mm, pilot arc systems, and inbuilt compressors.',
      icon: ArrowUpCircle,
      color: 'from-red-500 to-rose-600'
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-[#0c0c0e] text-[#f8f7f4]">
      
      {/* 1. Dramatic Hero Section */}
      <section className="relative h-[550px] md:h-[650px] bg-zinc-950 flex items-center overflow-hidden">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={gargTradingHero} 
            alt="Garg Trading Workshop Showroom" 
            className="w-full h-full object-cover opacity-20 filter brightness-50 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c0c0e] to-transparent z-10" />
        </div>

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-white w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#ff4d00]/10 text-[#ff4d00] text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1.5 border border-[#ff4d00]/30 rounded-none">
              <Star className="w-3.5 h-3.5 fill-[#ff4d00]" />
              <span>Authorized dealer & direct importer</span>
            </div>
            
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-none text-[#f8f7f4] uppercase">
              Power Beyond <span className="text-[#ff4d00]">Limits.</span>
            </h1>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              Welcome to <strong className="text-white font-semibold">Garg Trading Company</strong>. We deliver cutting-edge industrial technology, special welding alloys, safe lifting systems, and power accessories. Providing elite equipment from global names.
            </p>

            {/* Industrial category tag list */}
            <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold uppercase text-zinc-500">
              <span className="bg-zinc-950/80 border border-zinc-900 px-2.5 py-1 rounded-none">WELDING</span>
              <span className="bg-zinc-950/80 border border-zinc-900 px-2.5 py-1 rounded-none">CUTTING</span>
              <span className="bg-zinc-950/80 border border-zinc-900 px-2.5 py-1 rounded-none">SAFETY</span>
              <span className="bg-zinc-950/80 border border-zinc-900 px-2.5 py-1 rounded-none">LIFTING</span>
              <span className="bg-zinc-950/80 border border-zinc-900 px-2.5 py-1 rounded-none">POWER TOOLS</span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setCurrentPage('products')}
                className="bg-[#ff4d00] hover:bg-[#e04400] text-black font-display font-black uppercase tracking-wider px-7 py-4 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer group text-xs"
                id="hero-view-products-btn"
              >
                <span>Browse Products with Photos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-transparent hover:bg-zinc-950 text-white font-mono uppercase tracking-wider border border-zinc-800 hover:border-[#ff4d00] px-7 py-4 rounded-none transition-colors cursor-pointer flex items-center justify-center gap-2 text-xs"
                id="hero-contact-btn"
              >
                <span>Get Immediate Quote</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Highlights Segment: Specializations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-16 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => {
                  setCurrentPage('products');
                }}
                className="bg-zinc-950 border border-zinc-900 hover:border-[#ff4d00]/40 hover:bg-zinc-900/40 transition-all cursor-pointer group relative overflow-hidden rounded-none p-6"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-[#ff4d00] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800/80 flex items-center justify-center mb-4 text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-black transition-all rounded-none">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-lg text-[#f8f7f4] mb-2 group-hover:text-[#ff4d00] transition-colors uppercase tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-[#ff4d00] group-hover:text-[#ff4d00]/80 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>View Catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Products Gallery */}
      <section className="py-16 bg-[#0c0c0e] border-y border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#ff4d00] bg-[#ff4d00]/10 px-2.5 py-1.5 border border-[#ff4d00]/20 rounded-none">Premier Offerings</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#f8f7f4] mt-3 uppercase tracking-tight">
                Featured MKG™ Welding Systems
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-xl">
                Explore our catalog with full high-resolution photographs, robust specifications, and direct access to pricing request forms.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('products')}
              className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#ff4d00] hover:text-[#ff4d00]/85 group cursor-pointer shrink-0"
              id="view-all-products-btn"
            >
              <span>View Full Catalog (12 Systems)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col group rounded-none"
              >
                {/* Product Image Panel */}
                <div 
                  className="relative aspect-square bg-zinc-900 overflow-hidden shrink-0 cursor-zoom-in group/img"
                  onClick={() => setLightboxImage({ src: prod.image, alt: prod.model, title: prod.name })}
                  title="Click to view full image"
                >
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover/img:scale-102 transition-transform duration-500 opacity-80 group-hover/img:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover overlay with glass effect and scale zoom icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                    <div className="bg-[#ff4d00] text-black p-2.5 rounded-none shadow-md transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-[#ff4d00] text-black text-[10px] font-mono uppercase font-black tracking-wider px-2.5 py-1 rounded-none shadow-sm z-10">
                    {prod.phase}
                  </div>
                  <div className="absolute top-4 right-4 bg-zinc-950/90 border border-zinc-850 text-zinc-400 text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-none backdrop-blur-xs z-10">
                    {prod.brand}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#ff4d00]">{prod.category.toUpperCase()} INVERTER</span>
                    <h3 className="font-display font-black text-xl text-[#f8f7f4] tracking-tight leading-snug uppercase">
                      {prod.name}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans line-clamp-2">
                      {prod.tagline}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="my-4 pt-4 border-t border-zinc-900/60 space-y-1.5">
                    {prod.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 bg-[#ff4d00] shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedProductId(prod.id);
                        setCurrentPage('products');
                        // Scroll to top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex-1 text-center bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-[#f8f7f4] font-mono uppercase text-[11px] tracking-wider py-3 rounded-none transition-colors border border-zinc-800 cursor-pointer"
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => {
                        setQuoteProductModel(prod.model);
                        setOpenQuoteModal(true);
                      }}
                      className="flex-1 text-center bg-[#ff4d00] hover:bg-[#e04400] text-black font-display font-black uppercase text-[11px] tracking-wider py-3 rounded-none transition-colors cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partner Brand Showcases */}
      <section className="py-16 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#ff4d00] bg-[#ff4d00]/10 px-2.5 py-1.5 border border-[#ff4d00]/20 rounded-none">DEALER NETWORK</span>
          <h2 className="font-display font-black text-3xl text-[#f8f7f4] mt-3 mb-2 uppercase tracking-tight">
            Industry Names We Support
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto mb-12">
            Bringing elite heavy tools, special welding materials, and precision safety equipment to the Indian industrial market.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6" id="brands-support-grid">
            {BRANDS.map((b) => (
              <BrandCard key={b.name} brand={b} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Kolkata Showroom Section */}
      <section className="py-16 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 rounded-none overflow-hidden border border-zinc-900 text-white relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00]/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16 space-y-6">
                <div className="inline-flex items-center gap-1.5 bg-[#ff4d00]/10 text-[#ff4d00] text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1.5 border border-[#ff4d00]/25 rounded-none">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>KOLKATA SHOWROOM SHOWCASE</span>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-tight uppercase">
                  Visit Our Strand Road Headquarters
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Located in Kolkata's prime industrial hub on Strand Road, our showroom houses our physical inventory. Drop by to view live equipment configurations, purchase consumables, or consult our engineering experts.
                </p>

                <div className="space-y-4 font-sans text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#ff4d00] shrink-0 mt-0.5" />
                    <span>40, Strand Road, Ground Floor, Room No. - 1, Kolkata - 700 001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#ff4d00]" />
                    <span>Mohit Agarwal: +91 98367 46409</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#ff4d00]" />
                    <span>gtc.mohit@gmail.com</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="bg-[#ff4d00] hover:bg-[#e04400] text-black font-display font-black uppercase tracking-wider text-xs px-6 py-3.5 rounded-none transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>View Driving Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Showroom visual representation */}
              <div className="bg-zinc-900/30 p-8 sm:p-12 flex flex-col justify-center border-l border-zinc-900">
                <div className="border border-zinc-900 rounded-none p-6 bg-zinc-950/50 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-900">
                    <span className="text-xs font-mono text-zinc-500 font-bold uppercase">Store Configuration</span>
                    <span className="text-xs font-mono text-emerald-500 font-bold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Open Now</span>
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                    <div className="p-3 bg-zinc-900/40 border border-zinc-900 rounded-none">
                      <span className="text-zinc-500 block">Monday - Saturday</span>
                      <span className="text-zinc-300 font-bold block mt-1">11:00 AM - 7:00 PM</span>
                    </div>
                    <div className="p-3 bg-zinc-900/40 border border-zinc-900 rounded-none">
                      <span className="text-zinc-500 block">Sundays</span>
                      <span className="text-zinc-300 font-bold block mt-1">Prior Appointment Only</span>
                    </div>
                    <div className="p-3 bg-zinc-900/40 border border-zinc-900 rounded-none">
                      <span className="text-zinc-500 block">Authorized Brands</span>
                      <span className="text-zinc-300 font-bold block mt-1">MKG, Bosch, Esab, Ador</span>
                    </div>
                    <div className="p-3 bg-zinc-900/40 border border-zinc-900 rounded-none">
                      <span className="text-zinc-500 block">Payment Methods</span>
                      <span className="text-zinc-300 font-bold block mt-1">UPI, NEFT, Cheque, Cards</span>
                    </div>
                  </div>

                  <div className="bg-[#ff4d00]/5 border border-[#ff4d00]/15 rounded-none p-4 text-[11px] text-[#ff4d00]">
                    <strong>Notice:</strong> Please reach out to Mohit Agarwal or Sunil Agarwal prior to visiting for heavy load product demonstrations.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
