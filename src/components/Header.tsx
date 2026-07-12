import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-100 shadow-xs">
      {/* Top bar with quick info */}
      <div className="bg-zinc-950 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1 text-zinc-300 font-mono">
            <span className="text-orange-500 font-bold">JAI MATA DI</span>
            <span className="text-zinc-600">|</span>
            <span>GSTIN: 19ACQPA7206G1ZM</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-zinc-300">
            <div className="flex items-center gap-2">
              <a href="tel:+919836746409" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                <Phone className="w-3 h-3 text-orange-500" />
                <span>Mohit: +91 98367 46409</span>
              </a>
              <a 
                href="https://wa.me/919836746409" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded-sm transition-all font-mono"
                title="Chat on WhatsApp with Mohit"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <div className="flex items-center gap-2">
              <a href="tel:+919331276330" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                <Phone className="w-3 h-3 text-orange-500" />
                <span>Sunil: +91 93312 76330</span>
              </a>
              <a 
                href="https://wa.me/919331276330" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded-sm transition-all font-mono"
                title="Chat on WhatsApp with Sunil"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
                </svg>
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
            className="flex items-center gap-3 cursor-pointer group"
            id="header-brand-logo"
          >
            <div className="w-11 h-11 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold italic no-underline text-xl shadow-md shadow-orange-500/20 group-hover:bg-orange-500 transition-colors">
              G
            </div>
            <div>
              <div className="font-display font-black text-lg sm:text-xl tracking-tight text-zinc-900 leading-tight group-hover:text-orange-600 transition-colors">
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
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-orange-600 bg-orange-50' 
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => setCurrentPage('products')}
              className="ml-4 bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 transition-all cursor-pointer"
              id="nav-catalog-btn"
            >
              Explore Catalog
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 focus:outline-hidden cursor-pointer"
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
            className="md:hidden border-t border-zinc-100 bg-white"
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
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-orange-50 text-orange-600' 
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4 border-t border-zinc-100">
                <button
                  onClick={() => {
                    setCurrentPage('products');
                    setIsOpen(false);
                  }}
                  className="w-full text-center bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-lg font-bold shadow-md shadow-orange-500/15"
                >
                  Explore Catalog
                </button>
                <div className="mt-4 flex flex-col gap-2.5 text-xs text-zinc-500 font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span>40, Strand Road, Kolkata - 700001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-orange-600" />
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
