import React from 'react';

interface FloralCornerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}

export const FloralCorner: React.FC<FloralCornerProps> = ({
  position = 'top-left',
  className = '',
  size = 110,
}) => {
  const rotationClass = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div
      className={`pointer-events-none select-none transition-opacity duration-700 ${rotationClass} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Outer Corner L-Frame in Gold */}
        <path
          d="M 6 50 L 6 8 C 6 6.89, 6.89 6, 8 6 L 50 6"
          stroke="#B99A63"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        <path
          d="M 12 38 L 12 13 C 12 12.44, 12.44 12, 13 12 L 38 12"
          stroke="#B99A63"
          strokeWidth="0.6"
          strokeOpacity="0.3"
        />
        <circle cx="6" cy="6" r="2" fill="#B99A63" fillOpacity="0.8" />

        {/* Delicate Botanical Vine in Sage Green */}
        <path
          d="M 12 12 Q 28 32 46 22 T 78 28"
          stroke="#92977C"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.65"
        />
        <path
          d="M 12 12 Q 32 28 22 46 T 28 78"
          stroke="#92977C"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.65"
        />

        {/* Sage Leaves */}
        <ellipse
          cx="34"
          cy="26"
          rx="5"
          ry="2.5"
          transform="rotate(-25 34 26)"
          fill="#92977C"
          fillOpacity="0.4"
        />
        <ellipse
          cx="26"
          cy="34"
          rx="5"
          ry="2.5"
          transform="rotate(65 26 34)"
          fill="#92977C"
          fillOpacity="0.4"
        />
        <ellipse
          cx="58"
          cy="22"
          rx="6"
          ry="3"
          transform="rotate(10 58 22)"
          fill="#92977C"
          fillOpacity="0.35"
        />
        <ellipse
          cx="22"
          cy="58"
          rx="3"
          ry="6"
          transform="rotate(10 22 58)"
          fill="#92977C"
          fillOpacity="0.35"
        />

        {/* Watercolor Rose Bud in Dusty Rose */}
        <g transform="translate(18, 18)">
          {/* Outer soft petals */}
          <circle cx="0" cy="0" r="11" fill="#D7A49B" fillOpacity="0.35" />
          <circle cx="-1" cy="1" r="8" fill="#D7A49B" fillOpacity="0.5" />
          {/* Inner petal swirls */}
          <path
            d="M -4 -1 C -4 -4, 2 -5, 4 -2 C 6 2, -2 5, -3 2"
            stroke="#65452F"
            strokeWidth="0.8"
            strokeOpacity="0.45"
            fill="none"
          />
          <circle cx="0" cy="0" r="3.5" fill="#BF857A" fillOpacity="0.75" />
          <circle cx="0.5" cy="-0.5" r="1.5" fill="#FFF9F1" />
        </g>

        {/* Delicate Jasmine Buds in Ivory/Gold */}
        <circle cx="48" cy="14" r="3" fill="#FFF9F1" stroke="#B99A63" strokeWidth="0.7" />
        <circle cx="14" cy="48" r="3" fill="#FFF9F1" stroke="#B99A63" strokeWidth="0.7" />
        <circle cx="70" cy="24" r="2.2" fill="#FFF9F1" stroke="#B99A63" strokeWidth="0.5" />
        <circle cx="24" cy="70" r="2.2" fill="#FFF9F1" stroke="#B99A63" strokeWidth="0.5" />

        {/* Gold Bead accents */}
        <circle cx="16" cy="16" r="1.2" fill="#B99A63" />
        <circle cx="28" cy="14" r="1" fill="#B99A63" />
        <circle cx="14" cy="28" r="1" fill="#B99A63" />
      </svg>
    </div>
  );
};
