import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const BrandStatement: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="statement"
      className="relative bg-[#FAFAFA] text-[#0B0B0C] py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden content-auto"
    >
      {/* Subtle brand diagonal watermark line */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-5">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <line x1="0" y1="0" x2="200" y2="400" stroke="#0047AB" strokeWidth="30" />
          <line x1="40" y1="0" x2="240" y2="400" stroke="#FFD700" strokeWidth="20" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-left relative z-10">
        {/* Editorial Eyebrow Tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-1 bg-[#FFD700]" />
          <span className="font-mono-tech text-xs tracking-[0.25em] text-zinc-500 uppercase font-bold">
            {t.statement.certifiedTag}
          </span>
        </div>

        {/* Huge Typography */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase text-[#0B0B0C] mb-8">
          “STRONGER FOUNDATIONS.<br />
          <span className="text-[#0047AB]">STRONGER TOMORROWS.”</span>
        </h2>

        {/* Direct Statement Paragraph */}
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-700 font-medium leading-relaxed max-w-3xl">
          {t.statement.quote}
        </p>

        {/* Clean minimal separator */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-6 text-xs text-zinc-700 font-mono-tech uppercase font-bold">
          <span>HIGH-YIELD THERMEX METALLURGY</span>
          <span className="hidden sm:inline">•</span>
          <span>BUREAU OF INDIAN STANDARDS CERTIFIED</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#0047AB] font-bold">सरिया नही, फौलाद है ये</span>
        </div>
      </div>
    </section>
  );
};

