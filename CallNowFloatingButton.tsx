import React, { useState } from 'react';
import { Phone, PhoneCall, X, ShieldCheck, Clock, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CallNowFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  const phoneNumbers = [
    {
      label: language === 'hi' ? 'सेल्स एवं मुख्य संपर्क' : 'General Sales & Dispatch',
      number: '+91 8817303963',
      dialValue: '+918817303963',
      tag: 'Main Sales',
      desc: language === 'hi' ? 'दैनिक सरिया रेट, तत्काल ऑर्डर एवं ट्रक डिस्पैच' : 'Daily mill rates, immediate orders & trailer dispatch',
    },
    {
      label: language === 'hi' ? 'कॉरपोरेट एवं प्रोजेक्ट पूछताछ' : 'Corporate & Project Orders',
      number: '+91 8839838970',
      dialValue: '+918839838970',
      tag: 'Corporate Desk',
      desc: language === 'hi' ? 'ग्रेटर नोएडा कॉरपोरेट ऑफिस एवं थोक टेंडर' : 'Greater Noida Corporate Office & infra tenders',
    },
    {
      label: language === 'hi' ? 'ईस्टर्न ज़ोन ऑफिस (भिलाई)' : 'Eastern Zone Office (Bhilai)',
      number: '+91 9202405958',
      dialValue: '+919202405958',
      tag: 'Bhilai, C.G',
      desc: language === 'hi' ? 'छत्तीसगढ़ एवं पूर्वी भारत डीलरशिप व सप्लाई' : 'Chhattisgarh & Eastern zone distribution desk',
    },
    {
      label: language === 'hi' ? 'सेंट्रल ज़ोन ऑफिस (लखनऊ)' : 'Central Zone Office (Lucknow)',
      number: '+91 9301541867',
      dialValue: '+919301541867',
      tag: 'Lucknow, UP',
      desc: language === 'hi' ? 'गोमती नगर, लखनऊ एवं मध्य यूपी नेटवर्क' : 'Gomti Nagar, Lucknow & Central UP coverage',
    },
    {
      label: language === 'hi' ? 'कस्टमर सपोर्ट एवं डीलर डेस्क' : 'Customer & Dealer Support',
      number: '+91 6260928005',
      dialValue: '+916260928005',
      tag: 'Helpdesk',
      desc: language === 'hi' ? 'डीलरशिप पूछताछ एवं तकनीकी सहायता' : 'Dealership partnership & technical support',
    },
  ];

  const handleCopy = (num: string, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(num);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed bottom-22 sm:bottom-24 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Call Dropdown Menu */}
      {isOpen && (
        <div
          className="mb-3 w-80 sm:w-88 bg-white border-2 border-amber-300 rounded-xs shadow-2xl overflow-hidden animate-fadeIn text-left text-zinc-900"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#FFD700] p-3.5 border-b border-amber-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-black text-white rounded-xs">
                <PhoneCall className="w-4 h-4 text-[#FFD700]" />
              </div>
              <div>
                <h4 className="font-display font-black text-sm text-black uppercase tracking-tight leading-none">
                  {language === 'hi' ? 'बलवंत डायरेक्ट कॉल डेस्क' : 'Balwant Direct Call Desk'}
                </h4>
                <div className="flex items-center gap-1 text-[10px] font-mono-tech font-bold text-zinc-800 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>{language === 'hi' ? 'लाइनें सक्रिय हैं (9 AM - 8 PM)' : 'Lines Active (9 AM - 8 PM)'}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-black/10 rounded-full text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Numbers list */}
          <div className="p-3 space-y-2 bg-[#FFFDF0]">
            {phoneNumbers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-amber-200 p-2.5 rounded-xs hover:border-amber-400 transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono-tech font-bold uppercase bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-xs">
                    {item.tag}
                  </span>
                  <button
                    onClick={(e) => handleCopy(item.number, idx, e)}
                    className="text-[10px] font-mono-tech text-zinc-500 hover:text-black flex items-center gap-1 cursor-pointer"
                    title="Copy number"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs font-bold text-zinc-800 font-sans leading-tight">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-500 mb-2">
                  {item.desc}
                </div>

                <a
                  href={`tel:${item.dialValue}`}
                  className="w-full bg-zinc-900 hover:bg-[#D9A700] hover:text-black text-[#FFD700] font-mono-tech font-bold text-xs py-1.5 px-3 rounded-xs flex items-center justify-between transition-colors cursor-pointer group-hover:shadow-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3 h-3" />
                    <span>{item.number}</span>
                  </span>
                  <span className="text-[10px] uppercase underline flex items-center gap-0.5">
                    {language === 'hi' ? 'डायल करें' : 'Call Now'}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-2.5 bg-amber-50/70 border-t border-amber-200 text-center text-[10px] font-mono-tech text-zinc-600 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Direct Support • Corporate &amp; Zonal Network</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="call-now-floating-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-zinc-950 hover:bg-black text-[#FFD700] border-2 border-[#FFD700] p-3 sm:px-4 sm:py-2.5 rounded-full sm:rounded-xs shadow-xl transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:scale-105"
        title="Call Balwant TMT Sales Desk"
        aria-label="Call Now"
      >
        <div className="relative">
          <Phone className="w-5 h-5 text-[#FFD700] animate-bounce" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-black" />
        </div>
        <span className="hidden sm:inline-block font-display font-black text-xs uppercase tracking-wider text-white">
          {language === 'hi' ? 'कॉल करें / CALL NOW' : 'CALL NOW'}
        </span>
      </button>
    </div>
  );
};
