import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONTENT } from '../data/invitationContent';
import { EVENT_DETAILS } from '../data/eventDetails';
import { OrnamentalDivider } from './OrnamentalDivider';
import { Clock, CalendarCheck } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // 14 December 2026, 12:00 PM IST (+05:30)
    const targetDate = new Date(EVENT_DETAILS.targetDateTime).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isPassed: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, labelTa: INVITATION_CONTENT.countdown.labels.days, labelEn: INVITATION_CONTENT.countdown.labels.daysEn },
    { value: timeLeft.hours, labelTa: INVITATION_CONTENT.countdown.labels.hours, labelEn: INVITATION_CONTENT.countdown.labels.hoursEn },
    { value: timeLeft.minutes, labelTa: INVITATION_CONTENT.countdown.labels.minutes, labelEn: INVITATION_CONTENT.countdown.labels.minutesEn },
    { value: timeLeft.seconds, labelTa: INVITATION_CONTENT.countdown.labels.seconds, labelEn: INVITATION_CONTENT.countdown.labels.secondsEn },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-champagne/30 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-ivory border border-gold/30 text-antique text-xs font-serif-en tracking-[0.2em] uppercase mb-2">
            <Clock className="w-3.5 h-3.5 text-gold-accent" />
            <span>Auspicious Countdown</span>
          </div>
          <h2 className="font-serif-tamil text-2xl sm:text-3xl text-antique font-bold">
            {INVITATION_CONTENT.countdown.heading}
          </h2>
          <p className="font-serif-en text-xs sm:text-sm text-cocoa/70 tracking-widest uppercase mt-1">
            {INVITATION_CONTENT.countdown.subHeading}
          </p>
          <OrnamentalDivider variant="simple" className="my-3" />
        </motion.div>

        {/* Live Countdown Display */}
        {timeLeft.isPassed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 rounded-2xl bg-warm-white border border-gold/40 shadow-card-lux max-w-xl mx-auto"
          >
            <CalendarCheck className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-3" />
            <p className="font-serif-tamil text-base sm:text-lg text-antique font-medium leading-relaxed">
              {INVITATION_CONTENT.countdown.passedMessage}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6 max-w-2xl mx-auto">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-3.5 sm:p-6 rounded-2xl bg-warm-white border border-gold/35 shadow-card-lux flex flex-col items-center justify-center group hover:border-gold transition-colors"
              >
                {/* Number */}
                <span
                  className="font-serif-en text-2xl sm:text-4xl md:text-5xl font-bold text-antique tracking-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {String(unit.value).padStart(2, '0')}
                </span>

                {/* Tamil Label */}
                <span className="font-serif-tamil text-xs sm:text-sm font-semibold text-cocoa mt-1">
                  {unit.labelTa}
                </span>

                {/* English Sub-label */}
                <span className="text-[9px] sm:text-[10px] font-serif-en tracking-wider uppercase text-gold-accent mt-0.5">
                  {unit.labelEn}
                </span>

                {/* Subtle corner dot */}
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
              </motion.div>
            ))}
          </div>
        )}

        <p className="mt-8 text-xs sm:text-sm font-serif-tamil text-cocoa/75 tracking-wide">
          14 டிசம்பர் 2026 • நண்பகல் 12:00 மணி • கொங்கு மஹால், சென்னிமலை
        </p>
      </div>
    </section>
  );
};
