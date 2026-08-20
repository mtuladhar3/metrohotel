// src/components/home/events/EventsSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import EventHeader from './EventHeader';
import EventCard from './EventCard';
import { EVENTS_DATA } from './eventsData';

export default function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !headerWrapperRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance Fade-in for Header (All Screen Sizes)
      gsap.from('.event-header-anim', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.event-header-anim',
          start: 'top 85%',
        },
      });

      // 2. Entrance Fade-in for Event Cards (All Screen Sizes)
      const cards = gsap.utils.toArray('.event-card-anim');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // 3. Match Media: Pin Header ONLY on Desktops / Laptops (min-width: 1024px)
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: headerWrapperRef.current,
          start: 'top 100px',
          endTrigger: sectionRef.current,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative">
          
          {/* Header Container */}
          <div
            ref={headerWrapperRef}
            className="lg:col-span-4 z-10 self-start"
          >
            <EventHeader />
          </div>

          {/* First Cards Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:gap-10">
            <EventCard eventItem={EVENTS_DATA[0]} />
            <EventCard eventItem={EVENTS_DATA[2]} />
          </div>

          {/* Second Cards Stack (Offset Downward on Desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:gap-10 lg:pt-16">
            <EventCard eventItem={EVENTS_DATA[1]} />
            <EventCard eventItem={EVENTS_DATA[3]} />
          </div>

        </div>
      </div>
    </section>
  );
}