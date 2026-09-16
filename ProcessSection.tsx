import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/tmtData';
import { Flame, CheckCircle2, ChevronRight, Cpu, Thermometer, Wind, Scissors } from 'lucide-react';
import millImg from '../assets/images/tmt_mill_sparks_bright_1787135359045.jpg';
import heroImg from '../assets/images/tmt_rustfree_hero_final.jpg';
import detailImg from '../assets/images/tmt_rustfree_macro_final.jpg';
import bridgeImg from '../assets/images/tmt_rustfree_bundles_final.jpg';
import { useLanguage } from '../context/LanguageContext';

const STEP_IMAGES = [
  millImg,
  millImg,
  detailImg,
  heroImg,
  bridgeImg,
];

export const ProcessSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(2); // default Thermex QST
  const { t } = useLanguage();

  return (
    <section id="process" className="snap-section relative bg-[#09090B] text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#0047AB]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD700] uppercase font-bold">
                {t.process.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              {t.process.title1}<br />
              <span className="text-[#FFD700]">{t.process.title2}</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-400 text-sm font-medium">
            {t.process.subtitle}
          </div>
        </div>

        {/* Process Timeline Flow */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                key={step.step}
                id={`process-step-btn-${step.step}`}
                onClick={() => setSelectedStep(idx)}
                className={`p-3.5 rounded-xs border text-left transition-colors relative group cursor-pointer ${
                  isSelected
                    ? 'bg-[#181822] border-[#FFD700] shadow-lg'
                    : 'bg-[#101014] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono-tech text-xs font-bold ${
                      isSelected ? 'text-[#FFD700]' : 'text-zinc-500'
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  <span className="text-[10px] font-mono-tech text-zinc-400">
                    {step.stat}
                  </span>
                </div>

                <div className="font-display font-black text-sm sm:text-base text-white uppercase leading-tight">
                  {step.name}
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFD700]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Technical Showcase */}
        <div className="bg-[#121216] border border-white/15 rounded-xs overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Media Column */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[380px] bg-black">
              <img
                src={STEP_IMAGES[selectedStep]}
                alt={PROCESS_STEPS[selectedStep].name}
                className="w-full h-full object-cover filter brightness-100 contrast-[1.05]"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              {/* Thermal / Metric Readout */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/20 rounded-xs flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-[#FFD700]" />
                <span className="font-mono-tech text-xs text-white font-bold">
                  {PROCESS_STEPS[selectedStep].stat}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-[#0047AB] text-white text-[10px] font-mono-tech font-bold px-2 py-0.5 rounded-xs uppercase">
                  THERMEX® METALLURGY
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mt-1.5">
                  {PROCESS_STEPS[selectedStep].name}
                </h3>
              </div>
            </div>

            {/* Technical Detail Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-zinc-400 uppercase mb-3">
                  <Cpu className="w-4 h-4 text-[#FFD700]" />
                  <span>{PROCESS_STEPS[selectedStep].highlight}</span>
                </div>

                <p className="text-zinc-200 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  {PROCESS_STEPS[selectedStep].description}
                </p>
              </div>

              {/* Bottom Quote Banner */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono-tech">
                <span>STAGE {PROCESS_STEPS[selectedStep].step} OF 05</span>
                <button
                  onClick={() => setSelectedStep((selectedStep + 1) % PROCESS_STEPS.length)}
                  className="text-[#FFD700] hover:underline flex items-center gap-1 font-bold cursor-pointer"
                >
                  <span>NEXT STAGE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

