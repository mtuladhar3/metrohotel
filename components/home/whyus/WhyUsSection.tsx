// src/components/home/why-us/WhyUsSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import WhyUsHeader from './WhyUsHeader';
import FeatureCard from './FeatureCard';
import { WHY_US_FEATURES } from './whyUsData';

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.why-us-header-anim', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-us-header-anim',
          start: 'top 85%',
        },
      });

      // Cards Animation
      const cards = gsap.utils.toArray('.why-us-card-anim');
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
            trigger: '.why-us-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#FAF8F5] text-white flex flex-col justify-between overflow-hidden py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Villa Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-between gap-30 lg:gap-80">
        {/* Top Header */}
        <WhyUsHeader />

        {/* 4-Column Feature Grid with Vertical Dividers */}
        <div className="why-us-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border-white/20 pt-8">
          {WHY_US_FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isLast={index === WHY_US_FEATURES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}