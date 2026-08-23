import BreadcrumbSection from '@/components/layout/BreadcrumbSection';
import { MapPin, ArrowRight, Tag } from 'lucide-react';

export interface OfferData {
  id: number;
  title: string;
  hotelLabel: string;
  description: string;
  price: string;
  discountBadge?: string;
  image: string;
}

const OFFERS: OfferData[] = [
  {
    id: 1,
    title: 'Weekend Escape',
    hotelLabel: 'Hotel Kathmandu',
    description: 'Recharge in the heart of the city with luxury suite upgrades, complimentary breakfast, and spa privileges.',
    price: '$180 / night',
    discountBadge: '20% OFF',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Family Stay Package',
    hotelLabel: 'Hotel Pokhara',
    description: 'Lakeside family retreat featuring interconnecting rooms, guided boat tours, and kid-friendly dining activities.',
    price: '$240 / night',
    discountBadge: 'Best Value',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Business & Executive Stay',
    hotelLabel: 'Hotel Chitwan',
    description: 'Premium executive amenities including high-speed workspace access, airport transfers, and private lounge access.',
    price: '$150 / night',
    discountBadge: 'Corporate rate',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Page() {
  return (
    <main className="bg-[#f5f5f3] text-slate-900">
      <BreadcrumbSection
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Offers' },
        ]}
        eyebrow="Metro Journal"
        title="Special Offers, Exceptional Stays"
        description="Explore the places, flavours, and experiences that make every Metro Hotel stay memorable."
      />

      <section className="relative z-30 bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="offer-card group relative bg-[#121214] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col justify-between shadow-xl"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30" />

                  {/* Hotel/Branch Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-[11px] tracking-wide">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{offer.hotelLabel}</span>
                  </div>

                  {/* Discount Badge */}
                  {offer.discountBadge && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-semibold text-[10px] uppercase tracking-wider shadow-lg">
                      <Tag className="w-3 h-3" />
                      <span>{offer.discountBadge}</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl text-white tracking-wide group-hover:text-amber-500 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
                      {offer.description}
                    </p>
                  </div>

                  {/* Footer CTA & Price */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Starting From</span>
                      <span className="text-lg text-white">{offer.price}</span>
                    </div>

                    <a
                      href={`#claim-offer-${offer.id}`}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 text-xs font-medium uppercase tracking-wider transition-all duration-300"
                    >
                      <span>Claim Offer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}