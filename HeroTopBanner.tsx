import React from 'react';
import {
  ShieldCheck,
  Flame,
  Award,
  PhoneCall,
  ArrowUpRight,
  MapPin,
  Film,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BalwantLogo } from './BalwantLogo';

interface HeroTopBannerProps {
  onOpenEnquiry: (grade?: string) => void;
  onOpenDealer: () => void;
  onWatchVideo?: () => void;
}

export const HeroTopBanner: React.FC<HeroTopBannerProps> = ({
  onOpenEnquiry,
  onOpenDealer,
  onWatchVideo,
}) => {
  const { language, t } = useLanguage();

  return (
    <section
      id="hero-information-banner"
      className="w-full bg-[#FFFDF0] border-b border-amber-200/90 text-zinc-900 select-none relative overflow-hidden"
    >
      {/* Subtle Yellow Gradient Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Micro Live Ticker Bar */}
      <div className="bg-[#FFD700] text-black border-b border-amber-300 px-4 py-1.5 text-xs font-mono-tech">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>
              {language === 'hi'
                ? 'लाइव मिल अपडेट: 100% प्राइमरी बिलेट रोलिंग जारी • उत्तर भारत में त्वरित डिलीवरी'
                : 'LIVE MILL UPDATE: 100% PRIMARY VIRGIN BILLET ROLLING ACTIVE • EXPRESS DISPATCH'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold">
            <span className="hidden sm:inline-block">
              BIS IS: 1786 : 2008 &amp; ISO 9001:2015
            </span>
            <a href="tel:+918817303963" className="hover:underline flex items-center gap-1">
              <span>📞 +91 8817303963 / +91 8839838970</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Banner Body Upon Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Brand Statement & Slogan */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Hallmark Pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-amber-300 px-3.5 py-1 rounded-xs mb-3 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span className="font-mono-tech text-xs font-black text-amber-900 tracking-wider uppercase">
                {language === 'hi'
                  ? 'BIS प्रमाणित Fe 550D प्राइमरी स्टील'
                  : 'BIS CERTIFIED Fe 550D PRIMARY STEEL'}
              </span>
              <span className="text-zinc-300">|</span>
              <span className="font-mono-tech text-xs text-zinc-600 font-semibold">
                IS: 1786 : 2008
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-zinc-900 leading-none mb-3">
              BALWANT TMT{' '}
              <span className="text-[#D9A700]">FE 550D</span>
            </h1>

            {/* Official Hindi Tagline Ribbon */}
            <div className="flex items-center gap-3 bg-amber-100 border border-amber-300 px-4 py-2 rounded-xs mb-4 shadow-xs">
              <Flame className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span className="font-display font-black text-base sm:text-xl text-zinc-900 tracking-wide">
                सरिया नही, फौलाद है ये
              </span>
              <span className="text-zinc-400 font-mono-tech text-xs hidden sm:inline-block">
                • 100% Prime Virgin Billet
              </span>
            </div>

            {/* Brief Value Proposition */}
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-5 font-medium max-w-2xl">
              {language === 'hi'
                ? 'जर्मन थर्मेक्स® QST तकनीक द्वारा निर्मित उच्च लचीला (High Ductility) Fe 550D सरिया। भूकंपरोधी संरचना, अधिकतम कंक्रीट ग्रिप और जंग-प्रतिरोधी सुरक्षा।'
                : 'Manufactured with German Thermex® QST automation from 100% prime virgin billets. Engineered for extreme seismic energy dissipation, superior rib bonding (AR > 0.075), and lifelong structural integrity.'}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenEnquiry('Fe 550D')}
                className="bg-[#FFD700] hover:bg-[#F5C700] text-black font-display font-black text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-7 py-3 rounded-xs shadow-sm flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border border-amber-400"
              >
                <span>
                  {language === 'hi' ? 'फैक्ट्री रेट कोटेशन लें' : 'Get Factory Price Quote'}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDealer}
                className="bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 hover:border-amber-400 font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>
                  {language === 'hi' ? 'डीलर नेटवर्क खोजें' : 'Locate Authorized Dealers'}
                </span>
              </button>

              {onWatchVideo && (
                <button
                  onClick={onWatchVideo}
                  className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-display font-black text-xs sm:text-sm uppercase tracking-wider px-4 py-3 rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Film className="w-4 h-4 text-amber-700" />
                  <span>
                    {language === 'hi' ? 'TMT मेकिंग वीडियो' : 'Watch Mill Video'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: 4 Key Pillar Highlights in Crisp Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 w-full">
            {/* Box 1: Yield Strength */}
            <div className="bg-white border border-amber-200 p-3.5 rounded-xs shadow-xs hover:border-amber-400 transition-colors text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tech text-[10px] text-zinc-500 font-bold uppercase">
                  Yield Strength
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <div className="font-display font-black text-xl sm:text-2xl text-zinc-900">
                550 <span className="text-xs text-amber-800 font-mono-tech font-bold">N/mm²</span>
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {language === 'hi' ? 'उच्च भार वहन क्षमता' : 'High Load Capacity'}
              </p>
            </div>

            {/* Box 2: Elongation */}
            <div className="bg-white border border-amber-200 p-3.5 rounded-xs shadow-xs hover:border-amber-400 transition-colors text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tech text-[10px] text-zinc-500 font-bold uppercase">
                  Ductility Elongation
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="font-display font-black text-xl sm:text-2xl text-emerald-700">
                16.0% <span className="text-xs text-zinc-600 font-mono-tech font-bold">+</span>
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {language === 'hi' ? 'भूकंपरोधी लचीलापन' : 'Seismic Absorption'}
              </p>
            </div>

            {/* Box 3: German Thermex QST */}
            <div className="bg-white border border-amber-200 p-3.5 rounded-xs shadow-xs hover:border-amber-400 transition-colors text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tech text-[10px] text-zinc-500 font-bold uppercase">
                  Process Tech
                </span>
                <Flame className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <div className="font-display font-black text-lg sm:text-xl text-zinc-900">
                Thermex® QST
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {language === 'hi' ? 'जर्मन क्वेंचिंग तकनीक' : 'Martensitic Outer Rim'}
              </p>
            </div>

            {/* Box 4: Bond Strength */}
            <div className="bg-white border border-amber-200 p-3.5 rounded-xs shadow-xs hover:border-amber-400 transition-colors text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tech text-[10px] text-zinc-500 font-bold uppercase">
                  Rib Grip
                </span>
                <Award className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <div className="font-display font-black text-lg sm:text-xl text-zinc-900">
                AR &gt; 0.075
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {language === 'hi' ? 'कंक्रीट के साथ 250% मजबूत पकड़' : '250% Mechanical Grip'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
