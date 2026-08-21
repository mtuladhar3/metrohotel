// src/components/home/offers/OfferCard.tsx
'use client';

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

interface OfferCardProps {
  offer: OfferData;
}

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <div className="offer-card group relative bg-[#121214] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
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
          <p className="text-white-400 font-light text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
            {offer.description}
          </p>
        </div>

        {/* Footer CTA & Price */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
          <div>
            <span className="text-[10px] uppercase text-white-400 block">Starting From</span>
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
  );
}