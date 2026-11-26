import React, { useMemo } from 'react';

interface Petal {
  id: number;
  left: number; // percentage
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  type: 'rose' | 'jasmine' | 'gold-speck';
  rotation: number;
}

export const PetalShower: React.FC = () => {
  // Generate consistent randomized petals (optimized to 8 petals for 60fps mobile performance)
  const petals: Petal[] = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.round((i * 12 + (i % 3) * 5) % 94) + 3,
      size: 10 + (i % 4) * 3,
      duration: 14 + (i % 4) * 2,
      delay: (i * 1.6) % 10,
      type: i % 3 === 0 ? 'rose' : i % 3 === 1 ? 'jasmine' : 'gold-speck',
      rotation: (i * 45) % 360,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-10 select-none"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-10 petal-drift opacity-0"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          {petal.type === 'rose' && (
            <svg
              width={petal.size}
              height={petal.size * 1.2}
              viewBox="0 0 24 30"
              fill="none"
              style={{ transform: `rotate(${petal.rotation}deg)` }}
            >
              <path
                d="M12 2 C18 6, 22 15, 18 24 C14 28, 8 28, 5 23 C2 16, 6 6, 12 2 Z"
                fill="#D7A49B"
                fillOpacity="0.55"
              />
              <path
                d="M11 6 C15 10, 17 18, 14 23"
                stroke="#65452F"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </svg>
          )}

          {petal.type === 'jasmine' && (
            <svg
              width={petal.size * 0.8}
              height={petal.size * 0.8}
              viewBox="0 0 20 20"
              fill="none"
              style={{ transform: `rotate(${petal.rotation}deg)` }}
            >
              <ellipse cx="10" cy="5" rx="3" ry="5" fill="#FFFEFA" fillOpacity="0.8" />
              <ellipse cx="10" cy="15" rx="3" ry="5" fill="#FFFEFA" fillOpacity="0.8" />
              <ellipse cx="5" cy="10" rx="5" ry="3" fill="#FFFEFA" fillOpacity="0.8" />
              <ellipse cx="15" cy="10" rx="5" ry="3" fill="#FFFEFA" fillOpacity="0.8" />
              <circle cx="10" cy="10" r="1.5" fill="#B99A63" fillOpacity="0.7" />
            </svg>
          )}

          {petal.type === 'gold-speck' && (
            <div
              className="rounded-full bg-gold/40 shadow-sm"
              style={{
                width: `${petal.size * 0.35}px`,
                height: `${petal.size * 0.35}px`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
