import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import indianInfraImg from '../assets/images/balwant_infra_site_pure_1787135693938.jpg';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-[#0E0E11] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      {/* Editorial Grid Composition */}
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left: Huge Headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#0047AB]" />
              <span className="font-mono-tech text-xs tracking-[0.2em] text-[#FFD700] uppercase font-bold">
                {t.about.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.92] uppercase text-white">
              {t.about.title1}<br />
              <span className="text-[#FFD700]">{t.about.title2}</span>
            </h2>
          </div>

          {/* Right: Small Narrative & Core Belief */}
          <div className="lg:col-span-5 lg:pt-8 flex flex-col justify-between h-full">
            <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed mb-4">
              {t.about.desc1}
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.about.desc2}
            </p>
          </div>
        </div>

        {/* Asymmetrical Visual & Metadata Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Large Editorial Visual Frame */}
          <div className="lg:col-span-8 relative min-h-[360px] sm:min-h-[420px] rounded-xs overflow-hidden group border border-white/15">
            <img
              src={indianInfraImg}
              alt="Balwant Steel Construction Infrastructure"
              className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.06] saturate-[1.12]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Balanced Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption inside Image */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-md">
                <span className="text-xs font-mono-tech text-[#FFD700] uppercase tracking-wider block mb-1">
                  MANUFACTURING PHILOSOPHY
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide">
                  Zero Compromise On Chemical &amp; Physical Purity
                </h3>
              </div>
              <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-white/20 rounded-xs">
                <span className="text-xs font-mono-tech text-zinc-300">IS: 1786 : 2008</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Data Specs Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3 sm:gap-4">
            {/* Spec Box 1 */}
            <div className="bg-[#15161A] border border-white/10 p-5 rounded-xs relative group hover:border-[#FFD700] transition-colors">
              <div className="flex items-center justify-between text-xs font-mono-tech text-zinc-400 mb-1.5">
                <span>METALLURGY</span>
                <span className="text-[#FFD700]">GERMAN QST</span>
              </div>
              <div className="font-display font-black text-2xl text-white uppercase">
                THERMEX QUENCH
              </div>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Computerized continuous water spray forms tough martensite outer shell while preserving ferrite core.
              </p>
            </div>

            {/* Spec Box 2 */}
            <div className="bg-[#15161A] border border-white/10 p-5 rounded-xs relative group hover:border-[#0047AB] transition-colors">
              <div className="flex items-center justify-between text-xs font-mono-tech text-zinc-400 mb-1.5">
                <span>GRADES FORGED</span>
                <span className="text-[#0080CC]">HIGH TENSILE</span>
              </div>
              <div className="font-display font-black text-2xl text-white uppercase">
                Fe 550D &amp; Fe 600
              </div>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Super-ductile Fe 550D for seismic zones and ultra-high yield Fe 600 for heavy infrastructure.
              </p>
            </div>

            {/* Spec Box 3 */}
            <div className="bg-[#15161A] border border-white/10 p-5 rounded-xs relative group hover:border-white transition-colors">
              <div className="flex items-center justify-between text-xs font-mono-tech text-zinc-400 mb-1.5">
                <span>QUALITY STANDARDS</span>
                <span className="text-white">100% HEAT TESTED</span>
              </div>
              <div className="font-display font-black text-2xl text-white uppercase">
                BIS CERTIFIED
              </div>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Every batch certified for chemical composition, yield strength, elongation, and rib area (AR).
              </p>
            </div>
          </div>
        </div>

        {/* Small Visual Details Strip */}
        <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="border-l-2 border-[#FFD700] pl-3.5">
            <span className="text-[11px] font-mono-tech text-zinc-400 uppercase tracking-widest block">FORTIFIED</span>
            <span className="font-display font-black text-xl sm:text-2xl text-white mt-0.5 block">{t.about.metric1Val}</span>
            <span className="text-xs text-zinc-400 font-mono-tech">{t.about.metric1Label}</span>
          </div>

          <div className="border-l-2 border-[#0047AB] pl-3.5">
            <span className="text-[11px] font-mono-tech text-zinc-400 uppercase tracking-widest block">FLAGSHIP GRADE</span>
            <span className="font-display font-black text-xl sm:text-2xl text-white mt-0.5 block">{t.about.metric2Val}</span>
            <span className="text-xs text-zinc-400 font-mono-tech">{t.about.metric2Label}</span>
          </div>

          <div className="border-l-2 border-white/40 pl-3.5">
            <span className="text-[11px] font-mono-tech text-zinc-400 uppercase tracking-widest block">DISTRIBUTION</span>
            <span className="font-display font-black text-xl sm:text-2xl text-white mt-0.5 block">{t.about.metric3Val}</span>
            <span className="text-xs text-zinc-400 font-mono-tech">{t.about.metric3Label}</span>
          </div>

          <div className="border-l-2 border-[#FFD700] pl-3.5">
            <span className="text-[11px] font-mono-tech text-zinc-400 uppercase tracking-widest block">BILLET PURITY</span>
            <span className="font-display font-black text-xl sm:text-2xl text-white mt-0.5 block">{t.about.metric4Val}</span>
            <span className="text-xs text-zinc-400 font-mono-tech">{t.about.metric4Label}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

