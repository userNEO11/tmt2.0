import React, { useState } from 'react';
import { BALWANT_PRODUCTS, ProductGrade } from '../data/tmtData';
import { ArrowUpRight, Check, Shield, Layers, Zap, Info } from 'lucide-react';
import tmtDetailImg from '../assets/images/tmt_rustfree_bundles_final.jpg';
import heroSteelImg from '../assets/images/tmt_rustfree_bars_final.jpg';
import { useLanguage } from '../context/LanguageContext';

interface ProductRangeSectionProps {
  onSelectProduct: (product: ProductGrade) => void;
  onOpenEnquiry: () => void;
}

export const ProductRangeSection: React.FC<ProductRangeSectionProps> = ({
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<string>('550d');
  const activeProduct = BALWANT_PRODUCTS.find((p) => p.id === activeTab) || BALWANT_PRODUCTS[0];
  const { t } = useLanguage();

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <section id="products" className="relative bg-[#0B0B0E] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#FFD700]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD700] uppercase font-bold">
                {t.products.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              {t.products.title1}<br />
              <span className="text-[#FFD700]">{t.products.title2}</span>
            </h2>
          </div>

          {/* Grade Selector Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-[#141418] p-1.5 border border-white/15 rounded-xs">
            {BALWANT_PRODUCTS.map((p) => {
              const isSelected = p.id === activeTab;
              return (
                <button
                  key={p.id}
                  id={`product-tab-btn-${p.id}`}
                  onClick={() => handleTabChange(p.id)}
                  className={`font-display font-black text-sm sm:text-base px-5 py-2.5 rounded-xs transition-colors uppercase tracking-wider cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFD700] text-black shadow-md shadow-[#FFD700]/20'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {p.grade}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Product Specification Sheet Card */}
        <div className="bg-[#121217] border border-white/15 rounded-xs overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Visual Steel Texture & Microstructure Callout */}
            <div className="lg:col-span-5 relative bg-[#09090C] border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#FFD700] text-black text-xs font-mono-tech font-black px-2.5 py-1 rounded-xs uppercase">
                    {activeProduct.tag}
                  </span>
                  <span className="text-zinc-400 text-xs font-mono-tech">
                    THERMEX® LICENSE
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mb-1">
                  {activeProduct.grade}
                </h3>
                <h4 className="text-base text-[#0080CC] font-bold mb-4">
                  {activeProduct.name}
                </h4>

                {/* Macro Rebar Image Frame */}
                <div className="relative aspect-[16/10] rounded-xs overflow-hidden border border-white/15 mb-4 group bg-black/40">
                  <img
                    src={activeProduct.id === '550d' ? tmtDetailImg : heroSteelImg}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover filter brightness-100 contrast-[1.05]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono-tech z-20">
                    <span className="text-white font-bold">8mm to 32mm Diameter</span>
                    <span className="text-[#FFD700]">IS: 1786 : 2008</span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {activeProduct.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <button
                  id="product-request-quote-btn"
                  onClick={onOpenEnquiry}
                  className="bg-[#FFD700] hover:bg-[#FFE04D] text-black font-display font-black text-sm uppercase px-5 py-3 rounded-xs transition-colors shadow-md flex-1 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.products.requestQuote}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProduct(activeProduct)}
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 font-display font-bold text-sm uppercase px-4 py-3 rounded-xs transition-colors cursor-pointer"
                >
                  {t.products.viewSpecs}
                </button>
              </div>
            </div>

            {/* Right Column: High-Density Technical Data Specifications Matrix */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#FFD700]" />
                  <span>METALLURGICAL TEST MATRIX (IS 1786 : 2008)</span>
                </h4>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-[#181820] border border-white/10 p-3.5 rounded-xs">
                    <div className="text-xs text-zinc-400 font-mono-tech uppercase mb-1">
                      YIELD STRENGTH
                    </div>
                    <div className="font-display font-black text-lg text-white">
                      {activeProduct.yieldStrength}
                    </div>
                  </div>

                  <div className="bg-[#181820] border border-white/10 p-3.5 rounded-xs">
                    <div className="text-xs text-zinc-400 font-mono-tech uppercase mb-1">
                      TENSILE STRENGTH
                    </div>
                    <div className="font-display font-black text-lg text-[#FFD700]">
                      {activeProduct.tensileStrength}
                    </div>
                  </div>

                  <div className="bg-[#181820] border border-white/10 p-3.5 rounded-xs">
                    <div className="text-xs text-zinc-400 font-mono-tech uppercase mb-1">
                      TOTAL ELONGATION
                    </div>
                    <div className="font-display font-black text-lg text-[#0080CC]">
                      {activeProduct.elongation}
                    </div>
                  </div>
                </div>

                {/* Structural Key Features */}
                <h4 className="font-display font-black text-sm text-zinc-300 uppercase tracking-wider mb-3">
                  KEY METALLURGICAL ADVANTAGES
                </h4>

                <div className="space-y-2.5 mb-6">
                  {activeProduct.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended For */}
                <h4 className="font-display font-black text-xs text-zinc-400 font-mono-tech uppercase tracking-wider mb-2">
                  IDEAL FOR STRUCTURES
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProduct.recommendedFor.map((rec, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-xs text-zinc-300">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>

              {/* IS:1786 Standard Note */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-zinc-400 font-mono-tech">
                <Shield className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <span>
                  All Balwant TMT rebars are 100% manufactured from prime billets with complete chemical test traceability.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

