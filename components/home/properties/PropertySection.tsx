// src/components/home/properties/PropertiesSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import PropertyHeader from './PropertyHeader';
import PropertyTabs from './PropertyTabs';
import PropertyShowcase from './PropertyShowcase';

export interface PropertyData {
  id: number;
  name: string;
  description: string;
  image: string;
}

const PROPERTIES: PropertyData[] = [
  {
    id: 1,
    name: 'Villa Sundara',
    description:
      'A tropical sanctuary with panoramic ocean horizon views, surrounded by lush native gardens and private cliffside terraces.',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    name: 'Villa Miraia',
    description:
      'Modern open-concept living space framed by glass walls, seamlessly blending indoor luxury with infinity pool waters.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    name: 'Villa Azari',
    description:
      'High-ceiling coastal retreat nestled gently along private sands with custom timber architecture and sunset decks.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    name: 'Villa Veluna',
    description:
      'A place where time stands still. Among herbs\' scent and the wind\'s whisper, find peace hidden from the world.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function PropertiesSection() {
  const [activeId, setActiveId] = useState<number>(4); // Default active item (Villa Veluna as in screenshot)
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeIndex = PROPERTIES.findIndex((p) => p.id === activeId);

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + PROPERTIES.length) % PROPERTIES.length;
    setActiveId(PROPERTIES[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % PROPERTIES.length;
    setActiveId(PROPERTIES[nextIndex].id);
  };

  // GSAP Animations
  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    // Header reveal
    gsap.fromTo(
      '.properties-header',
      { y: 30, opacity: 0 },
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

    // Section body reveal
    gsap.fromTo(
      '.properties-body',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      }
    );
  }, []);

  // Fade animation trigger when active property changes
  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    gsap.fromTo(
      '.property-showcase-img',
      { opacity: 0.6, scale: 1.02 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, [activeId]);

  return (
    <section
      id="villas"
      ref={sectionRef}
      className="relative z-30 w-full bg-[#F4F6F6] text-slate-900 py-20 sm:py-28 px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <PropertyHeader />

        {/* Content Layout */}
        <div className="properties-body grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-4">
            <PropertyTabs
              properties={PROPERTIES}
              activeId={activeId}
              onSelect={(id) => setActiveId(id)}
            />
          </div>

          {/* Right Column: Image Viewport */}
          <div className="lg:col-span-8 flex items-center">
            <PropertyShowcase
              property={PROPERTIES[activeIndex]}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}