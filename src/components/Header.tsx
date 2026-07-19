import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0c0e]/95 border-b border-zinc-800/80 backdrop-blur-md">
      {/* Top bar with quick info */}
      <div className="bg-black/40 border-b border-zinc-900/80 text-[#f8f7f4] text-[11px] py-2 px-4 sm:px-6 lg:px-8 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-[#ff4d00] font-bold">JAI MATA DI</span>
            <span className="text-zinc-800">|</span>
            <span>GSTIN: 19ACQPA7206G1ZM</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-zinc-300">
            <div className="flex items-center gap-3">
              <a href="tel:+919836746409" className="flex items-center gap-1.5 hover:text-[#ff4d00] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#ff4d00]" />
                <span>Mohit: +91 98367 46409</span>
              </a>
              <a 
                href="https://wa.me/919836746409" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 border border-emerald-500/20 transition-all"
                title="Chat on WhatsApp with Mohit"
              >
                <span>WhatsApp</span>
              </a>
            </div>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <div className="flex items-center gap-3">
              <a href="tel:+919331276330" className="flex items-center gap-1.5 hover:text-[#ff4d00] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#ff4d00]" />
                <span>Sunil: +91 93312 76330</span>
              </a>
              <a 
                href="https://wa.me/919331276330" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 border border-emerald-500/20 transition-all"
                title="Chat on WhatsApp with Sunil"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand area */}
          <div 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center gap-3.5 cursor-pointer group"
            id="header-brand-logo"
          >
            <Logo height={42} className="transition-transform duration-300 group-hover:scale-102 shrink-0" />
            <div className="hidden sm:block border-l border-zinc-800 h-10 pl-3.5">
              <div className="font-display font-black text-lg tracking-tight text-[#f8f7f4] leading-tight group-hover:text-[#ff4d00] transition-colors">
                GARG TRADING COMPANY
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 leading-none mt-1">
                Industrial Welding & Tools Specialist
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-desktop-${item.id}`}
                  onClick={() => setCurrentPage(item.id)}
                  className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#ff4d00]' 
                      : 'text-zinc-400 hover:text-[#f8f7f4]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#ff4d00]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => setCurrentPage('products')}
              className="ml-4 bg-[#ff4d00] hover:bg-[#e04400] text-black px-5 py-2.5 font-display font-black text-xs uppercase tracking-wider transition-all cursor-pointer rounded-none"
              id="nav-catalog-btn"
            >
              Explore Catalog
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-zinc-400 hover:text-[#f8f7f4] hover:bg-zinc-900 focus:outline-hidden cursor-pointer"
              aria-expanded="false"
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-800 bg-[#0c0c0e]"
            id="mobile-navigation-drawer"
          >
            <div className="px-2 pt-3 pb-6 space-y-1.5 shadow-inner">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-mobile-${item.id}`}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 font-mono text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-zinc-900/60 text-[#ff4d00]' 
                        : 'text-zinc-400 hover:bg-zinc-900/30 hover:text-[#f8f7f4]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4 border-t border-zinc-900">
                <button
                  onClick={() => {
                    setCurrentPage('products');
                    setIsOpen(false);
                  }}
                  className="w-full text-center bg-[#ff4d00] hover:bg-[#e04400] text-black py-3 font-display font-black text-sm uppercase tracking-wider rounded-none"
                >
                  Explore Catalog
                </button>
                <div className="mt-4 flex flex-col gap-2.5 text-[11px] text-zinc-500 font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#ff4d00]" />
                    <span>40, Strand Road, Kolkata - 700001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#ff4d00]" />
                    <span>gtc.mohit@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
