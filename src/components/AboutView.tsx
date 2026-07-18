import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Users, FileCheck2, ShieldCheck, HelpCircle, 
  Sparkles, Award, MapPin, Milestone, History
} from 'lucide-react';
import { BRANDS } from '../data';

export default function AboutView() {
  
  const values = [
    {
      title: 'Genuine Authorized Supplies',
      desc: 'No duplicate or third-party refurbishments. We deal strictly in original factory-sealed products from verified brands with official warranty cards.',
      icon: ShieldCheck
    },
    {
      title: 'Kolkata Hub Logistics',
      desc: 'Operating from Room No. 1, 40 Strand Road, we command centralized logistics to quickly ship heavy inventory across West Bengal and surrounding states.',
      icon: MapPin
    },
    {
      title: 'Full GSTIN Compliance',
      desc: 'All trading, bills, and quotes are fully transparent. Complete invoice validation under registered GSTIN: 19ACQPA7206G1ZM.',
      icon: FileCheck2
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">About Our Company</span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-900 tracking-tight">
            Garg Trading Company
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto">
            Authorized supply specialists of heavy welding systems, cutting equipment, safety gears, power tools and industrial accessories in Kolkata.
          </p>
        </div>

        {/* Brand Banner Panel */}
        <section className="bg-white rounded-3xl border border-zinc-200/80 p-8 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md">
                <History className="w-3.5 h-3.5" />
                <span>ESTABLISHED INDUSTRIAL DEALERS</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-zinc-900 tracking-tight leading-snug">
                Authorized Supplier Network in Kolkata
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Garg Trading Company serves as a vital dealership link for elite engineering groups. Strategically located on Strand Road, Kolkata, we cater directly to manufacturing, structural, railway, and high-intensity shipyard operations.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                By maintaining immediate direct logistics agreements with leading manufacturing hubs, we eliminate secondary brokers to offer maximum trade discounts.
              </p>
            </div>

            {/* Simulated Stamp / Badges list */}
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 divide-y divide-zinc-200/80 space-y-4">
              <div className="pb-4 flex items-start gap-3">
                <Award className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-800">MKG™ Distributor</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Authorised representative of MKG Power Beyond Inverters (MMA, TIG, MIG, and Plasma cutters).</p>
                </div>
              </div>
              <div className="py-4 flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-800">Founder Led Management</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Directed by veteran industry managers Mohit Agarwal and Sunil Agarwal, bringing deep expertise in tool calibration.</p>
                </div>
              </div>
              <div className="pt-4 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-800">Strand Road Showroom</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Equipped showroom holding live physical stock for rapid over-the-counter sales.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values grid */}
        <section className="space-y-8">
          <div className="text-center">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-orange-600">OUR OPERATIONAL STANDARDS</span>
            <h3 className="font-display font-black text-2xl text-zinc-900 mt-2">Core Company Pillars</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-black text-lg text-zinc-900 tracking-tight mb-2">
                    {val.title}
                  </h4>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Brands We Deal In - Catalog breakdown */}
        <section className="bg-zinc-900 rounded-3xl p-8 sm:p-10 text-white space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[9px] font-mono text-orange-500 uppercase tracking-widest font-bold">Comprehensive Product Coverage</span>
              <h3 className="font-display font-black text-2xl mt-1">Dealers of Leading Industrial Brands</h3>
            </div>
            <div className="text-xs font-mono text-zinc-400">
              GSTIN: 19ACQPA7206G1ZM
            </div>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed">
            While we specialize deeply in <strong>MKG™ Welding & Cutting Systems</strong> (including MMA, TIG, MIG, and Plasma cutters), our showroom maintains active stock of products from other certified industrial leaders:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {BRANDS.map((b) => (
              <a 
                key={b.name} 
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 hover:border-orange-500/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-zinc-300 flex flex-col justify-center items-center cursor-pointer select-none"
                title={`Visit official website of ${b.name}`}
              >
                <span className="font-display font-black text-orange-500 text-sm tracking-widest block">{b.logoText}</span>
                <span className="text-[10px] font-mono text-zinc-400 block mt-1 uppercase font-bold">{b.name}</span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
