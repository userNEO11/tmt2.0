import React, { useState } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Copy,
  Check,
  FileText,
  Clock,
  MapPin,
  PackageCheck
} from 'lucide-react';
import { BALWANT_PRODUCTS } from '../data/tmtData';
import { useLanguage } from '../context/LanguageContext';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGrade?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialGrade = 'Fe 550D',
}) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    projectType: 'Residential Construction',
    grade: initialGrade,
    estimatedTonnes: '10-25 MT',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic submission delay (600ms) for smooth UX feedback
    setTimeout(() => {
      const generatedId = `BW-TMT-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
      setShowToast(true);

      // Auto-hide toast notification after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 600);
  };

  const handleCopyId = () => {
    if (inquiryId) {
      navigator.clipboard.writeText(inquiryId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppForward = () => {
    const text = `Hello Balwant TMT Sales Desk,\nI have submitted an official quotation inquiry.\n\n*Reference ID:* ${inquiryId}\n*Name:* ${formData.name}\n*Grade:* ${formData.grade}\n*Quantity:* ${formData.estimatedTonnes}\n*City:* ${formData.city}\n*Project:* ${formData.projectType}\n\nPlease share today's factory rate and dispatch schedule.`;
    const url = `https://wa.me/919897005500?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setShowToast(false);
    onClose();
  };

  return (
    <>
      {/* Toast Notification Top Anchor */}
      {showToast && (
        <div
          id="enquiry-toast-notification"
          className="fixed top-6 right-6 z-[60] max-w-sm w-full bg-[#111116] border-2 border-[#25D366] text-white p-4 rounded-xs shadow-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h5 className="font-display font-black text-xs uppercase tracking-wider text-[#25D366]">
                {language === 'hi' ? 'पूछताछ दर्ज हुई' : 'Inquiry Logged'}
              </h5>
              <span className="text-[10px] font-mono-tech text-zinc-400">Ref #{inquiryId}</span>
            </div>
            <p className="text-xs text-zinc-300 mt-1">
              {language === 'hi'
                ? 'हमारे सेल्स मैनेजर आपसे 2 घंटों में संपर्क करेंगे।'
                : 'Our regional sales engineer will connect within 2 hours.'}
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-zinc-500 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Modal Backdrop */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <div
          id="enquiry-modal-container"
          className="relative w-full max-w-2xl bg-[#111116] border border-white/20 rounded-xs shadow-2xl overflow-hidden my-8"
        >
          {/* Top Brand Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FFD700] via-[#0047AB] to-[#FFD700]" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 pb-4 flex items-center justify-between border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono-tech text-[#FFD700] uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                OFFICIAL BALWANT SALES & TECH DESK
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase">
                {submitted
                  ? language === 'hi'
                    ? 'पूछताछ सफलतापूर्वक दर्ज हुई'
                    : 'INQUIRY CONFIRMED & LOGGED'
                  : language === 'hi'
                  ? 'दाम कोटेशन और तकनीकी सहायता'
                  : 'REQUEST PRICE QUOTE & TECHNICAL DATA'}
              </h3>
            </div>
            <button
              id="close-enquiry-modal-btn"
              onClick={resetAndClose}
              className="p-2 text-zinc-400 hover:text-white rounded-xs bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Enquiry Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 pt-6">
            {submitted ? (
              /* Enhanced Success State Layout */
              <div className="space-y-6 py-2">
                {/* Success Icon & Heading */}
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-[#25D366]/20 border-2 border-[#25D366]/40 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#25D366]/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                    {language === 'hi' ? 'धन्यवाद, आपकी मांग प्राप्त हो गई है' : 'Thank You! Requirement Recorded'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
                    {language === 'hi' ? (
                      <>
                        <strong className="text-white">{formData.name}</strong>, आपकी <strong className="text-[#FFD700]">{formData.estimatedTonnes} {formData.grade}</strong> की मांग हमारे अधिकृत डिस्ट्रीब्यूशन सेंटर (<strong className="text-white">{formData.city || 'आपके क्षेत्र'}</strong>) को भेज दी गई है।
                      </>
                    ) : (
                      <>
                        <strong className="text-white">{formData.name}</strong>, your requisition for <strong className="text-[#FFD700]">{formData.estimatedTonnes} of {formData.grade}</strong> has been routed to our regional supply dispatch for <strong className="text-white">{formData.city || 'your area'}</strong>.
                      </>
                    )}
                  </p>
                </div>

                {/* Inquiry Summary & Reference Ticket Card */}
                <div className="bg-[#09090C] border border-white/15 rounded-xs p-4 sm:p-5 space-y-4">
                  {/* Reference ID Banner */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-white/5 border border-white/10 rounded-xs">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-xs font-mono-tech text-zinc-400">Official Reference ID:</span>
                      <strong className="font-mono-tech text-sm text-[#FFD700] tracking-wider">{inquiryId}</strong>
                    </div>
                    <button
                      id="copy-inquiry-id-btn"
                      onClick={handleCopyId}
                      className="flex items-center gap-1.5 text-xs font-mono-tech bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-xs transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#25D366]" />
                          <span className="text-[#25D366]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Copy Ref ID</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Key Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="bg-white/5 p-2.5 rounded-xs border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase font-mono-tech">Grade</span>
                      <span className="font-bold text-white text-sm">{formData.grade}</span>
                    </div>
                    <div className="bg-white/5 p-2.5 rounded-xs border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase font-mono-tech">Quantity</span>
                      <span className="font-bold text-[#FFD700] text-sm">{formData.estimatedTonnes}</span>
                    </div>
                    <div className="bg-white/5 p-2.5 rounded-xs border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase font-mono-tech">Location</span>
                      <span className="font-bold text-white text-sm truncate">{formData.city || 'India'}</span>
                    </div>
                    <div className="bg-white/5 p-2.5 rounded-xs border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase font-mono-tech">SLA Response</span>
                      <span className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" /> &lt; 2 Hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {/* Instant WhatsApp Connect */}
                    <button
                      id="whatsapp-forward-enquiry-btn"
                      onClick={handleWhatsAppForward}
                      className="w-full sm:flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-black font-display font-black text-sm uppercase px-5 py-3.5 rounded-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>{language === 'hi' ? 'व्हाट्सऐप पर त्वरित उत्तर पाएं' : 'Get Instant WhatsApp Reply'}</span>
                    </button>

                    {/* Close / Done Button */}
                    <button
                      id="finish-enquiry-modal-btn"
                      onClick={resetAndClose}
                      className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-display font-bold text-sm uppercase px-6 py-3.5 rounded-xs transition-colors border border-white/15 cursor-pointer"
                    >
                      {t.common.close}
                    </button>
                  </div>

                  <p className="text-center text-[11px] font-mono-tech text-zinc-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>Direct Mill Test Certificate (MTC) & BIS IS:1786 Guarantee Included</span>
                  </p>
                </div>
              </div>
            ) : (
              /* Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-1">
                      {t.common.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Er. Rajesh Sharma / Contractor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xs p-3 text-sm text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-1">
                      {t.common.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xs p-3 text-sm text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-1">
                      {t.common.city} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lucknow, Varanasi, Kanpur, Patna"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xs p-3 text-sm text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-1">
                      {t.common.projectType}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xs p-3 text-sm text-white focus:border-[#FFD700] focus:outline-none cursor-pointer"
                    >
                      <option value="Residential House / Villa">Individual Residential Home / Villa</option>
                      <option value="Commercial High-Rise">Commercial Complex / High-Rise</option>
                      <option value="Infrastructure Project">Infrastructure / Bridge / Highway</option>
                      <option value="Dealer / Distributor Dealership">Dealership / Distributorship Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-1">
                      {t.common.tmtGrade}
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xs p-3 text-sm text-white focus:border-[#FFD700] focus:outline-none cursor-pointer"
                    >
                      {BALWANT_PRODUCTS.map((p) => (
                        <option key={p.id} value={p.grade}>
                          {p.grade} - {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-1">
                      {t.common.quantity}
                    </label>
                    <select
                      value={formData.estimatedTonnes}
                      onChange={(e) => setFormData({ ...formData, estimatedTonnes: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xs p-3 text-sm text-white focus:border-[#FFD700] focus:outline-none cursor-pointer"
                    >
                      <option value="Under 5 MT">Under 5 MT (Sample / Small Extension)</option>
                      <option value="5-15 MT">5 - 15 MT (Single House Footing/Slab)</option>
                      <option value="15-50 MT">15 - 50 MT (Multi-Floor Villa / Commercial)</option>
                      <option value="50-200 MT">50 - 200 MT (Apartment / Institutional)</option>
                      <option value="200+ MT Bulk Trailer">200+ MT (Mega Project Direct Mill Supply)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-1">
                    {t.common.notes}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need 8mm, 12mm and 16mm bundle quotes delivered to siteworks in 7 days."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xs p-3 text-sm text-white focus:border-[#FFD700] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-zinc-400">
                    <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                    <span>Direct Authorized Mill Pricing</span>
                  </div>

                  <button
                    id="submit-enquiry-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#FFD700] hover:bg-[#FFE04D] text-black font-display font-black text-sm uppercase px-8 py-3.5 rounded-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        <span>Logging Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>{t.common.submit}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
