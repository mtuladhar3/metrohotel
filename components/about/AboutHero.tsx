'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.from('.anim-title', { y: 30, opacity: 0 })
      .from('.anim-sub', { y: 20, opacity: 0 }, '-=0.6')
      .from('.anim-btn', { scale: 0.9, opacity: 0, stagger: 0.1 }, '-=0.5')
      .from('.anim-bottom-ui', { y: 50, opacity: 0, duration: 1 }, '-=0.6');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full min-h-1/2 flex flex-col justify-between bg-stone-100 overflow-hidden font-sans">
      
      {/* 1. FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80"
          alt="Luxury Resort Architecture"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft lighting overlay to guarantee dark text legibility on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent w-full md:w-3/5" />
      </div>

      {/* 2. TOP CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto pt-80 md:pt-100 pb-20 w-full">
        <div className="max-w-2xl space-y-6">
          <h1 className="anim-title text-5xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.1]">
            Who We Are
          </h1>

          <p className="anim-sub text-slate-200 text-base sm:text-lg font-normal leading-relaxed ">
            We have a holistic philosophy which translates into creating a harmonious environment, by wellness services that aim to detoxify.
          </p>

          
        </div>
      </div>

      {/* 3. BOTTOM ARCH & OVERLAPPING CARDS AREA */}
      <div className="relative z-20 w-full mt-20">
        
        {/* White Concave Wave Cutout */}
        <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden leading-none z-0">
          <svg 
            className="relative block w-full h-20 sm:h-28 md:h-36 text-white fill-current" 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,90 960,90 1440,0 L1440,120 L0,120 Z"></path>
          </svg>
        </div>

      
      </div>

    </div>
  );
}