'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import type { Hotel } from '@/components/hotel-detail/hotelData';

type HotelHeroGalleryProps = {
  hotel: Hotel;
};

export default function HotelHeroGallery({ hotel }: HotelHeroGalleryProps) {
  // Deduplicate gallery images
  const images = [hotel.image, ...hotel.gallery].filter(
    (url, index, list) => list.indexOf(url) === index
  );

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(0);

  // Thumbnail strip only — never scroll the page
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Next slide handler
  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Faster Auto-slide (2 seconds interval)
  useEffect(() => {
    if (isPaused || isModalOpen || images.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, images.length, nextSlide]);

  // Keep the active thumbnail visible inside the strip without moving page scroll
  useEffect(() => {
    const strip = thumbnailStripRef.current;
    const thumb = thumbnailRefs.current[active];
    if (!strip || !thumb) return;

    const stripRect = strip.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const offset =
      thumbRect.left - stripRect.left - (stripRect.width - thumbRect.width) / 2;

    strip.scrollBy({ left: offset, behavior: 'smooth' });
  }, [active]);

  // Handle Modal Open
  const openModal = (index: number) => {
    setModalActive(index);
    setIsModalOpen(true);
  };

  // Modal Keyboard Navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') setModalActive((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setModalActive((prev) => (prev - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, images.length]);

  return (
    <>
      <section 
        className="relative overflow-hidden bg-slate-950 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative min-h-[80vh] sm:min-h-[90vh]">
          {/* Main Background Images */}
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                index === active ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20" />

          <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-6 pb-10 pt-32 sm:min-h-[85vh] sm:px-10 sm:pb-20">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
                <li>
                  <Link href="/" className="transition-colors hover:text-amber-500">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/hotels" className="transition-colors hover:text-amber-500">
                    Hotels
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-amber-500">{hotel.name}</li>
              </ol>
            </nav>

            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-500">
              {hotel.location}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-none sm:text-6xl lg:text-7xl">{hotel.name}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              {hotel.description}
            </p>

            {/* Thumbnail Navigation Row + View All Button */}
            {/* Thumbnail Navigation Row + View All Button */}
<div className="mt-8 flex items-center justify-between gap-4">
  {/* Added p-1.5 to prevent border clipping during hover/scale */}
  <div
    ref={thumbnailStripRef}
    className="flex gap-2 overflow-x-auto p-1.5 scrollbar-none"
  >
    {images.map((src, index) => (
      <button
        key={src}
        ref={(el) => { thumbnailRefs.current[index] = el; }}
        type="button"
        aria-label={`Show image ${index + 1}`}
        onClick={() => setActive(index)}
        className={`h-14 w-20 shrink-0 rounded-lg bg-cover bg-center transition-all duration-300 ${
          index === active
            ? 'border-2 border-amber-500 opacity-100'
            : 'border-2 border-transparent opacity-50 hover:opacity-100'
        }`}
        style={{ backgroundImage: `url(${src})` }}
      />
    ))}
  </div>

  <button
    type="button"
    onClick={() => openModal(active)}
    className="shrink-0 rounded-lg border border-white/20 bg-slate-900/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-amber-500 backdrop-blur-md transition hover:border-amber-500 hover:bg-slate-900"
  >
    View Gallery ({images.length})
  </button>
</div>
          </div>
        </div>
      </section>

      {/* Fullscreen Popup Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
            aria-label="Close Gallery"
          >
            ✕
          </button>

          <div className="relative flex max-h-[80vh] max-w-5xl items-center justify-center">
            <img
              src={images[modalActive]}
              alt={`${hotel.name} - View ${modalActive + 1}`}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>

          <button
            type="button"
            onClick={() => setModalActive((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setModalActive((prev) => (prev + 1) % images.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-500">
            {modalActive + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}