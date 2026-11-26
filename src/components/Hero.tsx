import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONTENT } from '../data/invitationContent';
import { HeroPortrait } from './HeroPortrait';
import { FloralCorner } from './FloralCorner';
import { OrnamentalDivider } from './OrnamentalDivider';
import { Calendar, MapPin, ChevronDown, Sparkles, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToInvitation = () => {
    const el = document.getElementById('invitation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVenue = () => {
    const el = document.getElementById('venue');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-ivory bg-paper-pattern"
    >
      {/* Traditional Marigold & Mango Leaves Garland Toranam at top */}
      <div className="absolute top-0 inset-x-0 h-8 sm:h-10 pointer-events-none z-10 flex justify-around items-start overflow-hidden opacity-85">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Mango leaf */}
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <path
                d="M 12 0 C 16 10, 22 18, 12 28 C 2 18, 8 10, 12 0 Z"
                fill="#92977C"
                fillOpacity="0.85"
              />
              <line x1="12" y1="2" x2="12" y2="24" stroke="#65452F" strokeWidth="0.6" strokeOpacity="0.4" />
            </svg>
            {/* Tiny marigold blossom */}
            <circle cx="12" cy="0" r="3" fill="#D3BA8D" />
          </div>
        ))}
      </div>

      {/* Background Soft Radiant Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[620px] rounded-full bg-champagne/80 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-rose/15 blur-3xl -z-10 pointer-events-none" />

      {/* Main Luxury Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl mx-auto rounded-3xl bg-warm-white/95 p-4 sm:p-8 lg:p-12 shadow-royal border border-gold/45 ornate-border backdrop-blur-md"
      >
        {/* Four Floral Ornate Corners */}
        <FloralCorner position="top-left" className="absolute top-1 left-1 sm:top-2 sm:left-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />
        <FloralCorner position="top-right" className="absolute top-1 right-1 sm:top-2 sm:right-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />
        <FloralCorner position="bottom-left" className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />
        <FloralCorner position="bottom-right" className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />

        {/* Top Header: Ceremony Title & Invocation */}
        <div className="text-center mb-6">
          <h2 className="font-serif-tamil text-2xl sm:text-3xl text-antique font-bold tracking-tight mb-1.5">
            {INVITATION_CONTENT.hero.ceremonyName}
          </h2>
          <p className="font-serif-tamil text-xs sm:text-sm text-gold-dark font-semibold tracking-widest uppercase">
            ॥ அருள்மிகு ராஜா சுவாமி நல்லமங்கை அம்மன் துணை ॥
          </p>
        </div>

        {/* Grid: 2 Columns on Desktop, Single Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Invitation Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Family Blessings Lead */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne/80 border border-gold/30 text-antique text-xs font-serif-en tracking-[0.2em] uppercase mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {INVITATION_CONTENT.hero.blessingLead}
              </span>
            </motion.div>

            {/* Celebrating Tamil Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-2"
            >
              <h1 className="font-serif-tamil text-2xl sm:text-3xl md:text-[34px] font-bold text-antique tracking-normal leading-tight drop-shadow-sm">
                {INVITATION_CONTENT.hero.name}
              </h1>
            </motion.div>

            {/* English Brand Identity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-3"
            >
              <h2
                className="font-serif-en text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase text-gold-accent"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                KS PRANAVIKA
              </h2>
            </motion.div>

            {/* Ceremony Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="font-serif-en text-sm sm:text-base md:text-lg text-cocoa/85 italic tracking-wide max-w-lg mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {INVITATION_CONTENT.hero.englishTagline}
            </motion.p>

            <OrnamentalDivider variant="lotus" className="my-3 lg:ml-0" />

            {/* Date & Venue Info Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-cocoa font-serif-tamil text-sm sm:text-base mb-6 w-full"
            >
              <div className="flex items-center justify-center gap-2 bg-ivory px-4 py-2 rounded-2xl border border-gold/30 shadow-sm w-full sm:w-auto">
                <Calendar className="w-4 h-4 text-gold-accent flex-shrink-0" />
                <span className="font-bold tracking-widest font-serif-en text-antique text-base">
                  {INVITATION_CONTENT.hero.dateFormatted}
                </span>
                <span className="text-xs text-cocoa/75 font-medium">({INVITATION_CONTENT.hero.day})</span>
              </div>

              <div className="flex items-center justify-center gap-2 bg-ivory px-4 py-2 rounded-2xl border border-gold/30 shadow-sm w-full sm:w-auto">
                <MapPin className="w-4 h-4 text-gold-accent flex-shrink-0" />
                <span className="font-medium text-antique text-xs sm:text-sm">
                  {INVITATION_CONTENT.hero.venueSummary}
                </span>
              </div>
            </motion.div>

            {/* Quick Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full"
            >
              <button
                onClick={scrollToInvitation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-full bg-antique text-warm-white font-serif-tamil text-sm font-medium shadow-md hover:bg-antique-light hover:shadow-lg active:scale-[0.98] transition-all touch-manipulation cursor-pointer"
              >
                <Heart className="w-4 h-4 text-rose-light" />
                <span>அழைப்பிதழை வாசிக்க</span>
              </button>

              <button
                onClick={scrollToVenue}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-full bg-champagne-light border border-gold/40 text-antique font-serif-tamil text-sm font-medium hover:bg-champagne active:scale-[0.98] transition-all touch-manipulation cursor-pointer"
              >
                <span>விழா இடம் (Venue)</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Grand Arched Royal Portrait with Diya Lamps & Bells */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 flex flex-col items-center cursor-pointer group"
        onClick={scrollToInvitation}
        aria-label="Scroll down to invitation"
      >
        <span className="font-serif-tamil text-xs tracking-wider text-antique/70 group-hover:text-antique transition-colors">
          கீழே தொடர்க
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-1 p-1 rounded-full border border-gold/40 text-gold-accent group-hover:border-gold"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
