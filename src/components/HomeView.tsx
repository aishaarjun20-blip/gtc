import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, ShieldAlert, Wrench, ArrowUpCircle, Settings, 
  ArrowRight, Phone, Mail, MapPin, Sparkles, Award, Star
} from 'lucide-react';
import { PRODUCTS, BRANDS } from '../data';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  setSelectedProductId: (id: string) => void;
  setOpenQuoteModal: (open: boolean) => void;
  setQuoteProductModel: (model: string) => void;
}

export default function HomeView({ 
  setCurrentPage, 
  setSelectedProductId, 
  setOpenQuoteModal,
  setQuoteProductModel 
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
    <div className="font-sans min-h-screen bg-zinc-50">
      
      {/* 1. Dramatic Hero Section */}
      <section className="relative h-[550px] md:h-[650px] bg-zinc-950 flex items-center overflow-hidden">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/garg_trading_hero_1783508653096.jpg" 
            alt="Garg Trading Workshop Showroom" 
            className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent z-10" />
        </div>

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-white w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-orange-600/90 text-white text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-orange-500/30">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>Authorized dealer & direct importer</span>
            </div>
            
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none">
              Power Beyond <span className="text-orange-500">Limits.</span>
            </h1>
            
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
              Welcome to <strong className="text-white font-semibold">Garg Trading Company</strong>. We deliver cutting-edge industrial technology, special welding alloys, safe lifting systems, and power accessories. Providing elite equipment from global names.
            </p>

            {/* Industrial category tag list */}
            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold uppercase text-zinc-400">
              <span className="bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-md">WELDING</span>
              <span className="bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-md">CUTTING</span>
              <span className="bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-md">SAFETY</span>
              <span className="bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-md">LIFTING</span>
              <span className="bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-md">POWER TOOLS</span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setCurrentPage('products')}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                id="hero-view-products-btn"
              >
                <span>Browse Products with Photos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold border border-zinc-800 px-7 py-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
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
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-zinc-100 hover:border-orange-500/25 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-orange-600 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>View Catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Products Gallery */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">Premier Offerings</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-900 mt-2">
                Featured MKG™ Welding Systems
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base mt-2 max-w-xl">
                Explore our catalog with full high-resolution photographs, robust specifications, and direct access to pricing request forms.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('products')}
              className="flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-500 group cursor-pointer shrink-0"
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all flex flex-col group shadow-xs"
              >
                {/* Product Image Panel */}
                <div className="relative aspect-square bg-zinc-100 overflow-hidden shrink-0">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {prod.phase}
                  </div>
                  <div className="absolute top-4 right-4 bg-zinc-950/80 text-zinc-300 text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {prod.brand}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-orange-600">{prod.category.toUpperCase()} INVERTER</span>
                    <h3 className="font-display font-black text-xl text-zinc-900 tracking-tight leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm font-sans line-clamp-2">
                      {prod.tagline}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="my-4 pt-4 border-t border-zinc-100 space-y-1.5">
                    {prod.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-600">
                        <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0 mt-2" />
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
                      className="flex-1 text-center bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer"
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => {
                        setQuoteProductModel(prod.model);
                        setOpenQuoteModal(true);
                      }}
                      className="flex-1 text-center bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer"
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
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">DEALER NETWORK</span>
          <h2 className="font-display font-black text-3xl text-zinc-900 mt-3 mb-2">
            Industry Names We Support
          </h2>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto mb-12">
            Bringing elite heavy tools, special welding materials, and precision safety equipment to the Indian industrial market.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {BRANDS.map((b) => (
              <div 
                key={b.name}
                onClick={() => setCurrentPage('products')}
                className="bg-white rounded-xl p-5 border border-zinc-100 hover:border-orange-500/30 transition-all cursor-pointer text-center group shadow-2xs hover:shadow-md"
              >
                <div className="h-10 flex items-center justify-center font-display font-black text-zinc-400 group-hover:text-orange-600 text-lg tracking-wider transition-colors">
                  {b.logoText}
                </div>
                <div className="mt-1 text-[10px] font-mono text-zinc-400 font-semibold truncate leading-none">
                  {b.name}
                </div>
                <p className="text-[9px] text-zinc-500 font-sans mt-1.5 leading-tight group-hover:text-zinc-600 transition-colors line-clamp-1">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Kolkata Showroom Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 rounded-3xl overflow-hidden shadow-xl text-white relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16 space-y-6">
                <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1 rounded-md">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>KOLKATA SHOWROOM SHOWCASE</span>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-tight">
                  Visit Our Strand Road Headquarters
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Located in Kolkata's prime industrial hub on Strand Road, our showroom houses our physical inventory. Drop by to view live equipment configurations, purchase consumables, or consult our engineering experts.
                </p>

                <div className="space-y-4 font-sans text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>40, Strand Road, Ground Floor, Room No. - 1, Kolkata - 700 001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span>Mohit Agarwal: +91 98367 46409</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span>gtc.mohit@gmail.com</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>View Driving Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Showroom visual representation */}
              <div className="bg-zinc-900 p-8 sm:p-12 flex flex-col justify-center border-l border-zinc-900">
                <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950/50 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                    <span className="text-xs font-mono text-zinc-500 font-bold uppercase">Store Configuration</span>
                    <span className="text-xs font-mono text-emerald-500 font-bold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Open Now</span>
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3 bg-zinc-900 rounded-lg">
                      <span className="text-zinc-500 block">Monday - Saturday</span>
                      <span className="text-zinc-200 font-bold block mt-1">10:00 AM - 7:30 PM</span>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg">
                      <span className="text-zinc-500 block">Sundays</span>
                      <span className="text-zinc-200 font-bold block mt-1">Prior Appointment Only</span>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg">
                      <span className="text-zinc-500 block">Authorized Brands</span>
                      <span className="text-zinc-200 font-bold block mt-1">MKG, Bosch, Esab, Ador</span>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg">
                      <span className="text-zinc-500 block">Payment Methods</span>
                      <span className="text-zinc-200 font-bold block mt-1">UPI, NEFT, Cheque, Cards</span>
                    </div>
                  </div>

                  <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-4 text-xs text-orange-400">
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
