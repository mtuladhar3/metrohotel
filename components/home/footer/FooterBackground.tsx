// src/components/layout/footer/FooterBackground.tsx
'use client';

import Image from 'next/image';

export default function FooterBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/footerbg.avif"
        alt="Footer Ambient Background"
        fill
        priority
        className="object-cover opacity-25 scale-105"
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none" />
    </div>
  );
}