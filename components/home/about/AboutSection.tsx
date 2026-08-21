// src/components/home/about/AboutSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import AboutHeader from './AboutHeader';
import AboutLetter from './AboutLetter';
import FloatingImages from './FloatingImages';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    // Floating animations only trigger on Desktop screens (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1.2,
        },
      });

      tl.fromTo(
        '.float-img-1',
        { x: '-120%', y: '40%', opacity: 0 },
        { x: '0%', y: '0%', opacity: 1, ease: 'power2.out' },
        0
      )
        .fromTo(
          '.float-img-2',
          { x: '120%', y: '60%', opacity: 0 },
          { x: '0%', y: '0%', opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo(
          '.float-img-3',
          { x: '-130%', y: '80%', opacity: 0 },
          { x: '0%', y: '0%', opacity: 1, ease: 'power2.out' },
          0.25
        )
        .fromTo(
          '.float-img-4',
          { x: '130%', y: '90%', opacity: 0 },
          { x: '0%', y: '0%', opacity: 1, ease: 'power2.out' },
          0.35
        );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-30 w-full min-h-screen bg-[#FAF8F5] text-slate-900 py-12 px-6 lg:px-12 rounded-t-[2.5rem] overflow-hidden"
    >
      {/* Desktop Floating Overlay Layer */}
      <div className="hidden lg:block">
        <FloatingImages />
      </div>

      {/* Main Content Column */}
      <div className="relative z-20 max-w-4xl mx-auto pt-4 lg:pt-8">
        <AboutHeader />
        <AboutLetter />
        
        {/* Mobile / Tablet Image Grid (Sits directly under the text) */}
        <div className="block lg:hidden">
          <FloatingImages />
        </div>
      </div>
    </section>
  );
}