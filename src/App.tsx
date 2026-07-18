import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import GalleryView from './components/GalleryView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [openQuoteModal, setOpenQuoteModal] = useState<boolean>(false);
  const [quoteProductModel, setQuoteProductModel] = useState<string>('MMA 300ST');
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<{ 
    src: string; 
    alt: string; 
    title?: string;
    isCatalog?: boolean;
    catalogDetails?: {
      subtitle?: string;
      highlights?: string[];
      modelsOrDetails?: string[][];
      brands?: string[];
      whatsappMessage?: string;
    };
  } | null>(null);

  // Handle setting page and ensuring scroll to top
  const handleSetPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView 
            setCurrentPage={handleSetPage} 
            setSelectedProductId={setSelectedProductId}
            setOpenQuoteModal={setOpenQuoteModal}
            setQuoteProductModel={setQuoteProductModel}
            setLightboxImage={setLightboxImage}
          />
        );
      case 'products':
        return (
          <ProductsView 
            selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
            openQuoteModal={openQuoteModal}
            setOpenQuoteModal={setOpenQuoteModal}
            quoteProductModel={quoteProductModel}
            setQuoteProductModel={setQuoteProductModel}
            setLightboxImage={setLightboxImage}
          />
        );
      case 'gallery':
        return <GalleryView setLightboxImage={setLightboxImage} />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView 
            setCurrentPage={handleSetPage} 
            setSelectedProductId={setSelectedProductId}
            setOpenQuoteModal={setOpenQuoteModal}
            setQuoteProductModel={setQuoteProductModel}
            setLightboxImage={setLightboxImage}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 selection:bg-orange-500 selection:text-white" id="gtc-app-root">
      {/* Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={handleSetPage} />

      {/* Main Content Pane with Page Transition Animations */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Block */}
      <Footer setCurrentPage={handleSetPage} />

      {/* Floating WhatsApp Quick Connect Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" id="floating-whatsapp-widget">
        <AnimatePresence>
          {showWhatsAppPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-4 w-72 space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-black uppercase text-emerald-600">WhatsApp Connect</span>
                </div>
                <button 
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="text-zinc-400 hover:text-zinc-600 text-xs font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-zinc-500">
                Click below to start an instant WhatsApp chat with our managing team:
              </p>

              <div className="space-y-2">
                <a 
                  href="https://wa.me/919836746409?text=Hello%20Mohit,%20I%20am%20interested%20in%20welding%20machines." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-zinc-800">Mohit Agarwal</div>
                    <div className="text-[10px] text-zinc-400 font-mono">Retail Sales & General Inquiries</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919331276330?text=Hello%20Sunil,%20I%20am%20interested%20in%20bulk%20quotes%20for%20welding%20machines." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-zinc-800">Sunil Agarwal</div>
                    <div className="text-[10px] text-zinc-400 font-mono">Wholesale & Technical Quotes</div>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setShowWhatsAppPopup(!showWhatsAppPopup)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/35 relative cursor-pointer"
          title="Contact on WhatsApp"
        >
          {/* Pulsing indicator background */}
          <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping opacity-75" />
          
          <svg className="w-7 h-7 relative fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
          </svg>
        </motion.button>
      </div>

      {/* Global Product Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
              id="lightbox-backdrop"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className={`relative z-10 flex flex-col items-center w-full ${
                lightboxImage.isCatalog ? 'max-w-6xl' : 'max-w-4xl'
              } max-h-[90vh]`}
              id="lightbox-content-box"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-2 md:right-0 p-2.5 rounded-full bg-zinc-900/80 hover:bg-orange-600 text-white transition-colors cursor-pointer shadow-md border border-zinc-800 z-20 flex items-center justify-center"
                title="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Inner Layout Box (Split for Catalog, Centered Frame for Normal Photos) */}
              <div className={`w-full overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl ${
                lightboxImage.isCatalog ? 'grid grid-cols-1 md:grid-cols-2 max-h-[80vh] md:max-h-[75vh]' : 'flex items-center justify-center max-h-[85vh]'
              }`}>
                {/* Left Side: Image */}
                <div className={`relative overflow-hidden bg-zinc-900/40 flex items-center justify-center ${
                  lightboxImage.isCatalog ? 'h-[40vh] md:h-[75vh]' : 'max-h-[85vh] p-1'
                }`}>
                  <img
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    className={`object-contain select-none pointer-events-none ${
                      lightboxImage.isCatalog ? 'max-w-full max-h-[38vh] md:max-h-[70vh] p-4' : 'max-w-full max-h-[80vh] p-2 rounded-lg'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Visual Accent Corner Icon */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-zinc-400 text-[10px] font-mono px-2 py-1 rounded-md backdrop-blur-xs flex items-center gap-1 border border-zinc-800/80">
                    <ZoomIn className="w-3.5 h-3.5 text-orange-500" />
                    <span>{lightboxImage.isCatalog ? 'Catalog View' : 'Stock Photo'}</span>
                  </div>
                </div>

                {/* Right Side: Catalog Specs Panel (Only for catalog items) */}
                {lightboxImage.isCatalog && lightboxImage.catalogDetails && (
                  <div className="p-6 md:p-8 bg-zinc-900 text-zinc-100 flex flex-col justify-between overflow-y-auto h-[40vh] md:h-[75vh] border-t md:border-t-0 md:border-l border-zinc-800/80 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 bg-orange-950/40 text-orange-400 border border-orange-900/50 px-2.5 py-1 rounded-lg text-[9px] font-mono uppercase font-black tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                          <span>Official Brand Catalog Page</span>
                        </div>
                        <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug">
                          {lightboxImage.title}
                        </h3>
                        {lightboxImage.catalogDetails.subtitle && (
                          <p className="text-orange-500 text-xs font-bold uppercase tracking-wide font-mono">
                            {lightboxImage.catalogDetails.subtitle}
                          </p>
                        )}
                        <p className="text-zinc-400 text-xs leading-relaxed font-sans pt-1">
                          {lightboxImage.alt}
                        </p>
                      </div>

                      {/* Highlights Bullet List */}
                      {lightboxImage.catalogDetails.highlights && (
                        <div className="space-y-2">
                          <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">Document Highlights</h5>
                          <ul className="space-y-1.5">
                            {lightboxImage.catalogDetails.highlights.map((hl: string, idx: number) => (
                              <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                                <span className="text-orange-500 font-bold select-none pt-0.5">•</span>
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technical/Commercial parameters table */}
                      {lightboxImage.catalogDetails.modelsOrDetails && (
                        <div className="space-y-2.5">
                          <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">Specifications & Inquiries</h5>
                          <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl overflow-hidden divide-y divide-zinc-800/60 shadow-xs">
                            {lightboxImage.catalogDetails.modelsOrDetails.map((row: string[], idx: number) => (
                              <div key={idx} className="grid grid-cols-3 p-2.5 text-[11px] font-sans">
                                <span className="text-zinc-500 font-medium font-mono">{row[0]}</span>
                                <span className="text-zinc-300 col-span-2 font-semibold">{row[1]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="pt-5 mt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={`https://wa.me/919836746409?text=${encodeURIComponent(lightboxImage.catalogDetails.whatsappMessage || 'Hello, I want to inquire about the catalog item.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-emerald-900/30 flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/10 shrink-0"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
                        </svg>
                        <span>Inquire on WhatsApp</span>
                      </a>
                      <span className="text-[10px] font-mono text-zinc-500 leading-tight">
                        Direct communication with Mohit Agarwal (+91 9836746409) for custom machinery packages & bulk supply rates.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Title Overlay Info (captions for normal photo lightboxes) */}
              {!lightboxImage.isCatalog && lightboxImage.title && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center mt-4 max-w-lg"
                >
                  <h4 className="text-white font-display font-black text-sm md:text-base tracking-tight leading-tight">
                    {lightboxImage.title}
                  </h4>
                  <p className="text-zinc-400 text-xs font-mono mt-1">
                    {lightboxImage.alt}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
