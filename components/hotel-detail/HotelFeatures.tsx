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
};

export default function HotelFeatures({ features }: HotelFeaturesProps) {
  return (
    <section id="experiences" className="scroll-mt-36 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-500">Facilities</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Everything arranged for ease</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Thoughtful amenities that support rest, movement, and memorable days on property.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article
                key={feature.id}
                className="bg-slate-950 p-8 transition-colors duration-300 hover:bg-white/[0.03] sm:p-9"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/90">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg tracking-wide text-white/95">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
