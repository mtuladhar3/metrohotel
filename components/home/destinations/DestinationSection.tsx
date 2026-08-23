// src/components/home/destinations/DestinationsSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DestinationHeader from './DestinationHeader';
import DestinationCard, { DestinationData } from './DestinationCard';

const DESTINATIONS: DestinationData[] = [
  {
    id: 1,
    step: '01',
    city: 'Kathmandu',
    tagline: 'Cultural Heritage & Urban Elegance',
    description: 'Immerse yourself in UNESCO heritage sites, bustling artisanal bazaars, and luxury sanctuary stays.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    propertiesCount: '2 Properties',
  },
  {
    id: 2,
    step: '02',
    city: 'Pokhara',
    tagline: 'Lakeside Serenity & Annapurna Views',
    description: 'Relax along Fewa Lake with breathtaking mountain vistas, infinity pools, and luxury wellness spas.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    propertiesCount: '2 Properties',
  },
  {
    id: 3,
    step: '03',
    city: 'Chitwan',
    tagline: 'Wild Jungle Safaris & Nature Trails',
    description: 'Experience luxury eco-lodges, elephant safaris, and pristine river wildlife encounters.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    propertiesCount: '1 Property',
  },
  {
    id: 4,
    step: '04',
    city: 'Nagarkot',
    tagline: 'Himalayan Sunrise & Cloud Ridges',
    description: 'Unwind at high-altitude mountain resorts offering 360-degree Himalayan sunrise views.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    propertiesCount: '1 Property',
  },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    gsap.fromTo(
      '.destinations-header',
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
      '.destination-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 bg-[#F4F6F6] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <DestinationHeader />

        {/* Route Banner Bar */}
        <div className="hidden lg:flex items-center justify-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest mb-12 bg-white/60 backdrop-blur-md py-3 px-6 rounded-full border border-slate-200/80 w-max mx-auto shadow-sm">
          <span>Kathmandu</span>
          <span className="text-amber-500">→</span>
          <span>Pokhara</span>
          <span className="text-amber-500">→</span>
          <span>Chitwan</span>
          <span className="text-amber-500">→</span>
          <span>Nagarkot</span>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {DESTINATIONS.map((item, index) => (
            <DestinationCard
              key={item.id}
              destination={item}
              isLast={index === DESTINATIONS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}