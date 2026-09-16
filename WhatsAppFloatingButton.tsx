import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, PhoneCall, CheckCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string; // Default WhatsApp number (with country code)
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phoneNumber = '918817303963', // Balwant TMT Sales Desk WhatsApp
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const { language } = useLanguage();

  // Show helpful badge tooltip after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const defaultTemplates = [
    {
      label: language === 'hi' ? 'आज का सरिया रेट' : "Today's TMT Rate",
      text:
        language === 'hi'
          ? 'नमस्ते बलवंत TMT, मुझे आज के Fe 550D सरिया के प्रति टन / प्रति पीस रेट की जानकारी चाहिए।'
          : 'Hello Balwant TMT, I would like to know today’s per-tonne and per-piece rates for Fe 550D rebar.',
    },
    {
      label: language === 'hi' ? 'प्रोजेक्ट / साइट कोटेशन' : 'Bulk Project Quote',
      text:
        language === 'hi'
          ? 'नमस्ते, मुझे अपने कंस्ट्रक्शन प्रोजेक्ट के लिए 10+ टन सरिया का कोटेशन और डिलीवरी टाइमलाइन चाहिए।'
          : 'Hi, I need a bulk price quotation and delivery timeline for 10+ tonnes of Balwant Fe 550D/600.',
    },
    {
      label: language === 'hi' ? 'डीलरशिप पूछताछ' : 'Dealership Inquiry',
      text:
        language === 'hi'
          ? 'नमस्ते, मैं अपने क्षेत्र में बलवंत TMT की अधिकृत डीलरशिप / डिस्ट्रीब्यूटरशिप लेना चाहता हूँ।'
          : 'Hello, I am interested in applying for an authorized Balwant TMT dealership in my district.',
    },
    {
      label: language === 'hi' ? 'टेस्ट सर्टिफिकेट (MTC)' : 'Mill Test Certificate',
      text:
        language === 'hi'
          ? 'नमस्ते, क्या मुझे वर्तमान लॉट का NABL एक्रेडिटेड मिल टेस्ट सर्टिफिकेट (MTC) मिल सकता है?'
          : 'Hi, can you share the latest batch NABL accredited Mill Test Certificate (MTC) for Fe 550D?',
    },
  ];

  const handleSend = (customText?: string) => {
    const textToSend = customText || message.trim() || 'Hello Balwant TMT, I want to inquire about steel rates and orders.';
    const encodedText = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Chat Popover Window */}
      {isOpen && (
        <div
          id="whatsapp-chat-popover"
          className="mb-4 w-[90vw] sm:w-[380px] bg-[#0E0E12] border border-white/20 rounded-xs shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#128C7E] font-black text-lg shadow-md">
                  <MessageCircle className="w-6 h-6 fill-[#25D366] text-[#25D366]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-display font-black text-sm tracking-wide text-white flex items-center gap-1.5">
                  Balwant Sales Desk
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                </h4>
                <p className="text-[11px] text-white/90 font-mono-tech flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  {language === 'hi' ? 'ऑनलाइन | त्वरित उत्तर' : 'Online | Instant Response'}
                </p>
              </div>
            </div>

            <button
              id="close-whatsapp-popover-btn"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-xs hover:bg-black/10 transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body & Greeting */}
          <div className="p-4 bg-[#09090C] space-y-4 max-h-[360px] overflow-y-auto custom-scrollbar border-b border-white/10">
            {/* Automated Greeting Bubble */}
            <div className="bg-[#18181E] border border-white/10 p-3.5 rounded-xs text-xs text-zinc-300 space-y-2 relative">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono-tech">
                <span className="text-[#25D366] font-bold">BALWANT TMT</span>
                <span>Just now</span>
              </div>
              <p className="leading-relaxed">
                {language === 'hi'
                  ? 'नमस्ते! बलवंत TMT सेल्स हेल्पडेस्क में आपका स्वागत है। आप सरिया रेट, डिस्ट्रीब्यूटरशिप या डायरेक्ट डिलीवरी के लिए नीचे से विकल्प चुनें या मैसेज टाइप करें।'
                  : 'Welcome to Balwant TMT Sales Helpdesk. Inquire directly about factory rates, project deliveries, or regional dealerships.'}
              </p>
              <div className="flex justify-end text-[10px] text-zinc-500 items-center gap-1">
                <CheckCheck className="w-3.5 h-3.5 text-[#25D366]" />
              </div>
            </div>

            {/* Quick Inquiry Options */}
            <div className="space-y-1.5">
              <p className="text-[10px] font-mono-tech uppercase tracking-wider text-zinc-400">
                {language === 'hi' ? 'त्वरित विषय चुनें (Quick Select):' : 'Quick Inquiry Topics:'}
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {defaultTemplates.map((template, idx) => (
                  <button
                    key={idx}
                    id={`whatsapp-template-btn-${idx}`}
                    onClick={() => handleSend(template.text)}
                    className="text-left text-xs bg-white/5 hover:bg-[#25D366]/15 hover:border-[#25D366]/40 border border-white/10 p-2 rounded-xs text-zinc-200 hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="font-medium text-[11px] group-hover:text-[#25D366] transition-colors">
                      {template.label}
                    </span>
                    <Send className="w-3 h-3 text-zinc-500 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input Footer */}
          <div className="p-3 bg-[#111116] flex items-center gap-2">
            <input
              id="whatsapp-custom-message-input"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
              placeholder={language === 'hi' ? 'यहाँ अपना मैसेज लिखें...' : 'Type custom inquiry message...'}
              className="flex-1 bg-black/60 border border-white/15 focus:border-[#25D366] focus:outline-hidden text-xs text-white px-3 py-2.5 rounded-xs transition-colors"
            />
            <button
              id="send-whatsapp-message-btn"
              onClick={() => handleSend()}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-black p-2.5 rounded-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
              title="Send to WhatsApp"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4 fill-black" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button with Ping Badge */}
      <div className="relative flex items-center gap-3">
        {/* Tooltip on First Load */}
        {!isOpen && showTooltip && (
          <div
            id="whatsapp-tooltip-badge"
            className="hidden sm:flex items-center gap-2 bg-[#0B0B0E]/95 backdrop-blur-md text-white border border-[#25D366]/40 px-3.5 py-2 rounded-xs shadow-xl text-xs font-medium animate-in fade-in slide-in-from-right-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
            <span className="text-zinc-200">
              {language === 'hi' ? 'सरिया रेट के लिए व्हाट्सऐप चैट करें' : 'Chat on WhatsApp for Live Rates'}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-zinc-500 hover:text-white ml-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* WhatsApp Icon Circle Button */}
        <button
          id="floating-whatsapp-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-[#18181E] border-2 border-white/20 text-white rotate-90 scale-95'
              : 'bg-[#25D366] hover:bg-[#22bf5b] text-white shadow-[#25D366]/40 hover:scale-110'
          }`}
          aria-label="Open WhatsApp Sales Inquiry"
          title="Direct Sales WhatsApp"
        >
          {/* Animated pulse wave ring */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none -z-10"></span>
          )}

          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white fill-white drop-shadow-md" />
          )}
        </button>
      </div>
    </div>
  );
};
