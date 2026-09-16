import React from 'react';
import millImg from '../assets/images/tmt_mill_sparks_bright_1787135359045.jpg';

export const SteelInMotion: React.FC = () => {
  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] min-h-[440px] overflow-hidden bg-black flex items-center justify-center content-auto">
      {/* Cinematic Full-width Background Image */}
      <img
        src={millImg}
        alt="Steel in Motion - Balwant Continuous Rolling Mill"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-100 contrast-[1.06]"
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
      />

      {/* Cinematic Balanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/45 pointer-events-none" />

      {/* Dynamic Framing Lines */}
      <div className="absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD100]/40 to-transparent" />
      <div className="absolute bottom-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0080CC]/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Yellow Line Accent */}
        <div className="w-16 h-1 bg-[#FFD100] mb-6 shadow-md shadow-[#FFD100]/50" />

        {/* Overlay Huge Typography */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.9] drop-shadow-2xl">
          FROM STEEL<br />
          <span className="text-[#FFD100]">TO STRUCTURE.</span>
        </h2>

        {/* Short Subtext */}
        <p className="mt-5 text-sm sm:text-lg md:text-xl text-zinc-300 font-medium max-w-2xl text-center leading-relaxed">
          Molten iron forged at 1150°C, quenched with micro-second precision,
          and delivered as India&apos;s most unyielding structural backbone.
        </p>

        {/* Live Manufacturing Quality Pill */}
        <div className="mt-6 inline-flex items-center gap-3 bg-black/70 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xs">
          <span className="w-2.5 h-2.5 bg-[#0080CC] rounded-full animate-pulse" />
          <span className="font-mono-tech text-xs sm:text-sm text-zinc-200 tracking-wider font-semibold">
            AUTOMATED GERMAN QUENCHING &amp; SELF-TEMPERING (QST)
          </span>
        </div>
      </div>
    </section>
  );
};

