// src/components/home/cta/CtaSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import VideoBackground from './VideoBackground';
import SideCollage from './SideCollage';
import CtaContent from './CtaContent';
import { LEFT_COLLAGE_IMAGES, RIGHT_COLLAGE_IMAGES } from '@/data/cta';

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Content Center Animation
      gsap.from('.cta-content-anim', {
        scale: 0.95,
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Left Cards Entrance
      gsap.from('.cta-left-collage-anim', {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Right Cards Entrance
      gsap.from('.cta-right-collage-anim', {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-slate-100 py-16"
    >
      {/* Dynamic Background Video */}
      <VideoBackground />

      {/* Angled Left Image Collage */}
<SideCollage 
  images={LEFT_COLLAGE_IMAGES} 
  position="left" 
  direction="up" 
/>

{/* Center CTA Content Block */}
<CtaContent />

{/* Angled Right Image Collage */}
<SideCollage 
  images={RIGHT_COLLAGE_IMAGES} 
  position="right" 
  direction="down" 
/>






    </section>
  );
}