// src/components/home/cta/SideCollage.tsx
'use client';

import { CollageImage } from '@/data/cta';

interface SideCollageProps {
  images: CollageImage[];
  direction: 'up' | 'down';
  position: 'left' | 'right';
}

export default function SideCollage({
  images,
  direction,
  position,
}: SideCollageProps) {
  const isLeft = position === 'left';
  const isUp = direction === 'up';

  // Duplicate 4x to ensure a continuous, gapless marquee strip
  const marqueeImages = [...images, ...images, ...images, ...images];

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 h-[260%] z-10 hidden md:block overflow-hidden pointer-events-none -rotate-[40deg] ${
        isLeft
          ? '-left-16 sm:-left-20 lg:-left-0'
          : '-right-16 sm:-right-20 lg:-right-0'
      }`}
      style={{ width: '240px' }}
    >
      <div
        className={`flex flex-col gap-6 py-4 ${
          isUp ? 'animate-marquee-up' : 'animate-marquee-down'
        }`}
      >
        {marqueeImages.map((img, index) => (
          <div
            key={`${img.id}-${index}`}
            className="w-52 lg:w-60 aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/60 shrink-0"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}