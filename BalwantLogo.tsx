import React from 'react';
import logoImg from '../assets/images/logo1.jpeg';

export interface BalwantLogoProps {
  variant?: 'badge' | 'compact' | 'horizontal' | 'mark-only';
  className?: string;
  alt?: string;
}

export const BalwantLogo: React.FC<BalwantLogoProps> = ({
  className = '',
  alt = 'Balwant Super TMT Official Logo',
}) => {
  return (
    <div
      id="balwant-official-logo"
      className={`inline-flex items-center justify-center ${className}`}
    >
      <img
        src={logoImg}
        alt={alt}
        className="h-full w-auto max-h-full max-w-full object-contain block"
      />
    </div>
  );
};

export default BalwantLogo;
