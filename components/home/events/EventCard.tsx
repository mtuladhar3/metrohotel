// src/components/home/events/EventCard.tsx
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { EventItem } from './eventsData';

interface EventCardProps {
  eventItem: EventItem;
  className?: string;
}

export default function EventCard({ eventItem, className = '' }: EventCardProps) {
  return (
    <Link
      href={eventItem.href}
      className={`group flex flex-col bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-500 event-card-anim ${className}`}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
        <img
          src={eventItem.image}
          alt={eventItem.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Footer Title & Action Badge */}
      <div className="flex items-center justify-between pt-3.5 pb-1 px-2 text-slate-900">
        <h3 className="font-serif text-base sm:text-lg font-normal group-hover:text-amber-900 transition-colors">
          {eventItem.title}
        </h3>
        
        <div className="w-7 h-7 rounded-full bg-amber-100 group-hover:bg-amber-900 text-amber-900 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 ml-2">
          <ArrowUpRight className="w-4 h-4 stroke-[2]" />
        </div>
      </div>
    </Link>
  );
}