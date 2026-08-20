// src/components/home/properties/PropertyShowcase.tsx
'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PropertyData } from './PropertySection';

interface PropertyShowcaseProps {
  property: PropertyData;
  onPrev: () => void;
  onNext: () => void;
}

export default function PropertyShowcase({
  property,
  onPrev,
  onNext,
}: PropertyShowcaseProps) {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl bg-slate-200">
      {/* Showcase Image */}
      <img
        key={property.id}
        src={property.image}
        alt={property.name}
        className="property-showcase-img w-full h-full object-cover transition-opacity duration-700 ease-out"
      />

      {/* Floating Left Arrow */}
      <button
        onClick={onPrev}
        aria-label="Previous villa"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD2B2] text-slate-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg z-10 cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5 stroke-[2]" />
      </button>

      {/* Floating Right Arrow */}
      <button
        onClick={onNext}
        aria-label="Next villa"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD2B2] text-slate-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg z-10 cursor-pointer"
      >
        <ArrowRight className="w-5 h-5 stroke-[2]" />
      </button>
    </div>
  );
}