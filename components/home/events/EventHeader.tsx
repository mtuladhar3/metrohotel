// src/components/home/events/EventHeader.tsx
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function EventHeader() {
  return (
    <div className="flex flex-col items-start gap-5 lg:pr-8 event-header-anim">
      <span className="text-xs uppercase tracking-wider text-amber-900 font-medium">
        Unforgettable Occasions
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal leading-tight">
        Host Your Event With Us
      </h2>

      <p className="text-sm text-slate-600 font-light leading-relaxed max-w-sm">
        From grand weddings to intimate gatherings and high-level corporate galas, our versatile spaces and bespoke hospitality create moments worth celebrating.
      </p>

      <Link
        href="/events"
        className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-full border border-amber-900/20 bg-amber-900/5 hover:bg-amber-900 hover:text-white text-slate-900 text-xs font-medium transition-all duration-300 group"
      >
        <span>Explore All Events</span>
        <div className="w-5 h-5 rounded-full bg-amber-900/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-3 h-3 text-amber-900 group-hover:text-white transition-colors" />
        </div>
      </Link>
    </div>
  );
}