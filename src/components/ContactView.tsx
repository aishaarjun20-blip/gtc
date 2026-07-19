import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, Clock, 
  Map, Star, Shield, HelpCircle, ChevronRight, MessageSquare, ExternalLink
} from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function ContactView() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Product Catalog Inquiry');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Load sent inquiries from localStorage on mount
  useEffect(() => {
    const existing = localStorage.getItem('garg_inquiries');
    if (existing) {
      try {
        setInquiries(JSON.parse(existing));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const newInquiry: Inquiry = {
      id: 'inq-' + Date.now(),
      name,
      email: email || 'N/A',
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    };

    // Formulate clean, styled WhatsApp text
    const textMessage = `Hello Mohit Agarwal,\n\nI would like to submit an inquiry from the website.\n\n*Name:* ${newInquiry.name}\n*Phone:* ${newInquiry.phone}\n*Email:* ${newInquiry.email}\n*Subject:* ${newInquiry.subject}\n\n*Message:*\n${newInquiry.message}`;
    const encodedText = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/919836746409?text=${encodedText}`;
    setWhatsappUrl(waUrl);

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('garg_inquiries', JSON.stringify(updated));

    // Try automatic opening first
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.warn("Popup blocked, fallback provided on success page", err);
    }

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] py-16 px-4 sm:px-6 lg:px-8 text-[#f8f7f4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header segment */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#ff4d00] bg-[#ff4d00]/10 px-2.5 py-1.5 border border-[#ff4d00]/20 rounded-none">Connect With Us</span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#f8f7f4] uppercase tracking-tight">
            Contact Garg Trading Company
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
            Get in touch with Mohit Agarwal or Sunil Agarwal directly for retail sales, custom quotas, wholesale supply, or technical help.
          </p>
        </div>

        {/* Contact layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* LEFT: Info & Map Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-950 p-5 border border-zinc-900 rounded-none space-y-3">
                <div className="w-10 h-10 rounded-none bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] border border-[#ff4d00]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[10px] uppercase tracking-wider text-zinc-500">Direct Calls & WhatsApp</h4>
                  <p className="text-sm font-black text-white mt-1.5 font-mono">Mohit: +91 98367 46409</p>
                  <p className="text-sm font-black text-white font-mono">Sunil: +91 93312 76330</p>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold block mt-1.5">● Available for immediate call back</span>
                </div>
              </div>

              <div className="bg-zinc-950 p-5 border border-zinc-900 rounded-none space-y-3">
                <div className="w-10 h-10 rounded-none bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] border border-[#ff4d00]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[10px] uppercase tracking-wider text-zinc-500">E-mail Correspondence</h4>
                  <a href="mailto:gtc.mohit@gmail.com" className="text-sm font-black text-[#ff4d00] hover:underline block mt-1.5 font-mono">
                    gtc.mohit@gmail.com
                  </a>
                  <p className="text-xs text-zinc-500 mt-1.5">Send specifications sheet files directly for quick valuation quotes.</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-zinc-950 p-6 border border-zinc-900 rounded-none space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-none bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] border border-[#ff4d00]/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-[10px] uppercase tracking-wider text-zinc-500">Strand Road Showroom Location</h4>
                  <p className="text-[#f8f7f4] font-semibold text-sm sm:text-base uppercase tracking-tight leading-tight">
                    40, STRAND ROAD, GROUND FLOOR, ROOM NO. - 1,<br />
                    KOLKATA - 700 001, WEST BENGAL, INDIA
                  </p>
                  <p className="text-xs text-zinc-500">Near Netaji Subhas Road crossing / Hooghly Riverfront wholesale tool market.</p>
                  
                  <div className="pt-1">
                    <a 
                      href="https://maps.app.goo.gl/fNmhTe7yxZfWr7cp6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#ff4d00]/10 hover:bg-[#ff4d00]/20 text-[#ff4d00] font-mono font-bold text-[11px] px-3 py-1.5 border border-[#ff4d00]/20 hover:border-[#ff4d00]/40 transition-all rounded-none uppercase tracking-wider"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Unique Interactive Custom Vector Map Visual (Beautiful, high fidelity, safe inside iframe) */}
              <a 
                href="https://maps.app.goo.gl/fNmhTe7yxZfWr7cp6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border border-zinc-900 hover:border-[#ff4d00]/40 p-4 bg-[#0c0c0e] text-zinc-500 font-mono text-xs space-y-3 relative overflow-hidden rounded-none transition-all duration-300 group cursor-pointer"
                title="Click to view live location on Google Maps"
              >
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-[#ff4d00]">
                  <span className="flex items-center gap-1.5">
                    Showroom Route Visual Mapper
                    <span className="text-[9px] text-zinc-500 font-normal font-sans lowercase normal-case tracking-normal">(click to navigate)</span>
                  </span>
                  <span className="bg-zinc-950 px-2 py-0.5 rounded-none border border-zinc-900 text-zinc-400 flex items-center gap-1 group-hover:text-white group-hover:border-[#ff4d00]/30 transition-all">
                    <span>Open Map</span>
                    <ExternalLink className="w-3 h-3 text-[#ff4d00]" />
                  </span>
                </div>

                {/* SVG Map Layout */}
                <svg viewBox="0 0 400 200" className="w-full bg-zinc-950 rounded-none border border-zinc-900 font-sans group-hover:border-zinc-800 transition-colors" style={{ minHeight: '180px' }}>
                  {/* Hooghly River */}
                  <path d="M 0 30 Q 80 50 150 110 T 320 200" fill="none" stroke="#ff4d00" strokeWidth="24" opacity="0.06" />
                  <text x="35" y="110" fill="#ff4d00" fontSize="10" fontWeight="bold" opacity="0.25" transform="rotate(30 35 110)">HOOGHLY RIVER</text>

                  {/* Bridges */}
                  <line x1="120" y1="40" x2="200" y2="40" stroke="#4b5563" strokeWidth="4" strokeDasharray="2" />
                  <text x="140" y="32" fill="#9ca3af" fontSize="8" fontWeight="bold">HOWRAH BRIDGE</text>

                  {/* Strand Road Grid */}
                  <line x1="80" y1="0" x2="160" y2="200" stroke="#1f2937" strokeWidth="8" />
                  <text x="70" y="80" fill="#9ca3af" fontSize="9" fontWeight="bold" transform="rotate(68 70 80)">STRAND ROAD</text>

                  {/* Netaji Subhas Road Grid */}
                  <line x1="140" y1="0" x2="220" y2="200" stroke="#1f2937" strokeWidth="6" />
                  <text x="135" y="120" fill="#9ca3af" fontSize="8" transform="rotate(68 135 120)">N.S. ROAD</text>

                  {/* Connecting lane */}
                  <line x1="110" y1="75" x2="170" y2="90" stroke="#374151" strokeWidth="4" />

                  {/* Landmark: Room No. 1 Garg Trading Company */}
                  <circle cx="114" cy="85" r="7" fill="#ff4d00" className="animate-ping" style={{ transformOrigin: '114px 85px' }} />
                  <circle cx="114" cy="85" r="5" fill="#ff4d00" />
                  
                  {/* Map Pin Banner */}
                  <rect x="120" y="65" width="140" height="30" rx="0" fill="#0c0c0e" stroke="#ff4d00" strokeWidth="1" />
                  <text x="126" y="77" fill="#ffffff" fontSize="8" fontWeight="bold" className="font-display uppercase">GARG TRADING COMPANY</text>
                  <text x="126" y="88" fill="#ff4d00" fontSize="7">Room No.1, 40 Strand Rd</text>

                  {/* Nearby Landmarks */}
                  <circle cx="180" cy="140" r="3" fill="#4b5563" />
                  <text x="190" y="143" fill="#4b5563" fontSize="8">GPO Kolkata</text>

                  <circle cx="280" cy="80" r="3" fill="#4b5563" />
                  <text x="290" y="83" fill="#4b5563" fontSize="8">Howrah Station</text>
                </svg>

                <div className="text-[10px] text-zinc-650 flex justify-between group-hover:text-zinc-500 transition-colors">
                  <span>★ Click to View Live Navigation</span>
                  <span>Ground Floor Frontage</span>
                </div>
              </a>
            </div>

            {/* Inquiry list logs (Durable status indicator) */}
            {inquiries.length > 0 && (
              <div className="bg-zinc-950 p-6 border border-zinc-900 rounded-none space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#ff4d00]" />
                    <span>Your Submitted Inquiries ({inquiries.length})</span>
                  </h4>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('garg_inquiries');
                      setInquiries([]);
                    }}
                    className="text-[10px] font-mono text-zinc-500 hover:text-red-500 cursor-pointer"
                  >
                    Clear History
                  </button>
                </div>

                <div className="max-h-48 overflow-y-auto space-y-3 pr-2 divide-y divide-zinc-900">
                  {inquiries.map((inq, idx) => (
                    <div key={inq.id} className="pt-3 first:pt-0 space-y-1 text-xs">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="font-bold text-zinc-350">{inq.name}</span>
                        <span className="text-zinc-600">{new Date(inq.timestamp).toLocaleDateString()}</span>
                      </div>
                      <div className="text-[#ff4d00] font-bold font-mono text-[10px]">{inq.subject}</div>
                      <p className="text-zinc-400 line-clamp-2 italic">"{inq.message}"</p>
                      <div className="flex gap-2 text-[9px] font-mono text-zinc-500">
                        <span>Tel: {inq.phone}</span>
                        <span>•</span>
                        <span className="text-emerald-500 font-bold">✓ Logged Locally</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: Contact Submission Form (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 p-6 space-y-6 rounded-none">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-[#ff4d00]">Secure Direct Message</span>
              <h3 className="font-display font-black text-xl text-[#f8f7f4] uppercase tracking-tight">
                Send Direct Message
              </h3>
              <p className="text-xs text-zinc-400 font-sans">
                Fill in the form to register your product inquiry, parts list request, or custom delivery quote.
              </p>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-14 h-14 bg-zinc-900/50 border border-zinc-800 rounded-none flex items-center justify-center text-[#ff4d00] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-black text-lg text-[#f8f7f4] uppercase tracking-tight">Inquiry Prepared!</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Your inquiry is logged locally and formatted for direct transmission to Mohit Agarwal on WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 max-w-xs mx-auto pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-750 hover:bg-emerald-700 text-white font-display font-black uppercase text-xs py-3.5 px-4 rounded-none transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.018-5.09-2.868-6.942-1.851-1.852-4.314-2.871-6.931-2.872-5.438 0-9.863 4.414-9.866 9.833-.001 1.902.497 3.754 1.445 5.378l-.988 3.602 3.693-.972zm11.752-5.462c-.324-.162-1.92-.949-2.219-1.058-.299-.108-.517-.162-.734.162-.217.324-.838 1.058-1.026 1.274-.188.217-.377.243-.701.081-.324-.162-1.371-.505-2.611-1.612-.964-.86-1.614-1.923-1.802-2.247-.188-.324-.02-.5-.182-.661-.146-.146-.324-.378-.486-.568-.162-.189-.217-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.513.324-.675.108-.162.145-.27.217-.405.072-.135.036-.253-.018-.36-.054-.108-.517-1.244-.709-1.703-.188-.451-.377-.39-.517-.397-.135-.007-.29-.007-.446-.007-.156 0-.41.059-.624.288-.214.23-.817.8-.817 1.95s.838 2.259.953 2.417c.115.158 1.65 2.518 3.999 3.53.559.241 1.002.385 1.343.493.563.18 1.077.154 1.482.094.453-.068 1.92-.786 2.19-1.505.27-.72.27-1.334.189-1.463-.081-.13-.298-.21-.622-.372z" />
                    </svg>
                    <span>Send to Mohit (WhatsApp)</span>
                  </a>

                  <button
                    onClick={() => setSuccess(false)}
                    className="border border-zinc-850 hover:bg-zinc-900 text-zinc-400 hover:text-white font-mono uppercase text-xs py-2.5 rounded-none transition-colors cursor-pointer font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-500 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-[#0c0c0e] border border-zinc-900 text-zinc-300 focus:border-[#ff4d00] focus:bg-[#0c0c0e] focus:outline-hidden text-sm rounded-none p-2.5 font-sans placeholder:text-zinc-650"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-500 block">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 91234 56789"
                    className="w-full bg-[#0c0c0e] border border-zinc-900 text-zinc-300 focus:border-[#ff4d00] focus:bg-[#0c0c0e] focus:outline-hidden text-sm rounded-none p-2.5 font-sans placeholder:text-zinc-650"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-500 block">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. buyer@industries.com"
                    className="w-full bg-[#0c0c0e] border border-zinc-900 text-zinc-300 focus:border-[#ff4d00] focus:bg-[#0c0c0e] focus:outline-hidden text-sm rounded-none p-2.5 font-sans placeholder:text-zinc-650"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-500 block">Inquiry Subject *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#0c0c0e] border border-zinc-900 text-zinc-300 focus:border-[#ff4d00] focus:bg-[#0c0c0e] focus:outline-hidden text-sm rounded-none p-2.5 font-sans"
                  >
                    <option value="Product Catalog Inquiry" className="bg-[#0c0c0e] text-zinc-300">Product Catalog Inquiry</option>
                    <option value="Wholesale Bulk Quote" className="bg-[#0c0c0e] text-zinc-300">Wholesale Bulk Quote</option>
                    <option value="Custom Technical Inquiry" className="bg-[#0c0c0e] text-zinc-300">Custom Technical Inquiry</option>
                    <option value="Parts & Consumables" className="bg-[#0c0c0e] text-zinc-300">Parts & Consumables</option>
                    <option value="Showroom Demonstration" className="bg-[#0c0c0e] text-zinc-300">Showroom Demonstration</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-500 block">Inquiry / Specifications Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Details of your machine requirements, expected monthly usage, accessories, or wholesale delivery options..."
                    className="w-full bg-[#0c0c0e] border border-zinc-900 text-zinc-300 focus:border-[#ff4d00] focus:bg-[#0c0c0e] focus:outline-hidden text-sm rounded-none p-2.5 font-sans placeholder:text-zinc-650"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full text-center bg-[#ff4d00] hover:bg-[#e04400] disabled:bg-zinc-900 disabled:text-zinc-600 text-black font-display font-black uppercase text-xs py-3.5 rounded-none transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Secure Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

            <div className="border-t border-zinc-900 pt-4 text-center">
              <span className="text-[10px] font-mono text-zinc-500 flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#ff4d00]" />
                <span>GST Verified Invoicing & Solutions</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
