import React, { useState } from 'react';
import { PROJECTS } from '../data/tmtData';
import { ArrowUpRight, Building2, MapPin, Layers, Shield } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const featured = PROJECTS[activeProjectIdx];

  const handleSelectProject = (idx: number) => {
    if (idx !== activeProjectIdx) {
      setActiveProjectIdx(idx);
    }
  };

  return (
    <section id="projects" className="relative bg-[#060608] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#0080CC]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD100] uppercase font-bold">
                REPRESENTATIVE STRUCTURAL PORTFOLIO
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              STRENGTH<br />
              <span className="text-[#FFD100]">BEHIND STRUCTURES.</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-400 text-sm font-medium">
            From critical flyover corridors to landmark multi-story commercial towers, Balwant steel forms the invisible backbone.
          </div>
        </div>

        {/* Cinematic Layout: 60% Featured + 40% Side Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Featured Project (60% width) */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[520px] rounded-xs overflow-hidden border border-white/20 bg-black group shadow-xl">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.04]"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Top Project Tag */}
            <div className="absolute top-5 left-5 flex items-center gap-2 z-20">
              <span className="bg-[#FFD100] text-black font-mono-tech text-xs font-black px-3 py-1 rounded-xs uppercase">
                {featured.grade}
              </span>
              <span className="bg-black/70 backdrop-blur-md text-zinc-300 font-mono-tech text-xs px-3 py-1 rounded-xs border border-white/10">
                {featured.type}
              </span>
            </div>

            {/* Bottom Content Card */}
            <div className="absolute bottom-5 left-5 right-5 bg-[#0B0B0E]/90 backdrop-blur-md p-5 sm:p-6 border border-white/20 rounded-xs z-20">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FFD100] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#0080CC]" />
                <span>{featured.location}</span>
                <span className="text-zinc-600">|</span>
                <span>{featured.steelUsed}</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-3xl text-white uppercase mb-2">
                {featured.name}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Side: Project Selector List (40% width) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {PROJECTS.map((proj, idx) => {
              const isSelected = activeProjectIdx === idx;
              return (
                <div
                  key={proj.id}
                  id={`project-select-card-${proj.id}`}
                  onClick={() => handleSelectProject(idx)}
                  className={`p-4 rounded-xs border cursor-pointer transition-colors flex items-center gap-4 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#15161B] border-[#FFD100] shadow-md shadow-[#FFD100]/10'
                      : 'bg-[#0E0E11] border-white/10 hover:border-white/25 hover:bg-[#121215]'
                  }`}
                >
                  {isSelected && <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#FFD100]" />}

                  <div className="w-16 h-16 rounded-xs overflow-hidden flex-shrink-0 relative border border-white/10 bg-black/40">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[11px] font-mono-tech text-zinc-400 mb-0.5">
                      <span className="text-[#0080CC] font-bold">{proj.grade}</span>
                      <span>{proj.steelUsed}</span>
                    </div>
                    <h4 className="font-display font-black text-base text-white uppercase truncate">
                      {proj.name}
                    </h4>
                    <p className="text-xs text-zinc-400 truncate">{proj.type}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

