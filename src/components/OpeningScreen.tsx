import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { INVITATION_CONTENT } from '../data/invitationContent';
import { FloralCorner } from './FloralCorner';
import { OrnamentalDivider } from './OrnamentalDivider';
import { Sparkles, MailOpen } from 'lucide-react';
import pranavikaImg from '../assets/images/pranavika-hero.jpg';

interface OpeningScreenProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);

    // Elegant flower petal burst
    try {
      confetti({
        particleCount: 45,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#B99A63', '#D7A49B', '#F3E8D7', '#FFF9F1'],
        shapes: ['circle'],
        scalar: 1.2,
      });
    } catch {
      // fallback safe
    }

    setTimeout(() => {
      onOpen();
    }, 250);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="opening-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 py-4 sm:py-6 bg-ivory bg-paper-pattern overflow-y-auto overscroll-contain select-none"
        >
          {/* Subtle Ambient Light Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-champagne/70 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-rose/20 blur-3xl -z-10 pointer-events-none" />

          {/* Envelope Card Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`relative w-full max-w-xl mx-auto my-auto rounded-3xl bg-warm-white/95 p-4 sm:p-8 md:p-10 shadow-royal ornate-border backdrop-blur-md transition-all duration-700 ${
              isOpening ? 'scale-95 opacity-50' : ''
            }`}
          >
            {/* Four Floral Ornate Corners */}
            <FloralCorner position="top-left" className="absolute top-1 left-1 sm:top-2 sm:left-2 max-w-[50px] max-h-[50px] sm:max-w-none sm:max-h-none" size={70} />
            <FloralCorner position="top-right" className="absolute top-1 right-1 sm:top-2 sm:right-2 max-w-[50px] max-h-[50px] sm:max-w-none sm:max-h-none" size={70} />
            <FloralCorner position="bottom-left" className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 max-w-[50px] max-h-[50px] sm:max-w-none sm:max-h-none" size={70} />
            <FloralCorner position="bottom-right" className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 max-w-[50px] max-h-[50px] sm:max-w-none sm:max-h-none" size={70} />

            {/* Inner Gold Frame */}
            <div className="relative border border-gold/30 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
              {/* Sacred Invocation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-3"
              >
                <p className="text-antique font-serif-tamil text-sm sm:text-base font-semibold tracking-wider">
                  {INVITATION_CONTENT.opening.invocations}
                </p>
              </motion.div>

              {/* Ceremony Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-1.5 my-2"
              >
                <h1 className="font-serif-tamil text-2xl sm:text-3xl text-antique font-bold tracking-tight">
                  {INVITATION_CONTENT.opening.title}
                </h1>
                <p className="font-serif-tamil text-sm sm:text-base text-gold-dark font-medium">
                  {INVITATION_CONTENT.opening.subtitle}
                </p>
              </motion.div>

              {/* Single Sacred Ceremony Photo Centerpiece (Under மங்கல அழைப்பு மடல்) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="my-3 flex items-center justify-center"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-b from-gold via-champagne to-antique shadow-royal">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-warm-white bg-black shadow-inner">
                    <img
                      src={pranavikaImg}
                      alt="செல்வி. K.S. பிரணவிகா"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 22%' }}
                    />
                  </div>
                </div>
              </motion.div>

              <OrnamentalDivider variant="lotus" className="my-3" />

              {/* Celebrating Name & Date */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="space-y-1"
              >
                <h2
                  className="font-serif-en text-2xl sm:text-3xl tracking-[0.2em] uppercase text-cocoa font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {INVITATION_CONTENT.opening.name}
                </h2>
                <p className="text-xs sm:text-sm tracking-[0.2em] font-serif-en text-antique/80 uppercase font-medium">
                  {INVITATION_CONTENT.opening.date}
                </p>
              </motion.div>

              {/* Royal Seal & Open Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-7 w-full flex flex-col items-center"
              >
                <button
                  onClick={handleOpenInvitation}
                  disabled={isOpening}
                  className="group relative inline-flex items-center justify-center gap-3 w-full max-w-xs sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 min-h-[48px] rounded-full bg-gradient-to-r from-antique via-antique-light to-antique text-warm-white font-serif-tamil font-medium text-base shadow-lg shadow-antique/20 hover:shadow-xl hover:shadow-gold/30 active:scale-[0.98] transition-all duration-300 border border-gold/40 touch-manipulation cursor-pointer"
                  aria-label="Open Invitation"
                >
                  <MailOpen className="w-5 h-5 text-gold-light group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-widest uppercase font-semibold text-sm">
                    {isOpening ? 'TAP TO OPEN...' : INVITATION_CONTENT.opening.buttonText}
                  </span>
                  <Sparkles className="w-4 h-4 text-gold-light opacity-80 group-hover:scale-125 transition-transform duration-300" />
                </button>

                <p className="text-[11px] font-serif-en tracking-wider text-antique/60 mt-2.5 italic">
                  {INVITATION_CONTENT.opening.envelopeSub}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
