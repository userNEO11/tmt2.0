import React from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`gpu-layer will-change-transform ${className}`} {...props}>
      {children}
    </div>
  );
};

