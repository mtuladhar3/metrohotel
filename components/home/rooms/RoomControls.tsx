// src/components/rooms/RoomControls.tsx
'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface RoomControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function RoomControls({ onPrev, onNext }: RoomControlsProps) {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 max-w-[88vw] sm:max-w-[680px] mx-auto flex justify-between pointer-events-none px-2 sm:px-0">
      {/* Left Arrow Button */}
      <button
        onClick={onPrev}
        aria-label="Previous Slide"
        className="pointer-events-auto -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0d2134] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={onNext}
        aria-label="Next Slide"
        className="pointer-events-auto translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0d2134] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10"
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
      </button>
    </div>
  );
}