import React from 'react';
import familyImg from '../assets/images/balwant_indian_home_builder_1786953228879.jpg';
import { Heart, Home, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HumanConnectionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0E0E12] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      {/* Background Soft Warm Glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Emotional Photographic Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xs overflow-hidden border border-white/20 shadow-xl aspect-[4/3] sm:aspect-[16/12]">
              <img
                src={familyImg}
                alt="Balwant Steel - Building Indian Dream Homes"
                className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Emotional Quote Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-black/85 backdrop-blur-md p-4 sm:p-5 border border-white/15 rounded-xs">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FFD700] mb-1">
                  <Home className="w-4 h-4 text-[#0047AB]" />
                  <span>{t.human.cardTag}</span>
                </div>
                <p className="text-xs sm:text-base font-bold text-white leading-snug">
                  {t.human.cardQuote}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Emotional Brand Copywriting */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#FFD700]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD700] uppercase font-bold">
                {t.human.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.94] uppercase text-white mb-5">
              {t.human.title1}<br />
              <span className="text-[#FFD700]">{t.human.title2}</span><br />
              <span className="text-[#0047AB]">{t.human.title3}</span>
            </h2>

            <blockquote className="text-lg sm:text-xl text-zinc-200 font-semibold leading-relaxed border-l-4 border-[#0047AB] pl-4 mb-5">
              {t.human.quote}
            </blockquote>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              {t.human.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-black text-sm sm:text-base text-white uppercase">
                    {t.human.stat1Val}
                  </h4>
                  <p className="text-xs text-zinc-400">{t.human.stat1Label}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#0047AB]/20 text-[#0080CC] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-black text-sm sm:text-base text-white uppercase">
                    {t.human.stat2Val}
                  </h4>
                  <p className="text-xs text-zinc-400">{t.human.stat2Label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

