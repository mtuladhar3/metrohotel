// src/components/rooms/RoomSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import RoomHeader from './RoomHeader';
import RoomCard, { RoomItem } from './RoomCard';
import RoomControls from './RoomControls';

const ROOM_ITEMS: RoomItem[] = [
  {
    id: 1,
    tag: 'Overwater Villa',
    title: 'Tide Song Villa',
    size: '320 ft2',
    beds: '4 Beds',
    guests: '12 Guests',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    tag: 'Overwater Bungalow',
    title: 'Reef Whisper Suite',
    size: '248 ft2',
    beds: '3 Beds',
    guests: '8 Guests',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    tag: 'Overwater Bungalow',
    title: 'Lagoon Harmony Bungalow',
    size: '90 ft2',
    beds: '2 Beds',
    guests: '4 Guests',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    tag: 'Overwater Studio',
    title: 'Coral Breath Studio',
    size: '156 ft2',
    beds: '2 Beds',
    guests: '4 Guests',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function RoomSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Perfectly calculate X offset based on VIEWPORT center
  const centerActiveCard = () => {
    if (!trackRef.current || !containerRef.current) return;

    const cards = trackRef.current.children;
    if (!cards[activeIndex]) return;

    const targetCard = cards[activeIndex] as HTMLElement;
    const viewportWidth = containerRef.current.offsetWidth;
    const cardLeft = targetCard.offsetLeft;
    const cardWidth = targetCard.offsetWidth;

    // Center of viewport minus center of target card
    const targetX = viewportWidth / 2 - (cardLeft + cardWidth / 2);

    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.75,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
    centerActiveCard();
    window.addEventListener('resize', centerActiveCard);
    return () => window.removeEventListener('resize', centerActiveCard);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? ROOM_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === ROOM_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-16 sm:py-24 overflow-hidden">
      <RoomHeader />

      {/* Viewport Stage Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-4 flex items-center"
      >
        {/* Left Side Edge Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none backdrop-blur-[2px]" />

        {/* Right Side Edge Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none backdrop-blur-[2px]" />

        {/* Moving Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-8 w-max transition-none will-change-transform"
        >
          {ROOM_ITEMS.map((item, idx) => (
            <RoomCard
              key={item.id}
              item={item}
              isActive={idx === activeIndex}
            />
          ))}
        </div>

        {/* Floating Navigation Controls */}
        <RoomControls onPrev={handlePrev} onNext={handleNext} />
      </div>
    </section>
  );
}