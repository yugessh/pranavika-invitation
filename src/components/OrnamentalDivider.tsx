import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'lotus' | 'simple' | 'kalasam';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'lotus',
}) => {
  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 opacity-75 ${className}`}>
        <span className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-gold to-gold/70" />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold bg-champagne" />
        <span className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent via-gold to-gold/70" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-2 my-6 select-none ${className}`}>
      {/* Left filigree wing */}
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-gold/60 to-gold" />

      {/* Center Traditional Motif */}
      <svg
        className="w-8 h-8 text-gold drop-shadow-sm flex-shrink-0"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center lotus blossom */}
        <path
          d="M20 7 C21.5 13, 25 17, 28 20 C24 21, 21.5 24, 20 28 C18.5 24, 16 21, 12 20 C15 17, 18.5 13, 20 7 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <circle cx="20" cy="20" r="2.5" fill="#FFF9F1" />
        <circle cx="20" cy="20" r="1.2" fill="#65452F" />
        {/* Tiny Side Petals */}
        <path
          d="M12 20 C9 18, 5 19, 4 21 C7 21.5, 9.5 21, 12 20 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
        <path
          d="M28 20 C31 18, 35 19, 36 21 C33 21.5, 30.5 21, 28 20 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
        {/* Bottom droplets */}
        <circle cx="20" cy="32" r="1.5" fill="currentColor" fillOpacity="0.8" />
        <circle cx="20" cy="35" r="1" fill="currentColor" fillOpacity="0.6" />
      </svg>

      {/* Right filigree wing */}
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-gold/60 to-gold" />
    </div>
  );
};
