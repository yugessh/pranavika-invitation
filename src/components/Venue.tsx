import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode';
import { INVITATION_CONTENT } from '../data/invitationContent';
import { EVENT_DETAILS } from '../data/eventDetails';
import { OrnamentalDivider } from './OrnamentalDivider';
import { MapPin, Navigation, QrCode as QrIcon } from 'lucide-react';

export const Venue: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const venueData = INVITATION_CONTENT.venue;

  // Generate dynamic QR code to destination URL
  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        EVENT_DETAILS.googleMapsUrl,
        {
          width: 140,
          margin: 1,
          color: {
            dark: '#65452F', // Antique brown
            light: '#FFFEFA', // Warm white
          },
        },
        (error) => {
          if (error) console.error('QR code generation error:', error);
        }
      );
    }
  }, []);

  return (
    <section id="venue" className="py-20 px-4 sm:px-6 bg-champagne/25 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-serif-en tracking-[0.25em] uppercase text-gold-accent font-semibold">
              Sacred Destination
            </span>
            <h2 className="font-serif-tamil text-2xl sm:text-3xl md:text-4xl text-antique font-bold mt-1">
              {venueData.heading}
            </h2>
            <p className="font-serif-en text-xs sm:text-sm text-cocoa/70 tracking-widest uppercase mt-1">
              {venueData.subHeading}
            </p>
          </motion.div>
          <OrnamentalDivider variant="lotus" className="my-3" />
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Venue Details, Address & QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-5 sm:p-8 rounded-3xl bg-warm-white border border-gold/35 shadow-card-lux space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-champagne border border-gold/40 flex items-center justify-center text-antique">
                  <MapPin className="w-6 h-6 text-gold-accent" />
                </div>
                <div>
                  <h3 className="font-serif-tamil text-2xl font-bold text-antique">
                    {venueData.name}
                  </h3>
                  <p className="font-serif-en text-sm tracking-wide text-gold-accent uppercase font-medium">
                    {venueData.place}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-gold/20">
                <p className="text-xs font-serif-en uppercase tracking-wider text-cocoa/60 font-semibold">
                  முழு முகவரி / Full Address
                </p>
                <p className="font-serif-tamil text-sm sm:text-base text-cocoa leading-relaxed">
                  {venueData.fullAddress}
                </p>
                <p className="text-xs font-sans-tamil text-cocoa/70 italic pt-1">
                  {venueData.directionsGuide}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={EVENT_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-full bg-antique text-warm-white text-xs sm:text-sm font-serif-tamil font-medium shadow-md hover:bg-antique-light hover:shadow-lg active:scale-[0.98] transition-all touch-manipulation cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-gold-light" />
                  <span>கூகுள் மேப்பில் வழிகாட்டல் (Directions)</span>
                </a>
              </div>
            </div>

            {/* Dynamic QR Code Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-warm-white/90 border border-gold/30 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
              <div className="p-2 rounded-xl bg-warm-white border border-gold/40 shadow-inner flex-shrink-0">
                <canvas ref={canvasRef} className="rounded-lg max-w-[140px] h-auto" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-antique font-serif-tamil font-bold text-sm">
                  <QrIcon className="w-4 h-4 text-gold-accent" />
                  <span>மொபைல் வழித்தட QR குறியீடு</span>
                </div>
                <p className="text-xs font-sans-tamil text-cocoa/80 leading-relaxed">
                  தங்களின் செல்போன் கேமராவில் ஸ்கேன் செய்து கொங்கு மஹால் கூகுள் வரைபட வழித்தடத்தை நேரடியாகக் காணவும்.
                </p>
                <p className="text-[10px] font-serif-en uppercase tracking-wider text-gold-accent font-semibold">
                  Live Dynamic Map QR Code
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive Embed Presentation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 h-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gold/40 shadow-royal bg-champagne-light h-[380px] sm:h-[440px]">
              <iframe
                title="Kongu Mahal Chennimalai Map Location"
                src="https://maps.google.com/maps?q=Kongu%20Mahal,%20Chennimalai,%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[105%]"
              />

              {/* Floating map banner pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-warm-white/95 backdrop-blur-md border border-gold/40 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-accent flex-shrink-0" />
                  <span className="text-xs font-serif-tamil font-semibold text-antique truncate">
                    கொங்கு மஹால், சென்னிமலை
                  </span>
                </div>
                <a
                  href={EVENT_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-serif-tamil font-bold text-gold-dark hover:underline flex-shrink-0 ml-2"
                >
                  பெரிதாக்கு &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
