'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface EventCardProps {
  title: string;
  image: string;
  href: string;
}

export default function EventCard({ title, image, href }: EventCardProps) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-stone-900 shadow-md transition-all duration-500 hover:shadow-2xl"
    >
      {/* Background Image with Hover Scale */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark Gradient Overlay for Crisp Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      {/* Card Footer Info */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between gap-4 z-10">
        <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight leading-snug">
          {title}
        </h3>

        {/* Circular Arrow Button */}
        <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
          <span className="text-lg leading-none transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
