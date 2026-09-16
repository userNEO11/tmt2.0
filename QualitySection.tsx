import React from 'react';
import { ShieldCheck, Award, Microscope, CheckCircle2, FileCheck, Layers } from 'lucide-react';
import qualityImg from '../assets/images/tmt_rustfree_macro_final.jpg';
import { useLanguage } from '../context/LanguageContext';

export const QualitySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="quality" className="snap-section relative bg-[#060608] text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      {/* Background Tech Watermark */}
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#FFD700]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD700] uppercase font-bold">
                {t.quality.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              {t.quality.title1}<br />
              <span className="text-[#FFD700]">{t.quality.title2}</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-400 text-sm font-medium">
            {t.quality.subtitle}
          </div>
        </div>

        {/* Quality Lab & Chemical Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Left: Annotated Macro Rib & Microstructure Breakdown */}
          <div className="lg:col-span-7 bg-[#101014] border border-white/15 rounded-xs p-5 sm:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-black text-xl sm:text-2xl text-white uppercase">
                ADVANCED RIB GEOMETRY &amp; CONCRETE GRIP
              </span>
              <span className="bg-[#0047AB] text-white text-xs font-mono-tech px-2.5 py-1 rounded-xs font-bold">
                AR &gt; 0.12
              </span>
            </div>

            {/* Macro Image */}
            <div className="relative aspect-[16/9] rounded-xs overflow-hidden border border-white/15 mb-4">
              <img
                src={qualityImg}
                alt="Balwant TMT Precision Ribs"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#FFD700] font-bold">CNC-MILLED TRANSVERSE RIBS</span>
                <span className="text-zinc-300">100% UNIFORM PITCH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-zinc-300">
              <div className="bg-[#181820] p-3.5 border border-white/10 rounded-xs">
                <div className="font-mono-tech text-xs text-[#FFD700] uppercase mb-1">
                  CORE DUCTILITY
                </div>
                <div className="text-white font-bold">Ferrite-Pearlite Core</div>
                <p className="text-xs text-zinc-400 mt-1">
                  Absorbs seismic ground tremors and prevents sudden structural shear snapping.
                </p>
              </div>

              <div className="bg-[#181820] p-3.5 border border-white/10 rounded-xs">
                <div className="font-mono-tech text-xs text-[#0080CC] uppercase mb-1">
                  SURFACE HARDNESS
                </div>
                <div className="text-white font-bold">Tempered Martensite</div>
                <p className="text-xs text-zinc-400 mt-1">
                  Resists severe atmospheric corrosion and provides immense tensile load bearing.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Chemical & Mechanical Tolerance Benchmark Card */}
          <div className="lg:col-span-5 bg-[#121217] border border-white/15 rounded-xs p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-zinc-400 uppercase mb-3">
                <Microscope className="w-4 h-4 text-[#FFD700]" />
                <span>NABL ACCREDITED SPECTROMETRY</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase mb-4">
                CHEMICAL PURITY STANDARDS
              </h3>

              {/* Chemical Limits Table */}
              <div className="space-y-2.5 font-mono-tech text-xs">
                <div className="flex items-center justify-between p-2.5 bg-black/40 border border-white/10 rounded-xs">
                  <span className="text-zinc-400 font-bold">Carbon (C)</span>
                  <span className="text-[#FFD700] font-black">0.25% Max</span>
                  <span className="text-zinc-500">(Enhanced Weldability)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-black/40 border border-white/10 rounded-xs">
                  <span className="text-zinc-400 font-bold">Sulphur (S)</span>
                  <span className="text-[#FFD700] font-black">0.040% Max</span>
                  <span className="text-zinc-500">(Zero Red Shortness)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-black/40 border border-white/10 rounded-xs">
                  <span className="text-zinc-400 font-bold">Phosphorus (P)</span>
                  <span className="text-[#FFD700] font-black">0.040% Max</span>
                  <span className="text-zinc-500">(Cold Brittleness Safe)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-black/40 border border-white/10 rounded-xs">
                  <span className="text-zinc-400 font-bold">S + P Combined</span>
                  <span className="text-[#0080CC] font-black">0.075% Max</span>
                  <span className="text-zinc-500">(Strict Purity Zone)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-[#FFD700] flex-shrink-0" />
              <div className="text-xs text-zinc-300">
                <strong className="text-white block font-bold">MTC (Mill Test Certificate)</strong>
                Issued with every dispatch consignment verifying heat number and test values.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

