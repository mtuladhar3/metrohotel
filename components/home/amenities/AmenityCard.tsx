// src/components/home/amenities/AmenityCard.tsx
'use client';

import { ReactNode } from 'react';

interface AmenityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isLastInRow?: boolean;
  isBottomRow?: boolean;
}

export default function AmenityCard({
  icon,
  title,
  description,
  isLastInRow = false,
  isBottomRow = false,
}: AmenityCardProps) {
  return (
    <div
      className={`amenity-card flex flex-col items-start p-8 md:p-10 transition-all duration-300 hover:bg-white/[0.02] group ${
        !isLastInRow ? 'md:border-r border-white/10' : ''
      } ${!isBottomRow ? 'border-b border-white/10' : ''}`}
    >
      {/* Circular Icon Container */}
      <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/90 mb-6 group-hover:border-white group-hover:scale-105 transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl text-white/95 mb-2 tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed text-white-70 font-light max-w-xs">
        {description}
      </p>
    </div>
  );
}