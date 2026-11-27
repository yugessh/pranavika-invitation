import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, RotateCcw, Maximize2, X, Sparkles, Heart } from 'lucide-react';
import defaultHeroImg from '../assets/images/pranavika-new.jpeg';

interface HeroPortraitProps {
  className?: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ className = '' }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(defaultHeroImg);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Check if user uploaded an alternative photo in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pranavika_hero_photo_v3');
      if (saved) {
        setPhotoSrc(saved);
        setIsCustom(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPhotoSrc(base64);
        setIsCustom(true);
        try {
          localStorage.setItem('pranavika_hero_photo_v3', base64);
        } catch {
          // ignore
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetToDefault = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoSrc(defaultHeroImg);
    setIsCustom(false);
    try {
      localStorage.removeItem('pranavika_hero_photo_v2');
    } catch {
      // ignore
    }
  };

  return (
    <>
      <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Hanging Brass Temple Bells on Left & Right */}
        <motion.div
          animate={{ rotate: [-2.5, 2.5, -2.5] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:block absolute -left-7 top-6 pointer-events-none z-20"
        >
          <svg width="28" height="74" viewBox="0 0 28 74" fill="none">
            <line x1="14" y1="0" x2="14" y2="42" stroke="#B99A63" strokeWidth="1.2" strokeDasharray="2 3" />
            <path d="M 8 42 C 8 37, 20 37, 20 42 L 23 58 L 5 58 Z" fill="#B99A63" />
            <circle cx="14" cy="62" r="3.5" fill="#8F7138" />
            <circle cx="14" cy="70" r="1.5" fill="#B99A63" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ rotate: [2.5, -2.5, 2.5] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:block absolute -right-7 top-6 pointer-events-none z-20"
        >
          <svg width="28" height="74" viewBox="0 0 28 74" fill="none">
            <line x1="14" y1="0" x2="14" y2="42" stroke="#B99A63" strokeWidth="1.2" strokeDasharray="2 3" />
            <path d="M 8 42 C 8 37, 20 37, 20 42 L 23 58 L 5 58 Z" fill="#B99A63" />
            <circle cx="14" cy="62" r="3.5" fill="#8F7138" />
            <circle cx="14" cy="70" r="1.5" fill="#B99A63" />
          </svg>
        </motion.div>

        {/* Golden Aura Glow behind portrait */}
        <div className="absolute w-72 h-96 sm:w-88 sm:h-[440px] rounded-full bg-gradient-to-t from-gold/20 via-rose/25 to-champagne/40 blur-2xl -z-10 pointer-events-none" />

        {/* Royal Mandapam / Temple Arch Frame */}
        <div className="relative group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
          <div className="relative w-56 sm:w-76 md:w-84 max-w-[calc(100vw-48px)] h-[330px] sm:h-[410px] md:h-[450px] rounded-t-full rounded-b-[40px] p-2.5 sm:p-3 bg-gradient-to-b from-champagne-light via-champagne to-ivory border-2 border-gold/70 shadow-royal overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
            
            {/* Inner Gold Frame */}
            <div className="relative w-full h-full rounded-t-full rounded-b-[34px] overflow-hidden border border-gold/50 bg-cocoa shadow-inner">
              {/* Actual Ceremony Image of KS Pranavika */}
              <img
                src={photoSrc}
                alt="செல்வி. K.S. பிரணவிகா - பூப்புனித நீராட்டு விழா"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                style={{ objectPosition: 'center 20%' }}
              />

              {/* Top Subtle Vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75 pointer-events-none" />

              {/* View Fullscreen Overlay Indicator */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-gold-light" />
              </div>

              {/* Sacred Inscription Overlay at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col items-center text-center">
                <div className="flex items-center gap-1.5 text-gold-light text-[10px] uppercase font-serif-en tracking-[0.2em] mb-1">
                  <Sparkles className="w-3 h-3 text-gold-light" />
                  <span>Sacred Neerattu Ceremony</span>
                  <Sparkles className="w-3 h-3 text-gold-light" />
                </div>
                <h3 className="font-serif-tamil text-warm-white font-bold text-sm sm:text-base tracking-wide drop-shadow">
                  செல்வி. K.S. பிரணவிகா
                </h3>
                <p className="text-[10px] font-serif-tamil text-champagne/90 tracking-wider">
                  மங்கலத் திருவுருவம்
                </p>
              </div>
            </div>
          </div>

          {/* Diya Lamps on Base Corners */}
          <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 pointer-events-none">
            <svg width="36" height="36" viewBox="0 0 34 34" fill="none">
              <path d="M 6 22 C 6 28, 28 28, 28 22 Z" fill="#8F5E3D" stroke="#B99A63" strokeWidth="1" />
              <path d="M 17 8 Q 21 16 17 21 Q 13 16 17 8 Z" fill="#E5C799" />
              <circle cx="17" cy="16" r="2.5" fill="#BF857A" />
            </svg>
          </div>

          <div className="absolute -bottom-2 -right-2 sm:-right-4 z-20 pointer-events-none">
            <svg width="36" height="36" viewBox="0 0 34 34" fill="none">
              <path d="M 6 22 C 6 28, 28 28, 28 22 Z" fill="#8F5E3D" stroke="#B99A63" strokeWidth="1" />
              <path d="M 17 8 Q 21 16 17 21 Q 13 16 17 8 Z" fill="#E5C799" />
              <circle cx="17" cy="16" r="2.5" fill="#BF857A" />
            </svg>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 w-full">
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-full bg-warm-white border border-gold/40 shadow-sm text-antique hover:bg-champagne hover:border-gold text-xs font-serif-tamil font-medium transition-all touch-manipulation cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-gold-accent" />
            <span>பெரிதாகக் காண</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-full bg-warm-white border border-gold/40 shadow-sm text-antique hover:bg-champagne hover:border-gold text-xs font-serif-tamil font-medium transition-all touch-manipulation cursor-pointer"
            title="வேறு புகைப்படம் மாற்ற (Change photo)"
          >
            <Camera className="w-3.5 h-3.5 text-gold-accent" />
            <span>{isCustom ? 'புகைப்படம் மாற்றுக' : 'வேறு புகைப்படம்'}</span>
          </button>

          {isCustom && (
            <button
              onClick={handleResetToDefault}
              className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-warm-white border border-gold/30 text-cocoa/70 hover:text-rose-dark hover:bg-champagne transition-colors touch-manipulation cursor-pointer"
              title="அசல் விழாப் படத்திற்கு மாற்றுக"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution View */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden bg-cocoa border border-gold/50 shadow-2xl p-2 sm:p-4 text-center"
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-warm-white hover:bg-black/90 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden rounded-2xl flex items-center justify-center bg-black">
                <img
                  src={photoSrc}
                  alt="செல்வி. K.S. பிரணவிகா"
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div className="mt-3 py-2 flex items-center justify-between px-2 text-warm-white">
                <div className="text-left">
                  <h4 className="font-serif-tamil font-bold text-base text-gold-light">
                    செல்வி. K.S. பிரணவிகா
                  </h4>
                  <p className="text-xs font-serif-tamil text-champagne/80">
                    பூப்புனித நீராட்டு விழா மங்கலத் தருணம்
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-rose-light">
                  <Heart className="w-3.5 h-3.5 fill-rose-light" />
                  <span>மங்கலம்</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
