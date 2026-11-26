import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONTENT } from '../data/invitationContent';
import { EVENT_DETAILS } from '../data/eventDetails';
import { FloralCorner } from './FloralCorner';
import { OrnamentalDivider } from './OrnamentalDivider';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const closingData = INVITATION_CONTENT.closing;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-16 px-4 sm:px-6 bg-ivory bg-paper-pattern overflow-hidden border-t border-gold/25">
      {/* Delicate Floral Corners */}
      <FloralCorner position="top-left" className="absolute top-2 left-2" size={85} />
      <FloralCorner position="top-right" className="absolute top-2 right-2" size={85} />

      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Final Tamil Note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif-tamil text-lg sm:text-xl md:text-2xl font-bold text-antique leading-relaxed max-w-xl mx-auto"
        >
          “{closingData.finalTamilNote}”
        </motion.p>

        <OrnamentalDivider variant="lotus" className="my-6" />

        {/* English Brand Closing & Host Parents */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p
            className="font-serif-en text-sm sm:text-base tracking-[0.25em] text-antique/80 uppercase italic font-medium"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {closingData.englishNote}
          </p>
          <h3
            className="font-serif-en text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase text-cocoa"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {closingData.brand}
          </h3>

          <div className="pt-2 flex flex-col items-center text-center space-y-2.5">
            <div className="flex flex-col items-center">
              <span className="block text-[11px] font-serif-en uppercase tracking-[0.2em] text-gold-accent font-semibold">
                பெற்றோர்
              </span>
              <p className="font-serif-tamil text-base sm:text-lg font-bold text-antique mt-0.5">
                {EVENT_DETAILS.hosts.parents}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-[11px] font-serif-en uppercase tracking-[0.2em] text-gold-accent font-semibold">
                சகோதரன்
              </span>
              <p className="font-serif-tamil text-base sm:text-lg font-bold text-antique mt-0.5">
                {EVENT_DETAILS.hosts.brother}
              </p>
            </div>
          </div>

          <p className="font-serif-en text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-accent font-semibold pt-1">
            {closingData.date}
          </p>
        </motion.div>

        {/* Traditional Auspicious Motto */}
        <div className="mt-8 pt-6 border-t border-gold/20 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif-tamil text-cocoa/70">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-dark" />
            <span>{closingData.mantra}</span>
          </div>

          <div>
            <span>கொங்கு மஹால் • சென்னிமலை</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[44px] rounded-full border border-gold/30 hover:bg-champagne/60 text-antique text-xs font-serif-tamil transition-all touch-manipulation active:scale-95 cursor-pointer"
            aria-label="Scroll to Top"
          >
            <span>மேலே செல்ல</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
};
