import Image from 'next/image';
import {
  Car,
  ConciergeBell,
  Dumbbell,
  Flower2,
  Palmtree,
  UtensilsCrossed,
  Waves,
  Wifi,
} from 'lucide-react';
import type { HotelFeature } from '@/components/hotel-detail/hotelData';

const ICONS = {
  waves: Waves,
  spa: Flower2,
  utensils: UtensilsCrossed,
  wifi: Wifi,
  dumbbell: Dumbbell,
  palm: Palmtree,
  car: Car,
  concierge: ConciergeBell,
} as const;

type HotelFeaturesProps = {
  features: HotelFeature[];
  /** Optional background image URL. Defaults to a premium dark luxury interior image. */
  bgImage?: string;
};

const DEFAULT_BG = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85';

export default function HotelFeatures({ features, bgImage = DEFAULT_BG }: HotelFeaturesProps) {
  return (
    <section id="facilities" className="relative scroll-mt-36 bg-slate-950 text-white overflow-hidden">
      {/* 1. BACKGROUND IMAGE & OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Hotel Facilities & Amenities Background"
          fill
          priority={false}
          className="object-cover object-center"
        />
        {/* Base dark tint overlay */}
        <div className="absolute inset-0 bg-black/75" />
        {/* Top and bottom smooth linear gradients for seamless section transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black opacity-90" />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-500">Facilities</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Everything arranged for ease
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base font-light">
            Thoughtful amenities that support rest, movement, and memorable days on property.
          </p>
        </div>

        {/* 3. GRID WITH GLASSMORPHISM CARDS FOR MAXIMUM VISIBILITY */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article
                key={feature.id}
                className="group bg-black/60 backdrop-blur-md p-8 transition-all duration-300 hover:bg-slate-900/80 sm:p-9"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/5 text-amber-400 transition-colors duration-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg tracking-wide font-medium text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 font-light">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}