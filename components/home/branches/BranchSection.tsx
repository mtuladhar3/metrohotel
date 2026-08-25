// src/components/home/branches/BranchesSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BranchHeader from './BranchHeader';
import BranchCard from './BranchCard';
import { BRANCHES_DATA } from '@/data/branches';

export default function BranchesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Maximum index calculation
  const maxIndex = BRANCHES_DATA.length - 3;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.branch-header-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.branch-header-anim',
          start: 'top 85%',
        },
      });

      gsap.from('.branch-card-item', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.branch-grid-container',
          start: 'top 80%',
        },
      });

      gsap.from('.branch-controls-anim', {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.branch-controls-anim',
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F4EF] text-slate-900 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* FIX 1: Pass navigation props into BranchHeader */}
        <BranchHeader onPrev={handlePrev} onNext={handleNext} />

        {/* Carousel Viewport Container */}
        <div className="w-full overflow-hidden py-6">
          <div
            className="branch-grid-container flex gap-6 transition-transform duration-500 ease-out"
            style={{
              // FIX 2: Correct transform calculation matching card width + gap on desktop
              transform: `translateX(calc(-${currentIndex} * ((100% - 48px) / 3 + 24px)))`,
            }}
          >
            {BRANCHES_DATA.map((branch) => (
              <div
                key={branch.id}
                className="branch-card-item w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] flex-shrink-0 flex flex-col"
              >
                <BranchCard branch={branch} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}