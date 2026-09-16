import React from 'react';
import { ArrowUpRight, MapPin, Handshake, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DealerCtaSectionProps {
  onOpenEnquiry: () => void;
  onOpenDealer: () => void;
}

export const DealerCtaSection: React.FC<DealerCtaSectionProps> = ({
  onOpenEnquiry,
  onOpenDealer,
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#FFD700] text-[#0B0B0C] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden content-auto">
      {/* Background Graphic Diagonal Accents */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 pointer-events-none opacity-15">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="200,0 200,200 0,200" fill="#111111" />
          <polygon points="200,40 200,200 40,200" fill="#0047AB" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Huge Black Typography */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-black text-[#FFD700] px-3.5 py-1 text-xs font-mono-tech font-bold uppercase rounded-xs mb-4">
              <span>{t.dealerCta.badge}</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.92] uppercase text-black mb-5">
              {t.dealerCta.title1}<br />
              {t.dealerCta.title2}
            </h2>

            <p className="text-zinc-900 text-base sm:text-xl font-bold max-w-2xl leading-relaxed">
              {t.dealerCta.desc}
            </p>
          </div>

          {/* Right Column: 3 Distinct CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <button
              id="dealer-find-btn"
              onClick={onOpenDealer}
              className="bg-black hover:bg-zinc-900 text-white font-display font-black text-base uppercase tracking-wider px-6 py-4 rounded-xs transition-colors shadow-lg flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#FFD700]" />
                <span>{t.dealerCta.findDealerBtn}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              id="dealer-partner-btn"
              onClick={onOpenEnquiry}
              className="bg-[#0047AB] hover:bg-[#00388A] text-white font-display font-black text-base uppercase tracking-wider px-6 py-4 rounded-xs transition-colors shadow-lg flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Handshake className="w-5 h-5 text-white" />
                <span>{t.dealerCta.becomePartnerBtn}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              id="dealer-enquire-btn"
              onClick={onOpenEnquiry}
              className="bg-white hover:bg-zinc-100 text-black border-2 border-black font-display font-black text-base uppercase tracking-wider px-6 py-3.5 rounded-xs transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-black" />
                <span>{t.dealerCta.enquireBtn}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

