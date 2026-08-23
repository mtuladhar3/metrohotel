// src/components/home/amenities/AmenitiesSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Snowflake,
  Coffee,
  Wifi,
  Waves,
  BedDouble,
  Car,
  Shirt,
  WavesIcon,
} from 'lucide-react';
import AmenitiesHeader from './AmenitiesHeader';
import AmenityCard from './AmenityCard';

const AMENITIES = [
  {
    id: 1,
    icon: <Snowflake className="w-5 h-5 stroke-[1.5]" />,
    title: 'Air Conditioner',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
  {
    id: 2,
    icon: <Coffee className="w-5 h-5 stroke-[1.5]" />,
    title: 'Breakfast',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
  {
    id: 3,
    icon: <Wifi className="w-5 h-5 stroke-[1.5]" />,
    title: 'Fiber Wifi',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
  {
    id: 4,
    icon: <Waves className="w-5 h-5 stroke-[1.5]" />,
    title: 'Pool',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
  {
    id: 5,
    icon: <BedDouble className="w-5 h-5 stroke-[1.5]" />,
    title: 'Room Service',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
  {
    id: 6,
    icon: <Car className="w-5 h-5 stroke-[1.5]" />,
    title: 'Parking Space',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
  {
    id: 7,
    icon: <Shirt className="w-5 h-5 stroke-[1.5]" />,
    title: 'Laundry',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
  {
    id: 8,
    icon: <WavesIcon className="w-5 h-5 stroke-[1.5]" />,
    title: 'Beach',
    description: 'Aenean faucibus nibh et justo cursus id lorem.',
  },
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    // Fade in section header
    gsap.fromTo(
      '.amenities-header',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );

    // Stagger animate cards into view
    gsap.fromTo(
      '.amenity-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      }
    );
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="relative z-30 w-full bg-gradient-to-b from-[#3D3536] via-[#332C2D] to-[#241F20] text-white py-20 px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <AmenitiesHeader />

        {/* Responsive Grid Box with Border Wrappers */}
        <div className="border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((item, index) => {
            const isLastInRow = (index + 1) % 4 === 0;
            const isBottomRow = index >= 4;

            return (
              <AmenityCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isLastInRow={isLastInRow}
                isBottomRow={isBottomRow}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}