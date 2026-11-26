import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONTENT } from '../data/invitationContent';
import { FloralCorner } from './FloralCorner';
import { OrnamentalDivider } from './OrnamentalDivider';
import { MapPin, Clock } from 'lucide-react';

export const Invitation: React.FC = () => {
  const content = INVITATION_CONTENT.invitationLetter;

  return (
    <section id="invitation" className="py-20 px-4 sm:px-6 bg-ivory bg-paper-pattern relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="font-serif-tamil text-2xl sm:text-3xl md:text-4xl text-antique font-bold">
              {content.heading}
            </h2>
          </motion.div>
          <OrnamentalDivider variant="lotus" className="my-3" />
        </div>

        {/* Handcrafted Invitation Card Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-warm-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-royal border border-gold/45 ornate-border"
        >
          {/* Card Corner Ornaments */}
          <FloralCorner position="top-left" className="absolute top-1 left-1 sm:top-2 sm:left-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />
          <FloralCorner position="top-right" className="absolute top-1 right-1 sm:top-2 sm:right-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />
          <FloralCorner position="bottom-left" className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />
          <FloralCorner position="bottom-right" className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 max-w-[55px] max-h-[55px] sm:max-w-none sm:max-h-none" size={80} />

          {/* Inner Ornate Container */}
          <div className="relative border border-gold/30 rounded-2xl p-4 sm:p-7 md:p-10 bg-ivory/40">
            {/* Header Invocations */}
            <div className="text-center mb-6">
              <p className="font-serif-tamil text-sm text-antique font-semibold tracking-wider">
                ॥ அருள்மிகு ராஜா சுவாமி நல்லமங்கை அம்மன் துணை ॥
              </p>
            </div>

            {/* Salutation */}
            <div className="mb-4">
              <p className="font-serif-tamil font-bold text-base sm:text-lg text-antique">
                {content.salutation}
              </p>
            </div>

            {/* Main Invitation Text */}
            <div className="space-y-5 text-cocoa font-serif-tamil text-base sm:text-lg leading-relaxed text-left">
              <p className="first-letter:text-2xl first-letter:font-bold first-letter:text-antique">
                {content.bodyParagraph}
              </p>

              {/* Venue & Time Callout Box */}
              <div className="my-6 p-4 sm:p-5 rounded-xl bg-champagne/40 border border-gold/35 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-antique text-sm sm:text-base">
                      {content.venueLabel}
                    </span>
                    <span className="font-bold text-cocoa text-base sm:text-lg">
                      {content.venuePlace}
                    </span>{' '}
                    <span className="text-cocoa/90">{content.venueCity}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gold/20">
                  <Clock className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-cocoa font-medium">
                    {content.timingStatement}
                  </p>
                </div>
              </div>

              {/* Sign-off / Hosts */}
              <div className="pt-6 text-right space-y-1">
                <p className="font-serif-tamil font-semibold text-antique text-base">
                  {content.closingSalutation}
                </p>
                {content.hosts.map((host, idx) => (
                  <p
                    key={idx}
                    className="font-serif-tamil font-bold text-antique text-base sm:text-lg"
                  >
                    {host}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
