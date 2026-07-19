import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, MapPin, History, Sparkles, Award, 
  Flame, HardHat, Hammer, Anchor, ArrowRight, Building2, ExternalLink
} from 'lucide-react';

const PRODUCT_CATEGORIES = [
  {
    title: 'Welding Category',
    icon: Flame,
    items: [
      'Welding inverter',
      'Welding transformer',
      'Welding rectifier',
      'Welding electrodes',
      'Welding cables',
      'Welding holder',
      'Welding screens',
      'Welding glass',
      'Welding gloves',
      'Welding goggles',
      'Welding torch',
      'Other related accessories'
    ]
  },
  {
    title: "Gas Cutting Equipment's",
    icon: Anchor,
    items: [
      'Gas cutting torch',
      'Gas regulators',
      'Hose pipes',
      'Cutting nozzles',
      'Flashback arrestors',
      'Hose clamps',
      'Gas lighters',
      'Gas fluxes',
      'Cylinder keys',
      'Cutting goggles',
      'Other related products'
    ]
  },
  {
    title: "Tig/Mig/Plasma Equipment's",
    icon: Sparkles,
    items: [
      'Mig/tig/plasma machines',
      'Tig rods',
      'Filler rods',
      'Tig torches',
      'Mig wires',
      'Mig torches',
      'Plasma electrode',
      'Plasma nozzle',
      'Plasma torches',
      'Other related accessories'
    ]
  },
  {
    title: 'Safety Accessories',
    icon: HardHat,
    items: [
      'Safety helmet',
      'Safety belt/harness',
      'Safety gloves',
      'Safety shoes',
      'Safety goggles',
      'Safety jackets',
      'Safety cones',
      'Safety barricades',
      'Safety tapes',
      'Gum boots',
      'Fall arrestors',
      'Nose masks',
      'Fogging machines',
      'Sanitiser',
      'Medical gloves',
      'Safety nets and ropes',
      'Other related accessories'
    ]
  },
  {
    title: 'Grinding & Cutting Items',
    icon: Hammer,
    items: [
      'Grinding machines',
      'Drill machines',
      'All-cut kore drilling machines',
      'Chop-saw machines',
      'Grinding wheels',
      'Cutting wheels',
      'Drill bits',
      'Kore bits'
    ]
  },
  {
    title: 'Lifting Items',
    icon: Award,
    items: [
      'Chain pulley blocks',
      'Wire ropes',
      'D-shackles',
      'U clamps',
      'Hydraulic jacks',
      'Lifting belts'
    ]
  }
];

const OFFERING_BRANDS = [
  { name: 'Esab', desc: 'Welding and cutting equipments' },
  { name: 'Ador', desc: 'Welding electrodes' },
  { name: 'D&H Secheron', desc: 'Welding electrodes' },
  { name: 'D&H India', desc: 'Welding electrodes' },
  { name: 'L&t Ewac', desc: 'Reclamation repair & maintenance electrodes/fluxes' },
  { name: 'Shiva Weld', desc: 'MS electrodes' },
  { name: 'Mkg Power Beyond', desc: 'Welding inverters and machines' },
  { name: 'Bohler welding', desc: 'Welding electrodes and filler rods' },
  { name: 'Superon', desc: 'Welding electrodes and wires' },
  { name: 'Bosch', desc: 'Power tools' },
  { name: 'Ingco', desc: 'Power tools' },
  { name: 'Dewalt', desc: 'Power tools' },
  { name: 'Kpt', desc: 'Power tools' },
  { name: 'Eiben-stock', desc: 'Core cutting machines and bits' },
  { name: 'Schiffler', desc: 'Core bits' },
  { name: 'Karam', desc: 'Safety products' },
  { name: 'Udyogi', desc: 'Safety products' },
  { name: 'Jain Arc', desc: 'Welding transformers & rectifiers' },
  { name: 'Yes tecno', desc: 'MIG wires' },
  { name: 'Tiger', desc: 'Safety shoes' },
  { name: 'Indo Arc', desc: 'Safety shoes' },
  { name: 'Superb', desc: 'Welding cables' },
  { name: 'Cmo', desc: 'Gas cutting equipments' },
  { name: 'Hmp', desc: 'Gas cutting equipments' },
  { name: 'Action', desc: 'Safety shoes, gum boots & safety accessories' }
];

export default function AboutView() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] py-16 px-4 sm:px-6 lg:px-8 text-[#f8f7f4]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#ff4d00] bg-[#ff4d00]/10 px-2.5 py-1.5 border border-[#ff4d00]/20 rounded-none">
            Established Since 1984
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#f8f7f4] uppercase tracking-tight">
            Our Legacy & Expertise
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
            We serve as a vital dealership link for elite engineering groups, power plants, and core construction projects.
          </p>
        </div>

        {/* Brand Banner Panel */}
        <section className="bg-zinc-950 border border-zinc-900 p-8 sm:p-10 relative overflow-hidden rounded-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d00]/5 rounded-none blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-[#ff4d00]/10 text-[#ff4d00] text-[10px] font-mono font-black px-2.5 py-1 rounded-none border border-[#ff4d00]/20">
                <History className="w-3.5 h-3.5" />
                <span>OVER 40 YEARS OF EXCELLENCE</span>
              </div>
              
              <h1 className="font-display font-black text-[24px] text-[#f8f7f4] tracking-tight leading-[24px] uppercase">
                Garg Trading Company
              </h1>
              
              <div className="space-y-4 text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                <p>
                  We are glad to inform you that we are dealing in the following industrial and safety products <span className="text-[#ff4d00] font-black">since 1984</span> and have deep expertise and specialized knowledge of the same.
                </p>
                <p>
                  We proudly serve a wide number of quality customers such as <span className="text-[#f8f7f4] font-semibold">power plants, construction sites, metro railways, industrial units, fabrication units, and other major factories</span>.
                </p>
                <p>
                  Strategically located on <span className="text-[#f8f7f4] font-semibold">Strand Road, Kolkata</span>, we cater directly to manufacturing, structural, railway, and high-intensity shipyard operations.
                </p>
                <p>
                  By maintaining immediate direct logistics agreements with leading manufacturing hubs, we eliminate secondary brokers to offer maximum trade discounts.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900">
                <div className="text-sm font-display font-black text-[#ff4d00] uppercase tracking-wide">
                  Best products and services are our assurance to you.
                </div>
              </div>
            </div>

            {/* Right Side Trust Grid */}
            <div className="lg:col-span-5 bg-[#0c0c0e] p-6 border border-zinc-900 rounded-none space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#ff4d00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-[#f8f7f4]">
                    GST Verified Supplier
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    GSTIN: 19ACQPA7206G1ZM. Complete transparent compliance for industrial billing and logistics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-zinc-900 pt-4">
                <Building2 className="w-5 h-5 text-[#ff4d00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-[#f8f7f4]">
                    Central Showroom
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Centrally situated in the Kolkata core market district, offering live stock demos and over-the-counter supply.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-zinc-900 pt-4">
                <MapPin className="w-5 h-5 text-[#ff4d00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-[#f8f7f4]">
                    Kolkata Core District
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    40 Strand Road, Ground Floor, Room No. 1, Kolkata - 700 001. Direct freight link to key states.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Product Categories Overview */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#ff4d00] uppercase">
              OUR SPECIALIZED PRODUCT DIRECTORY
            </span>
            <h3 className="font-display font-black text-2xl text-[#f8f7f4] uppercase tracking-tight">
              Please contact us for following items
            </h3>
            <p className="text-zinc-500 text-xs italic">
              (Details of particular items required can be shared on request)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((cat, i) => {
              const IconComp = cat.icon;
              return (
                <div key={i} className="bg-zinc-950 border border-zinc-900 p-6 flex flex-col justify-between rounded-none shadow-2xs hover:border-[#ff4d00]/30 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#ff4d00]/10 border border-[#ff4d00]/20 flex items-center justify-center text-[#ff4d00] rounded-none">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-black text-xs uppercase tracking-wide text-[#f8f7f4]">
                        {cat.title}
                      </h4>
                    </div>

                    <ul className="space-y-1.5">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-zinc-400 text-xs font-sans">
                          <span className="text-[#ff4d00] mt-1 text-[10px]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified Roof Callout Banner */}
          <div className="bg-[#ff4d00]/5 border border-[#ff4d00]/15 p-6 text-center space-y-2.5 rounded-none">
            <div className="text-[#ff4d00] font-display font-black text-base uppercase tracking-wider">
              All products are readily available under one roof
            </div>
            <p className="text-zinc-400 text-xs max-w-2xl mx-auto">
              Our showroom is centrally located in Kolkata. Do visit us for a better exposure of our high-performance products and customized trade deals.
            </p>
          </div>
        </section>

        {/* Brands offering breakdown */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#ff4d00] uppercase">
              VERIFIED COMPREHENSIVE DIRECTORY
            </span>
            <h3 className="font-display font-black text-2xl text-[#f8f7f4] uppercase tracking-tight">
              Some of Our Offering Brands
            </h3>
            <p className="text-zinc-500 text-xs">
              Direct access to standard warranty, accessories, and complete product brochures
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {OFFERING_BRANDS.map((brand, i) => (
              <div 
                key={i}
                className="bg-zinc-950 border border-zinc-900 hover:border-[#ff4d00]/40 p-4 rounded-none transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <h4 className="font-display font-black text-[#ff4d00] text-xs sm:text-sm uppercase tracking-wider leading-none">
                    {brand.name}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-sans mt-2 group-hover:text-zinc-400 transition-colors">
                    {brand.desc}
                  </p>
                </div>
                
                <div className="mt-3 pt-2 border-t border-zinc-900/50 flex justify-between items-center text-[8px] font-mono text-zinc-600">
                  <span>AUTHORIZED STOCK</span>
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#ff4d00]" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-zinc-500 text-xs font-mono py-2">
            ...and many more premium industrial brands available in-store.
          </div>
        </section>

      </div>
    </div>
  );
}
