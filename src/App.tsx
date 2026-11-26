import { useState } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { Countdown } from './components/Countdown';
import { Venue } from './components/Venue';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { PetalShower } from './components/PetalShower';
import { traditionalAmbience } from './utils/audioPlayer';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Optional gentle start of traditional ambience
    try {
      traditionalAmbience.play();
      setIsPlayingMusic(true);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const toggleMusic = () => {
    if (isPlayingMusic) {
      traditionalAmbience.pause();
      setIsPlayingMusic(false);
    } else {
      traditionalAmbience.play();
      setIsPlayingMusic(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-ivory text-cocoa font-sans-tamil overflow-x-hidden selection:bg-gold/20 selection:text-antique">
      {/* SECTION A: Cinematic Opening Screen Envelope */}
      <OpeningScreen isOpen={isOpen} onOpen={handleOpenInvitation} />

      {/* Background Floating Petals */}
      <PetalShower />

      {/* Main Website Experience - Pre-rendered for instant reveal & 60fps responsiveness */}
      <main
        className={`relative z-20 transition-opacity duration-700 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Floating Navigation */}
        <Navbar onToggleMusic={toggleMusic} isPlayingMusic={isPlayingMusic} />

        {/* SECTION B: Premium Hero */}
        <Hero />

        {/* SECTION C: Invitation Message Card */}
        <Invitation />

        {/* SECTION D: Live Event Countdown */}
        <Countdown />

        {/* SECTION E: The Venue (Google Maps, Directions & Dynamic QR Code) */}
        <Venue />

        {/* SECTION F: Photo Gallery (Lightboxed Masonry Grid) */}
        <Gallery />

        {/* SECTION L: Final Closing */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
