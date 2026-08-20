// src/components/home/branches/BranchesSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import BranchHeader from './BranchHeader';
import BranchCard from './BranchCard';
import BranchControls from './BranchControls';
import { BRANCHES_DATA } from './branchesData';

export default function BranchesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
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

      // Staggered Cards Reveal Animation
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

      // Controls Animation
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F4EF] text-slate-900 py-16 sm:py-24 px-0 lg:px-12 overflow-hidden"
    >
      <div className="px-4 sm:px-8 lg:px-0">
        <BranchHeader />
      </div>

      {/* Grid on Desktop (lg) / Centered Scroll Carousel on Mobile */}
      <div
        ref={scrollContainerRef}
        className="branch-grid-container flex lg:grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 overflow-x-auto lg:overflow-visible no-scrollbar py-12 px-6 sm:px-12 lg:px-0 scroll-smooth snap-x snap-mandatory"
      >
        {BRANCHES_DATA.map((branch) => (
          <div
            key={branch.id}
            className="branch-card-item min-w-[80vw] sm:min-w-[320px] lg:min-w-0 flex-1 snap-center"
          >
            <BranchCard branch={branch} />
          </div>
        ))}
      </div>

      <BranchControls
        onPrev={() => handleScroll('left')}
        onNext={() => handleScroll('right')}
      />
    </section>
  );
}