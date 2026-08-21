// src/components/home/destinations/DestinationCard.tsx
'use client';

import { ArrowUpRight } from 'lucide-react';

export interface DestinationData {
  id: number;
  step: string;
  city: string;
  tagline: string;
  description: string;
  image: string;
  propertiesCount: string;
}

interface DestinationCardProps {
  destination: DestinationData;
  isLast: boolean;
}

export default function DestinationCard({ destination, isLast }: DestinationCardProps) {
  return (
    <div className="destination-card relative group flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-400 transition-all duration-500 shadow-sm hover:shadow-xl">
      {/* Step Sequence Indicator */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-slate-400 group-hover:text-amber-600 transition-colors">
          {destination.step}
        </span>
        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
          {destination.propertiesCount}
        </span>
      </div>

      {/* Image Viewport */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
        <img
          src={destination.image}
          alt={destination.city}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* City Title & Specs */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-slate-900">{destination.city}</h3>
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-950 group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <span className="text-xs font-medium text-amber-700 block mt-1">{destination.tagline}</span>
        <p className="text-slate-600 text-xs leading-relaxed mt-2 font-normal line-clamp-3">
          {destination.description}
        </p>
      </div>

      {/* Route Arrow Line for Desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="w-8 h-[2px] bg-slate-300 relative">
            <span className="absolute -right-1 -top-[3px] border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-400" />
          </div>
        </div>
      )}
    </div>
  );
}