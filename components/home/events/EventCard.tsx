'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { EventItem } from '@/data/events';

interface EventCardProps {
  eventItem: EventItem;
  className?: string;
}

export default function EventCard({ eventItem, className = '' }: EventCardProps) {
  return (
    <Link
      href={eventItem.href}
      className={`group flex flex-col bg-white rounded-2xl   border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-500 event-card-anim ${className}`}
    >
      {/* Image & Overlay Container */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
        <img
          src={eventItem.image}
          alt={eventItem.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Dark Gradient Overlay (Bottom to Top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content Inside Card (Bottom Aligned) */}
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 flex items-center justify-between text-white z-10">
          <h3 className="text-base sm:text-xl font-normal text-white group-hover:text-amber-500 transition-colors line-clamp-2">
            {eventItem.title}
          </h3>

          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-amber-500 text-white flex items-center justify-center transition-all duration-300 shrink-0 ml-2">
            <ArrowUpRight className="w-4 h-4 stroke-[2]" />
          </div>
        </div>
      </div>
    </Link>
  );
}