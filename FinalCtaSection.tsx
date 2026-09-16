import React from 'react';
import { BalwantLogo } from './BalwantLogo';
import { ArrowUpRight, Phone, Flame } from 'lucide-react';
import heroSteelImg from '../assets/images/tmt_rustfree_bars_final.jpg';
import { useLanguage } from '../context/LanguageContext';

interface FinalCtaSectionProps {
  onOpenEnquiry: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenEnquiry }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] bg-[#050507] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden content-auto">
      {/* Background Steel Reinforcement Visual with Heavy Contrast Vignette */}
      <img
        src={heroSteelImg}
        alt="Balwant TMT Strength"
        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-[1.2]"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      {/* Geometric Diagonal Accent Lines inspired by the Balwant logo */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#0047AB] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Official Logo Badge centered */}
        <div className="w-40 sm:w-48 md:w-56 mb-8 shadow-2xl">
          <BalwantLogo variant="badge" className="w-full h-auto" />
        </div>

        {/* Large Yellow Typography */}
        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.88] uppercase text-[#FFD700] drop-shadow-2xl mb-5">
          {t.finalCta.title1}<br />
          <span className="text-white">{t.finalCta.title2}</span>
        </h2>

        {/* Tagline Banner */}
        <div className="inline-flex items-center gap-3 bg-[#0047AB] text-white font-black text-xl sm:text-2xl md:text-3xl px-6 py-2.5 rounded-xs shadow-xl shadow-[#0047AB]/30 mb-6">
          <Flame className="w-6 h-6 text-[#FFD700]" />
          <span>{t.finalCta.tagline}</span>
        </div>

        {/* Supporting Copy */}
        <p className="text-zinc-300 text-base sm:text-xl font-medium max-w-2xl leading-relaxed mb-8">
          {t.finalCta.subtitle}
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="final-enquire-now-btn"
            onClick={onOpenEnquiry}
            className="bg-[#FFD700] hover:bg-[#FFE04D] text-[#0B0B0C] font-display font-black text-lg tracking-wider uppercase px-10 py-4 rounded-xs shadow-xl shadow-[#FFD700]/30 transition-colors flex items-center justify-center gap-3 group cursor-pointer w-full sm:w-auto"
          >
            <span>{t.finalCta.enquireBtn}</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="tel:+918817303963"
            className="bg-black/80 hover:bg-black text-white border border-white/25 hover:border-[#FFD700] font-display font-bold text-base tracking-wider uppercase px-7 py-4 rounded-xs transition-colors flex items-center justify-center gap-2.5 cursor-pointer w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 text-[#FFD700]" />
            <span>+91 8817303963</span>
          </a>
        </div>
      </div>
    </section>
  );
};

