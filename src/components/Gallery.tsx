import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INVITATION_CONTENT } from '../data/invitationContent';
import { OrnamentalDivider } from './OrnamentalDivider';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import gallery1Img from '../assets/images/gallery-1-portrait.jpg';
import gallery2Img from '../assets/images/gallery-2-mehendi.jpg';
import gallery3Img from '../assets/images/gallery-3-flower-shower.jpg';
import gallery5Img from '../assets/images/gallery-5-lotus-uruli.jpg';
import gallery6Img from '../assets/images/gallery-6-neerattu-ritual.jpg';

interface GalleryItem {
  id: number;
  orderNumber: number;
  titleTa: string;
  titleEn: string;
  categoryTa: string;
  aspect: string;
  imageSrc: string;
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryData = INVITATION_CONTENT.gallery;

  // The 5 sacred ceremony images
  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      orderNumber: 1,
      titleTa: 'பாரம்பரிய பட்டுப் பாவாடை எழில்',
      titleEn: 'Traditional Silk Pavadai & Oddiyanam - KS Pranavika',
      categoryTa: 'மங்கல ஆடை',
      aspect: 'aspect-[3/4]',
      imageSrc: gallery1Img,
    },
    {
      id: 1,
      orderNumber: 2,
      titleTa: 'மங்கல மருதாணி அணிந்த திருக்கரங்கள்',
      titleEn: 'Intricate Traditional Henna / Mehendi Art',
      categoryTa: 'மருதாணி',
      aspect: 'aspect-[3/4]',
      imageSrc: gallery2Img,
    },
    {
      id: 2,
      orderNumber: 3,
      titleTa: 'மகிழ்ச்சியும் மலர் மழையும்',
      titleEn: 'Joyful Flower Petals Celebration by Loved Ones',
      categoryTa: 'மலர் மழை',
      aspect: 'aspect-[4/3] sm:col-span-2 lg:col-span-1',
      imageSrc: gallery3Img,
    },
    {
      id: 3,
      orderNumber: 4,
      titleTa: 'மங்கல மலர் உரூளி மற்றும் தாமரை',
      titleEn: 'Sacred Brass Uruli with Blooming Lotuses',
      categoryTa: 'மங்கல மலர்கள்',
      aspect: 'aspect-[3/4]',
      imageSrc: gallery5Img,
    },
    {
      id: 4,
      orderNumber: 5,
      titleTa: 'மங்கல மஞ்சள் நீராட்டுத் திருநிகழ்வு',
      titleEn: 'Sacred Manjal Neerattu Holy Water Blessing',
      categoryTa: 'மங்கல நீராட்டு',
      aspect: 'aspect-[4/3] sm:col-span-2 lg:col-span-2',
      imageSrc: gallery6Img,
    },
  ];

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 bg-ivory bg-paper-pattern relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-serif-en tracking-[0.25em] uppercase text-gold-accent font-semibold">
              Cherished Moments
            </span>
            <h2 className="font-serif-tamil text-2xl sm:text-3xl md:text-4xl text-antique font-bold mt-1">
              {galleryData.heading}
            </h2>
            <p className="font-serif-en text-xs sm:text-sm text-cocoa/70 tracking-widest uppercase mt-1">
              {galleryData.subHeading}
            </p>
          </motion.div>
          <OrnamentalDivider variant="lotus" className="my-3" />
        </div>

        {/* Gallery Grid in exact user order */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setSelectedImage(item.id)}
              className="group relative rounded-3xl overflow-hidden bg-warm-white border border-gold/35 shadow-card-lux cursor-pointer hover:shadow-royal hover:border-gold transition-all duration-300"
            >
              {/* Order Number Badge */}
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-gold/40 text-gold-light text-[10px] font-serif-en font-bold tracking-wider flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                <span>0{item.orderNumber}</span>
              </div>

              {/* Visual Container */}
              <div className={`w-full ${item.aspect} overflow-hidden bg-black/5`}>
                <img
                  src={item.imageSrc}
                  alt={item.titleTa}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-antique/90 via-antique/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-warm-white">
                <span className="text-[10px] uppercase tracking-wider text-gold-light font-serif-en">
                  {item.categoryTa}
                </span>
                <h4 className="font-serif-tamil text-base sm:text-lg font-bold leading-tight">
                  {item.titleTa}
                </h4>
                <p className="font-serif-en text-xs text-warm-white/80 mt-1 italic">
                  {item.titleEn}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-gold-light">
                  <Eye className="w-3.5 h-3.5" />
                  <span>பெரிதாகக் காண</span>
                </div>
              </div>

              {/* Mobile bottom caption bar */}
              <div className="p-4 sm:hidden bg-warm-white border-t border-gold/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-tamil text-sm font-bold text-antique">
                    {item.titleTa}
                  </h4>
                  <p className="font-serif-en text-[11px] text-cocoa/60">
                    {item.titleEn}
                  </p>
                </div>
                <Eye className="w-4 h-4 text-gold-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-cocoa/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-2xl w-full bg-warm-white rounded-3xl overflow-hidden border border-gold/40 shadow-2xl p-3 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-champagne text-antique hover:bg-gold hover:text-warm-white transition-colors touch-manipulation shadow-md cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Display item */}
                <div className="max-h-[55vh] sm:max-h-[65vh] rounded-2xl overflow-hidden flex items-center justify-center bg-black/90">
                  <img
                    src={galleryItems[selectedImage].imageSrc}
                    alt={galleryItems[selectedImage].titleTa}
                    className="max-h-[55vh] sm:max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
                  />
                </div>

                {/* Caption Details & Navigation */}
                <div className="mt-3 pt-3 border-t border-gold/25 flex items-center justify-between gap-2">
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-serif-en text-gold-dark font-bold whitespace-nowrap">
                        {selectedImage + 1} / {galleryItems.length}
                      </span>
                      <span className="text-xs font-serif-tamil text-antique font-semibold truncate">
                        • {galleryItems[selectedImage].categoryTa}
                      </span>
                    </div>
                    <h3 className="font-serif-tamil text-sm sm:text-lg font-bold text-antique truncate">
                      {galleryItems[selectedImage].titleTa}
                    </h3>
                    <p className="font-serif-en text-[11px] sm:text-xs text-cocoa/75 tracking-wide truncate">
                      {galleryItems[selectedImage].titleEn}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-gold/30 hover:bg-champagne active:scale-95 transition-all touch-manipulation cursor-pointer"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-5 h-5 text-antique" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-gold/30 hover:bg-champagne active:scale-95 transition-all touch-manipulation cursor-pointer"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-5 h-5 text-antique" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
