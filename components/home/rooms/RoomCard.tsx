// src/components/rooms/RoomCard.tsx
'use client';

import { Maximize2, Bed, Users } from 'lucide-react';

export interface RoomItem {
  id: number;
  tag: string;
  title: string;
  size: string;
  beds: string;
  guests: string;
  image: string;
}

interface RoomCardProps {
  item: RoomItem;
  isActive: boolean;
}

export default function RoomCard({ item, isActive }: RoomCardProps) {
  return (
    <div
      className={`room-card-item relative shrink-0 rounded-[28px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] select-none ${
        isActive
          ? 'w-[82vw] max-w-[620px] aspect-[16/11] opacity-100 filter-none z-10 '
          : 'w-[82vw] max-w-[620px] aspect-[16/11] opacity-60 blur-[6px] sm:blur-[10px] scale-95 z-0'
      }`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover pointer-events-none"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

      {/* Top Tag Pill */}
      <div className="absolute top-5 left-5 z-10 px-3 py-1 rounded-md bg-black/30 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] uppercase tracking-widest">
        {item.tag}
      </div>

      {/* Footer Content */}
      <div
        className={`absolute bottom-6 left-6 right-6 z-10 text-white transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl text-white font-normal mb-3 tracking-wide">
          {item.title}
        </h3>

        {/* Spec Icons */}
        <div className="flex items-center gap-4 sm:gap-6 text-slate-200 text-xs sm:text-sm font-light">
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-slate-300" />
            <span>{item.size}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-slate-300" />
            <span>{item.beds}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-slate-300" />
            <span>{item.guests}</span>
          </div>
        </div>
      </div>
    </div>
  );
}