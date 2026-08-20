// src/components/home/cta/CtaContent.tsx
'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';

export default function CtaContent() {
  return (
    <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto px-4 cta-content-anim">
      {/* Guest Rating Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-slate-900 gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-slate-900 stroke-none" />
          ))}
        </div>
        <span className="text-xs uppercase font-semibold tracking-wider text-slate-700">
          9.7/10 GUEST RATING
        </span>
      </div>

      {/* Heading */}
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-normal leading-[1.1] tracking-tight mb-8">
        A Better Stay  <br /> Is Just a Booking Away
      </h2>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/reserve"
          className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-medium hover:bg-slate-800 transition-colors shadow-md"
        >
          Reserve Now
        </Link>
        <Link
          href="/rooms"
          className="px-6 py-3 rounded-full bg-slate-200/80 hover:bg-slate-300/80 backdrop-blur-sm text-slate-900 text-xs sm:text-sm font-medium transition-colors"
        >
          See All Rooms
        </Link>
      </div>
    </div>
  );
}