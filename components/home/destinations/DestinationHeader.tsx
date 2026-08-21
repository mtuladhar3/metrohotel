// src/components/home/destinations/DestinationHeader.tsx
'use client';

import { Compass } from 'lucide-react';

export default function DestinationHeader() {
  return (
    <div className="destinations-header text-center max-w-2xl mx-auto mb-16 space-y-3">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-[11px] tracking-widest uppercase">
        <Compass className="w-3.5 h-3.5 text-amber-400" />
        <span>Journey Across Nepal</span>
      </div>
      <h2 className="text-3xl sm:text-5xl text-slate-900 tracking-tight font-normal">
        Explore Our Destinations
      </h2>
      <p className="text-slate-600 font-normal text-xs sm:text-sm">
        From ancient heritage valleys to tranquil lakesides, wild jungles, and Himalayan sunrise viewpoints.
      </p>
    </div>
  );
}