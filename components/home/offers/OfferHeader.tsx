// src/components/home/offers/OfferHeader.tsx
'use client';

import { Sparkles } from 'lucide-react';

export default function OfferHeader() {
  return (
    <div className="offers-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          Special Offers, Exceptional Stays
        </h2>
      </div>

      <p className="text-white-400 font-light text-xs sm:text-sm max-w-sm border-l border-white/10 pl-4">
        Handpicked seasonal packages and staycation deals across our luxury hotel locations.
      </p>
    </div>
  );
}