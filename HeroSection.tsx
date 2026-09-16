import React from 'react';
import { BalwantLogo } from './BalwantLogo';
import { ArrowUpRight, Phone, ShieldCheck, Flame, Layers, ChevronDown } from 'lucide-react';
import heroSteelImg from '../assets/images/tmt_rustfree_hero_final.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onExploreProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry,
  onExploreProducts,
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] bg-[#FFFDF0] text-zinc-900 pt-16 sm:pt-20 pb-16 lg:pb-20 flex items-center overflow-hidden border-b border-amber-200/80"
    >
      {/* Background Subtle Yellow Accent Gradients */}
      <div className="absolute inset-0 bg-yellow-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amber-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Typography & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Label Pill with ISI hallmark */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-amber-300 px-3.5 py-1.5 rounded-xs mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="font-mono-tech text-xs tracking-widest text-amber-900 uppercase font-bold">
                {t.hero.precisionEngineering}
              </span>
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-600 text-xs font-semibold">IS: 1786 : 2008</span>
            </div>

            {/* Huge Cinematic Headline */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tighter leading-[0.88] uppercase text-zinc-900 mb-6">
              <span className="block text-zinc-900">{t.hero.headlinePart1}</span>
              <span className="block text-[#D9A700]">{t.hero.headlinePart2}</span>
              <span className="block text-zinc-800">{t.hero.headlinePart3}</span>
            </h1>

            {/* Official Hindi Tagline & Geometric Rule */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
              <div className="w-16 sm:w-20 h-[3px] bg-[#FFD700]" />
              <div className="bg-amber-100 border border-amber-300 text-zinc-900 font-black text-lg sm:text-2xl md:text-3xl px-6 py-2.5 tracking-wide rounded-xs shadow-xs flex items-center gap-3">
                <Flame className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <span className="font-serif italic font-normal tracking-normal">{t.hero.tagline}</span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-zinc-700 text-lg sm:text-xl font-medium max-w-xl leading-relaxed mb-8">
              {t.hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <button
                id="hero-explore-tmt-btn"
                onClick={onExploreProducts}
                className="bg-[#FFD700] hover:bg-[#F5C700] text-black font-display font-black text-base sm:text-lg tracking-wider uppercase px-8 py-4 rounded-xs shadow-md shadow-[#FFD700]/30 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto border border-amber-300"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                id="hero-talk-to-us-btn"
                onClick={onOpenEnquiry}
                className="bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 hover:border-amber-400 font-display font-bold text-base sm:text-lg tracking-wider uppercase px-8 py-4 rounded-xs transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer w-full sm:w-auto shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>{t.hero.talkToUsBtn}</span>
              </button>
            </div>

            {/* Key Technical Highlights Badges */}
            <div className="mt-10 pt-6 border-t border-amber-200 w-full grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-zinc-900">{t.hero.gradeBadge}</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-bold uppercase mt-0.5">{t.hero.gradeSub}</div>
              </div>
              <div className="border-l border-zinc-200 pl-4">
                <div className="font-display font-black text-2xl sm:text-3xl text-amber-800">100%</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-bold uppercase mt-0.5">Prime Virgin Steel</div>
              </div>
              <div className="border-l border-zinc-200 pl-4">
                <div className="font-display font-black text-2xl sm:text-3xl text-amber-700">600°C</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-bold uppercase mt-0.5">Fire Safe Rim</div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Dramatic Steel Visual with Official Logo Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing Rim Border Accent */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FFD700] via-amber-300 to-transparent rounded-sm opacity-60 blur-sm" />

              <div className="relative bg-white border border-amber-200 overflow-hidden rounded-sm shadow-xl group">
                {/* Hero Dramatic Steel Image */}
                <div className="relative aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden">
                  <img
                    src={heroSteelImg}
                    alt="Balwant TMT Ribbed Steel Reinforcement Bars"
                    className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.04] saturate-[1.12] transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Balanced Light Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-black/10 pointer-events-none" />

                  {/* Logo Overlay on the visual */}
                  <div className="absolute top-4 sm:top-5 left-4 sm:left-5 w-36 sm:w-44 md:w-48 shadow-lg transition-transform duration-300 hover:scale-105">
                    <BalwantLogo variant="badge" className="w-full h-auto" />
                  </div>

                  {/* Steel Heavy Specification Overlay Box */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md border border-amber-300 p-4 rounded-xs shadow-md">
                    <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-[#FFD700] rounded-xs" />
                        <span className="font-display font-black text-sm text-zinc-900 tracking-wider">
                          QST METALLURGY
                        </span>
                      </div>
                      <span className="font-mono-tech text-xs text-amber-800 font-bold">
                        UTS / YS &gt; 1.20
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Core Microstructure</span>
                        <span className="text-zinc-900 font-bold">Ferrite-Pearlite</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Outer Rim Shell</span>
                        <span className="text-zinc-900 font-bold">Tempered Martensite</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Engineering ISI Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white border-2 border-[#FFD700] p-3.5 shadow-xl rounded-xs flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 bg-[#FFD700] text-black font-black flex items-center justify-center font-display text-xl rounded-xs">
                  ISI
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-zinc-900 uppercase tracking-wider font-display">
                    GOVERNMENT OF INDIA
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono-tech font-bold">
                    BUREAU OF INDIAN STANDARDS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concentric Geometric Circles from Geometric Balance design */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-[#FFD700]/15 rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-36 -right-36 w-[450px] h-[450px] border border-[#0047AB]/20 rounded-full pointer-events-none z-0" />

      {/* Structural Integrity Geometric Notch Accent */}
      <div className="hidden lg:flex absolute bottom-0 right-0 h-16 bg-[#0047AB] z-20 items-center justify-center px-8 clip-diagonal gap-4">
        <span className="font-display font-black text-xs tracking-[0.25em] uppercase text-white">{t.hero.structuralIntegrity}</span>
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#statement"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 hover:text-[#FFD700] transition-colors group z-20"
      >
        <span className="text-[10px] font-mono-tech uppercase tracking-widest text-zinc-400">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#FFD700]" />
      </a>
    </section>
  );
};
