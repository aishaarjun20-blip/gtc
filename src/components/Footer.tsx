import React from 'react';
import { Phone, Mail, MapPin, Shield, Award, Clock } from 'lucide-react';
import { BRANDS } from '../data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900">
      {/* Brands strip */}
      <div className="border-b border-zinc-900 bg-zinc-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest font-bold">Authorized Distribution & Dealership Network</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {BRANDS.map((b) => (
              <span 
                key={b.name} 
                className="bg-zinc-950 text-zinc-300 hover:text-orange-500 hover:bg-zinc-900 border border-zinc-800 hover:border-orange-500/20 px-3 py-1.5 rounded-md text-xs font-bold font-mono tracking-wider transition-all cursor-pointer"
                onClick={() => setCurrentPage('products')}
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-extrabold text-lg">
                G
              </div>
              <span className="font-display font-black text-lg tracking-tight">GARG TRADING</span>
            </div>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              We provide industrial welding, cutting, safety, power tools, lifting, and hand tool solutions. Authorized supplier of premium global and national brands.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Shield className="w-4 h-4 text-orange-500" />
              <span>GSTIN: 19ACQPA7206G1ZM</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-orange-500">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home Showroom
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Product Catalog
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Our Heritage
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom Location */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-orange-500">Kolkata Office</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  40, Strand Road,<br />
                  Ground Floor, Room No. - 1,<br />
                  Kolkata - 700 001, West Bengal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Mon - Sat: 11:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-orange-500">Direct Contacts</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="tel:+919836746409" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Mohit Agarwal: +91 98367 46409</span>
              </a>
              <a href="tel:+919331276330" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Sunil Agarwal: +91 93312 76330</span>
              </a>
              <a href="mailto:gtc.mohit@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="truncate">gtc.mohit@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
          <div>
            <span>© {currentYear} Garg Trading Company. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-orange-500" />
            <span>Authorized Partner & Solution Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
