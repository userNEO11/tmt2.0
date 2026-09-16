import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          
          if (scrollHeight > 0) {
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="viewport-scroll-progress-container"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-zinc-200/80 backdrop-blur-xs pointer-events-none"
      aria-hidden="true"
    >
      <div
        id="viewport-scroll-progress-bar"
        className="h-full bg-[#FFD700] transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(255,215,0,0.8)]"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};
