import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, Clock, 
  Map, Star, Shield, HelpCircle, ChevronRight, MessageSquare 
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

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('garg_inquiries', JSON.stringify(updated));

    // Simulated network submit callback
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header segment */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">Connect With Us</span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-900 tracking-tight">
            Contact Garg Trading Company
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch with Mohit Agarwal or Sunil Agarwal directly for retail sales, custom quotas, wholesale supply, or technical help.
          </p>
        </div>

        {/* Contact layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* LEFT: Info & Map Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-zinc-200/80 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400">Direct Calls & WhatsApp</h4>
                  <p className="text-sm font-bold text-zinc-900 mt-1">Mohit: +91 98367 46409</p>
                  <p className="text-sm font-bold text-zinc-900">Sunil: +91 93312 76330</p>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold block mt-1">● Available for immediate call back</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-zinc-200/80 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400">E-mail Correspondence</h4>
                  <a href="mailto:gtc.mohit@gmail.com" className="text-sm font-bold text-orange-600 hover:underline block mt-1">
                    gtc.mohit@gmail.com
                  </a>
                  <p className="text-xs text-zinc-500 mt-1">Send specifications sheet files directly for quick valuation quotes.</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-2xs space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400">Strand Road Showroom Location</h4>
                  <p className="text-zinc-800 font-medium text-sm sm:text-base mt-1">
                    40, STRAND ROAD, GROUND FLOOR, ROOM NO. - 1,<br />
                    KOLKATA - 700 001, WEST BENGAL, INDIA
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">Near Netaji Subhas Road crossing / Hooghly Riverfront wholesale tool market.</p>
                </div>
              </div>

              {/* Unique Interactive Custom Vector Map Visual (Beautiful, high fidelity, safe inside iframe) */}
              <div className="border border-zinc-200 rounded-xl p-4 bg-zinc-950 text-zinc-400 font-mono text-xs space-y-3 relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-orange-500">
                  <span>Showroom Route Visual Mapper</span>
                  <span className="bg-zinc-900 px-2 py-0.5 rounded-sm">Kolkata Core District</span>
                </div>

                {/* SVG Map Layout */}
                <svg viewBox="0 0 400 200" className="w-full bg-zinc-900/60 rounded-lg border border-zinc-800 font-sans" style={{ minHeight: '180px' }}>
                  {/* Hooghly River */}
                  <path d="M 0 30 Q 80 50 150 110 T 320 200" fill="none" stroke="#2563eb" strokeWidth="24" opacity="0.15" />
                  <text x="35" y="110" fill="#3b82f6" fontSize="10" fontWeight="bold" opacity="0.4" transform="rotate(30 35 110)">HOOGHLY RIVER</text>

                  {/* Bridges */}
                  <line x1="120" y1="40" x2="200" y2="40" stroke="#4b5563" strokeWidth="4" strokeDasharray="2" />
                  <text x="140" y="32" fill="#9ca3af" fontSize="8" fontWeight="bold">HOWRAH BRIDGE</text>

                  {/* Strand Road Grid */}
                  <line x1="80" y1="0" x2="160" y2="200" stroke="#374151" strokeWidth="8" />
                  <text x="70" y="80" fill="#9ca3af" fontSize="9" fontWeight="bold" transform="rotate(68 70 80)">STRAND ROAD</text>

                  {/* Netaji Subhas Road Grid */}
                  <line x1="140" y1="0" x2="220" y2="200" stroke="#374151" strokeWidth="6" />
                  <text x="135" y="120" fill="#9ca3af" fontSize="8" transform="rotate(68 135 120)">N.S. ROAD</text>

                  {/* Connecting lane */}
                  <line x1="110" y1="75" x2="170" y2="90" stroke="#4b5563" strokeWidth="4" />

                  {/* Landmark: Room No. 1 Garg Trading Company */}
                  <circle cx="114" cy="85" r="7" fill="#ea580c" className="animate-ping" style={{ transformOrigin: '114px 85px' }} />
                  <circle cx="114" cy="85" r="5" fill="#ea580c" />
                  
                  {/* Map Pin Banner */}
                  <rect x="125" y="65" width="130" height="30" rx="4" fill="#1e1b4b" stroke="#ea580c" strokeWidth="1" />
                  <text x="131" y="77" fill="#ffffff" fontSize="8" fontWeight="bold">GARG TRADING CO.</text>
                  <text x="131" y="88" fill="#fdba74" fontSize="7">Room No.1, 40 Strand Rd</text>

                  {/* Nearby Landmarks */}
                  <circle cx="180" cy="140" r="3" fill="#6b7280" />
                  <text x="190" y="143" fill="#6b7280" fontSize="8">GPO Kolkata</text>

                  <circle cx="280" cy="80" r="3" fill="#6b7280" />
                  <text x="290" y="83" fill="#6b7280" fontSize="8">Howrah Station</text>
                </svg>

                <div className="text-[10px] text-zinc-500 flex justify-between">
                  <span>★ Core Market Hub</span>
                  <span>Ground Floor Frontage</span>
                </div>
              </div>
            </div>

            {/* Inquiry list logs (Durable status indicator) */}
            {inquiries.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-orange-600" />
                    <span>Your Submitted Inquiries ({inquiries.length})</span>
                  </h4>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('garg_inquiries');
                      setInquiries([]);
                    }}
                    className="text-[10px] font-mono text-zinc-400 hover:text-red-500 cursor-pointer"
                  >
                    Clear History
                  </button>
                </div>

                <div className="max-h-48 overflow-y-auto space-y-3 pr-2 divide-y divide-zinc-100">
                  {inquiries.map((inq, idx) => (
                    <div key={inq.id} className={`pt-3 first:pt-0 space-y-1 text-xs`}>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="font-bold text-zinc-800">{inq.name}</span>
                        <span className="text-zinc-400">{new Date(inq.timestamp).toLocaleDateString()}</span>
                      </div>
                      <div className="text-orange-600 font-bold font-mono text-[10px]">{inq.subject}</div>
                      <p className="text-zinc-600 line-clamp-2 italic">"{inq.message}"</p>
                      <div className="flex gap-2 text-[9px] font-mono text-zinc-400">
                        <span>Tel: {inq.phone}</span>
                        <span>•</span>
                        <span className="text-emerald-600 font-bold">✓ Logged Locally</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: Contact Submission Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-orange-600">Secure Direct Message</span>
              <h3 className="font-display font-black text-xl text-zinc-900 tracking-tight">
                Send Direct Message
              </h3>
              <p className="text-xs text-zinc-500 font-sans">
                Fill in the form to register your product inquiry, parts list request, or custom delivery quote.
              </p>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-lg text-zinc-900">Message Sent!</h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                    Your inquiry has been stored locally in the application log and logged under the active session profile. Our managing team will review the details.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-5 py-2.5 rounded-lg"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-600 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-600 block">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 91234 56789"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-600 block">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. buyer@industries.com"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-600 block">Inquiry Subject *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                  >
                    <option value="Product Catalog Inquiry">Product Catalog Inquiry</option>
                    <option value="Wholesale Bulk Quote">Wholesale Bulk Quote</option>
                    <option value="Custom Technical Inquiry">Custom Technical Inquiry</option>
                    <option value="Parts & Consumables">Parts & Consumables</option>
                    <option value="Showroom Demonstration">Showroom Demonstration</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-600 block">Inquiry / Specifications Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Details of your machine requirements, expected monthly usage, accessories, or wholesale delivery options..."
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 focus:bg-white focus:outline-hidden text-sm rounded-lg p-2.5 font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full text-center bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-300 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-orange-500/15 cursor-pointer flex items-center justify-center gap-2"
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

            <div className="border-t border-zinc-100 pt-4 text-center">
              <span className="text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1">
                <Shield className="w-3.5 h-3.5 text-orange-500" />
                <span>GST Verified Invoicing & Solutions</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
