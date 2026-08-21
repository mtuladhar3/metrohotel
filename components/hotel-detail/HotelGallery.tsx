'use client';

import { useState, useEffect } from 'react';
import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Hotel } from '@/components/hotel-detail/hotelData';

type HotelGalleryProps = {
  hotel: Hotel;
};

// Fallback high-res luxury travel placeholders if the dataset has < 10 photos
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
];

export default function HotelGallery({ hotel }: HotelGalleryProps) {
  // Combine hotel data images with fallbacks to ensure at least 10 images
  const rawImages = [hotel.image, ...hotel.gallery].filter(
    (url, index, list) => list.indexOf(url) === index
  );

  const allImages = rawImages.length >= 10 
    ? rawImages 
    : [...rawImages, ...FALLBACK_IMAGES.slice(0, 10 - rawImages.length)];

  // Slice exactly the first 8 images for the grid display
  const displayedGridImages = allImages.slice(0, 8);
  const remainingCount = allImages.length - 7;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Open modal lightbox directly at specified index
  const openPopup = (index: number) => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  // Keyboard controls for modal navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % allImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, allImages.length]);

  return (
    <section id="gallery" className="scroll-mt-36 mx-auto max-w-7xl px-6 py-16 sm:px-10">
      {/* Header Title & View More Action */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-600">
            Visual Experience
          </span>
          <h2 className="mt-2 text-3xl font-serif font-semibold text-slate-900 sm:text-4xl">
            Hotel Gallery
          </h2>
        </div>

        {/* View More Button -> Opens 8th image (index 7) */}
        <button
          type="button"
          onClick={() => openPopup(7)}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-amber-500 transition hover:bg-slate-800"
        >
          <Images className="h-4 w-4" />
          View More ({allImages.length})
        </button>
      </div>

      {/* Grid displaying exactly 8 photos */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {displayedGridImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            onClick={() => openPopup(index)}
            className="group relative h-48 w-full overflow-hidden rounded-xl bg-slate-200 cursor-pointer sm:h-60"
          >
            <img
              src={src}
              alt={`${hotel.name} gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Overlay badge on the 8th image showing remaining photos */}
            {index === 7 && remainingCount > 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/65 text-white backdrop-blur-xs transition hover:bg-slate-950/75">
                <span className="text-2xl font-bold text-amber-500">+{remainingCount}</span>
                <span className="text-xs font-medium uppercase tracking-wider">More Photos</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Next/Prev navigation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Active Image Render */}
          <div className="relative flex max-h-[80vh] max-w-5xl items-center justify-center">
            <img
              src={allImages[activeImageIndex]}
              alt={`${hotel.name} modal image ${activeImageIndex + 1}`}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={() =>
              setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={() => setActiveImageIndex((prev) => (prev + 1) % allImages.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Photo Index Counter Badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-500">
            {activeImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
}