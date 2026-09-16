import React from 'react';

interface SectionHeaderRevealProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string | React.ReactNode;
  titleAccent?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  badgeColor?: string;
}

export const SectionHeaderReveal: React.FC<SectionHeaderRevealProps> = ({
  badge,
  badgeIcon,
  title,
  titleAccent,
  subtitle,
  align = 'left',
  className = '',
  badgeColor = '#FFD700',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`relative ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left'
      } ${className}`}
    >
      {/* 1. Badge / Category Tag */}
      {badge && (
        <div
          className={`flex items-center gap-2.5 mb-4 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          {!isCenter && <div className="w-8 h-1 bg-[#0047AB]" />}
          <span
            className="font-mono-tech text-xs tracking-[0.2em] uppercase font-bold px-2 py-0.5 rounded-xs bg-white/5 border border-white/10"
            style={{ color: badgeColor }}
          >
            {badgeIcon && <span className="inline-block mr-1.5 align-middle">{badgeIcon}</span>}
            {badge}
          </span>
          {isCenter && <div className="w-8 h-1 bg-[#0047AB]" />}
        </div>
      )}

      {/* 2. Main Title */}
      <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.05]">
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="text-[#FFD700] block sm:inline">{titleAccent}</span>
          </>
        )}
      </h2>

      {/* 3. Subtitle / Description */}
      {subtitle && (
        <p
          className={`text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mt-4 ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

