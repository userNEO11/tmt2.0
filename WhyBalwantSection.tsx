import React, { useState } from 'react';
import { WHY_BALWANT_PILLARS } from '../data/tmtData';
import { Shield, Activity, Flame, Award, ChevronRight, Check } from 'lucide-react';
import heroImg from '../assets/images/tmt_rustfree_hero_final.jpg';
import detailImg from '../assets/images/tmt_rustfree_bars_final.jpg';
import millImg from '../assets/images/tmt_mill_sparks_bright_1787135359045.jpg';
import bridgeImg from '../assets/images/tmt_rustfree_bundles_final.jpg';
import { useLanguage } from '../context/LanguageContext';

const PILLAR_IMAGES = [
  detailImg,
  heroImg,
  millImg,
  bridgeImg,
];

const ICONS = [Shield, Award, Activity, Flame];

export const WhyBalwantSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = WHY_BALWANT_PILLARS[activeIdx];
  const { t } = useLanguage();

  return (
    <section id="why-balwant" className="snap-section relative bg-[#08080A] text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0047AB]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#FFD700]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD700] uppercase font-bold">
                {t.whyBalwant.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              {t.whyBalwant.title1}<br />
              <span className="text-[#FFD700]">{t.whyBalwant.title2}</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-400 text-sm font-medium">
            {t.whyBalwant.subtitle}
          </div>
        </div>

        {/* Large Storytelling Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Vertical Interactive Navigation List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
            {WHY_BALWANT_PILLARS.map((pillar, idx) => {
              const Icon = ICONS[idx];
              const isActive = activeIdx === idx;

              return (
                <div
                  key={pillar.num}
                  id={`why-balwant-tab-${pillar.num}`}
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer p-5 sm:p-6 rounded-xs border transition-colors duration-200 relative group overflow-hidden ${
                    isActive
                      ? 'bg-[#15161B] border-[#FFD700] shadow-lg'
                      : 'bg-[#0E0E12] border-white/10 hover:border-white/25 hover:bg-[#121216]'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#FFD700]" />
                  )}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono-tech text-sm font-bold tracking-widest ${
                          isActive ? 'text-[#FFD700]' : 'text-zinc-500'
                        }`}
                      >
                        {pillar.num}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-white">
                        {pillar.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-xs flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#FFD700] text-black'
                          : 'bg-white/5 text-zinc-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-normal leading-relaxed pl-8">
                    {pillar.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-dive Dynamic Focus Panel */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-[#121216] border border-white/15 rounded-xs p-6 sm:p-8 flex-1 flex flex-col justify-between relative overflow-hidden group">
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0047AB]/10 rounded-full blur-[60px] pointer-events-none" />

              <div>
                {/* Visual Image Banner */}
                <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden mb-6 border border-white/15">
                  <img
                    src={PILLAR_IMAGES[activeIdx]}
                    alt={activeItem.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/20 rounded-xs text-xs font-mono-tech text-[#FFD700]">
                    STAGE {activeItem.num} // {activeItem.sub}
                  </div>
                </div>

                {/* Subtitle */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono-tech text-xs text-[#0080CC] uppercase tracking-widest font-bold">
                    METALLURGICAL PROOF POINT
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {activeItem.desc}
                </p>

                {/* Metrics list */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  {activeItem.metrics.map((m, i) => (
                    <div key={i} className="bg-[#181820] p-3 rounded-xs border border-white/10">
                      <div className="text-[10px] sm:text-[11px] font-mono-tech text-zinc-400 uppercase">{m.label}</div>
                      <div className="text-base sm:text-lg font-display font-black text-[#FFD700] mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Proof Metric Banner */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between bg-black/40 p-3.5 rounded-xs">
                <div>
                  <span className="text-[10px] font-mono-tech text-zinc-500 uppercase block">KEY SPECIFICATION</span>
                  <span className="font-display font-black text-lg text-[#FFD700] uppercase">
                    {activeItem.metrics[0]?.val || 'IS 1786 : 2008'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono-tech text-zinc-500 uppercase block">CERTIFICATION</span>
                  <span className="font-mono-tech text-xs text-zinc-300 font-bold">BIS IS: 1786 : 2008</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

