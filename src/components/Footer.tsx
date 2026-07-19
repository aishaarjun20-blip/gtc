import React from 'react';
import { Phone, Mail, MapPin, Shield, Award, Clock } from 'lucide-react';
import { BRANDS } from '../data';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0e] text-[#f8f7f4] border-t border-zinc-800/80">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="space-y-3">
              <Logo height={42} />
              <div className="font-display font-black text-sm tracking-tight text-[#f8f7f4] uppercase">
                GARG TRADING COMPANY
              </div>
            </div>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              We provide industrial welding, cutting, safety, power tools, lifting, and hand tool solutions. Authorized supplier of premium global and national brands.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Shield className="w-4 h-4 text-[#ff4d00]" />
              <span>GSTIN: 19ACQPA7206G1ZM</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#ff4d00] font-mono">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <button onClick={() => setCurrentPage('home')} className="hover:text-[#ff4d00] transition-colors cursor-pointer text-left font-mono text-xs uppercase tracking-wider">
                  Home Showroom
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-[#ff4d00] transition-colors cursor-pointer text-left font-mono text-xs uppercase tracking-wider">
                  Product Catalog
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-[#ff4d00] transition-colors cursor-pointer text-left font-mono text-xs uppercase tracking-wider">
                  About Our Heritage
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-[#ff4d00] transition-colors cursor-pointer text-left font-mono text-xs uppercase tracking-wider">
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom Location */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#ff4d00] font-mono">Kolkata Office</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#ff4d00] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  40, Strand Road,<br />
                  Ground Floor, Room No. - 1,<br />
                  Kolkata - 700 001, West Bengal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#ff4d00]" />
                <span className="font-mono text-xs">Mon - Sat: 11:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#ff4d00] font-mono">Direct Contacts</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="tel:+919836746409" className="flex items-center gap-2 hover:text-[#ff4d00] transition-colors">
                <Phone className="w-4 h-4 text-[#ff4d00]" />
                <span>Mohit Agarwal: +91 98367 46409</span>
              </a>
              <a href="tel:+919331276330" className="flex items-center gap-2 hover:text-[#ff4d00] transition-colors">
                <Phone className="w-4 h-4 text-[#ff4d00]" />
                <span>Sunil Agarwal: +91 93312 76330</span>
              </a>
              <a href="mailto:gtc.mohit@gmail.com" className="flex items-center gap-2 hover:text-[#ff4d00] transition-colors">
                <Mail className="w-4 h-4 text-[#ff4d00]" />
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
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Award className="w-4 h-4 text-[#ff4d00]" />
            <span>Authorized Partner & Solution Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
