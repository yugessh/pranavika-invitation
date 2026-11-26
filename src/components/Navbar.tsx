import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onToggleMusic: () => void;
  isPlayingMusic: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleMusic, isPlayingMusic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'hero', label: 'முகப்பு', labelEn: 'Home' },
    { id: 'invitation', label: 'அழைப்பு', labelEn: 'Invitation' },
    { id: 'venue', label: 'இடம்', labelEn: 'Venue' },
    { id: 'gallery', label: 'நினைவுகள்', labelEn: 'Gallery' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);

          // Section tracker
          const sections = navLinks.map((link) => document.getElementById(link.id));
          const scrollPos = window.scrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const sec = sections[i];
            if (sec && sec.offsetTop <= scrollPos) {
              setActiveSection(navLinks[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'py-2.5 bg-ivory/90 backdrop-blur-md shadow-card-lux border-b border-gold/20'
          : 'py-4 bg-gradient-to-b from-ivory/90 via-ivory/50 to-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer"
            aria-label="Back to Top"
          >
            <div className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center bg-champagne-light text-antique font-serif-en text-sm font-bold group-hover:scale-105 transition-transform">
              KS
            </div>
            <div>
              <span className="block font-serif-en text-sm tracking-[0.2em] font-semibold text-antique uppercase">
                KS PRANAVIKA
              </span>
              <span className="block text-[9px] font-serif-tamil text-gold-dark font-medium -mt-0.5">
                பூப்புனித நீராட்டு விழா
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-serif-tamil tracking-wide transition-all duration-300 relative ${isActive
                    ? 'text-antique font-semibold bg-gold/15'
                    : 'text-cocoa/80 hover:text-antique hover:bg-gold/5'
                    }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Music Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Music ambience toggle */}
            <button
              onClick={onToggleMusic}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 min-h-[42px] rounded-full text-xs font-serif-tamil border transition-all duration-300 touch-manipulation cursor-pointer ${isPlayingMusic
                ? 'border-gold bg-gold/15 text-antique shadow-sm'
                : 'border-gold/30 bg-warm-white/80 text-cocoa/70 hover:border-gold'
                }`}
              title={isPlayingMusic ? 'இசையை இடைநிறுத்துக' : 'மங்கல இசை ஒலிக்க'}
              aria-label="Toggle Traditional Ambience"
            >
              {isPlayingMusic ? (
                <>
                  <Volume2 className="w-4 h-4 text-gold animate-pulse" />
                  <span className="hidden sm:inline font-medium text-[11px]">இசை ஒலிக்கிறது</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-cocoa/60" />
                  <span className="hidden sm:inline text-[11px]">மங்கல இசை</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-antique hover:bg-gold/10 transition-colors touch-manipulation cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down / Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-30 bg-ivory/98 backdrop-blur-xl border-b border-gold/30 shadow-royal lg:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm font-serif-tamil transition-colors ${activeSection === link.id
                    ? 'bg-gold/20 text-antique font-semibold'
                    : 'text-cocoa hover:bg-gold/10'
                    }`}
                >
                  <span className="text-base">{link.label}</span>
                  <span className="text-xs font-serif-en text-gold uppercase tracking-wider">
                    {link.labelEn}
                  </span>
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-gold/20 flex items-center justify-between">
                <button
                  onClick={onToggleMusic}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-champagne text-antique font-serif-tamil text-sm"
                >
                  {isPlayingMusic ? <Volume2 className="w-4 h-4 text-gold" /> : <VolumeX className="w-4 h-4" />}
                  <span>{isPlayingMusic ? 'மங்கல இசை ஒலிக்கிறது (நிறுத்து)' : 'மங்கல இசை ஒலிக்க'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
