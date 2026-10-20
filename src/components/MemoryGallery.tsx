import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { birthdayData, type GalleryPhoto } from '../config/birthdayData';

export const MemoryGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (photo: GalleryPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % birthdayData.gallery.length;
    setCurrentIndex(nextIdx);
    setSelectedPhoto(birthdayData.gallery[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + birthdayData.gallery.length) % birthdayData.gallery.length;
    setCurrentIndex(prevIdx);
    setSelectedPhoto(birthdayData.gallery[prevIdx]);
  };

  return (
    <section id="gallery" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-300 text-xs tracking-wider uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-pink-400" />
            <span>Cherished Moments & Aesthetic Visions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 bg-clip-text text-transparent">
              Moments That Shine ✨
            </span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base max-w-xl mx-auto">
            A gallery celebrating beauty, laughter, and the magical chapters of your journey. Click any photo to view full screen.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {birthdayData.gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => openLightbox(photo, index)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden glass-panel-glow p-3 border border-pink-500/20 hover:border-pink-400/60 shadow-lg transition-all duration-300"
            >
              {/* Photo Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-purple-950/40">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: photo.objectPosition || "center top" }}
                  onError={(e) => {
                    // Graceful fallback to backup URL or placeholder
                    const target = e.currentTarget;
                    if (target.src !== photo.fallbackUrl) {
                      target.src = photo.fallbackUrl;
                    }
                  }}
                  loading="lazy"
                />

                {/* Romantic Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs uppercase tracking-widest text-pink-300 font-semibold mb-1">
                    {photo.dateTag || 'Memory'}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1">{photo.title}</h4>
                  <p className="text-xs text-purple-200/90 line-clamp-2">{photo.subtitle}</p>
                </div>

                {/* Floating Heart indicator on card */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 fill-pink-400" />
                </div>
              </div>

              {/* Caption Under Card */}
              <div className="px-2 pt-3 pb-1 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-pink-100 group-hover:text-pink-300 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-purple-300/70">{photo.dateTag || 'Aesthetic Highlight'}</p>
                </div>
                <Sparkles className="w-4 h-4 text-pink-400/50 group-hover:text-amber-300 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Replacement Tip for website owner */}
        <div className="mt-14 p-5 sm:p-6 rounded-2xl glass-panel max-w-2xl mx-auto text-center border border-pink-500/30 shadow-glow-pink">
          <p className="font-serif italic text-base sm:text-lg text-pink-200 font-medium leading-relaxed">
            "Every picture tells a story of happiness, but the brightest moments are the genuine smiles and laughs we share along the way. ✨"
          </p>
          <span className="inline-block mt-2 text-xs text-amber-200/80 font-medium tracking-wide">
            Here's to celebrating you and making a million more wonderful memories, Bhakti! 🌸
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#120822] rounded-3xl overflow-hidden border border-pink-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div className="relative min-h-[55vh] max-h-[75vh] bg-black/90 flex items-center justify-center p-3">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] max-w-full w-auto object-contain rounded-lg"
                />
              </div>

              {/* Caption Banner */}
              <div className="p-6 bg-[#160a2c] border-t border-pink-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">
                      {selectedPhoto.dateTag || 'Cherished Memory'}
                    </span>
                    <span className="text-xs text-purple-400">• {currentIndex + 1} of {birthdayData.gallery.length}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{selectedPhoto.title}</h3>
                  <p className="text-sm text-purple-200/80 mt-1">{selectedPhoto.subtitle}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-pink-300 font-medium">Bhakti's Celebration 💖</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
