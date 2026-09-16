import React from 'react';
import { APPLICATIONS } from '../data/tmtData';
import { ArrowUpRight } from 'lucide-react';

interface ApplicationsSectionProps {
  onOpenEnquiry: () => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative bg-[#09090C] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#FFD100]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD100] uppercase font-bold">
                APPLICATION HORIZONS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              BUILT FOR<br />
              <span className="text-[#0080CC]">WHAT MATTERS.</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-400 text-sm font-medium">
            From the sanctum of a family home to 50-story commercial towers and national bridge networks, Balwant steel is the silent spine of modern India.
          </div>
        </div>

        {/* Asymmetric Image Mosaic Layout */}
        <div className="grid grid-cols-12 gap-6">
          {APPLICATIONS.map((app, idx) => (
            <div
              key={idx}
              className={`${app.span} relative group overflow-hidden rounded-xs border border-white/15 min-h-[340px] sm:min-h-[400px] bg-black shadow-lg cursor-pointer hover:border-[#FFD100] transition-colors`}
              onClick={onOpenEnquiry}
            >
              {/* Image */}
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Tag Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-black/80 backdrop-blur-md text-[#FFD100] text-xs font-mono-tech px-3 py-1 font-bold border border-white/10 rounded-xs uppercase">
                  {app.tag}
                </span>
                <span className="text-[#0080CC] text-sm font-bold bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-xs">
                  {app.hindi}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white uppercase tracking-tight mb-2">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed line-clamp-2">
                    {app.desc}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-xs bg-[#FFD100] text-black flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

