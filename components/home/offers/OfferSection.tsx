// src/components/home/offers/OffersSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OfferHeader from './OfferHeader';
import OfferCard, { OfferData } from './OfferCard';

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

export default function OffersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    gsap.fromTo(
      '.offers-header',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );

    gsap.fromTo(
      '.offer-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 bg-[#000] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <OfferHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}