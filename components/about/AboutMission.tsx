'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const pillarData = [
  {
    id: 'mission',
    label: 'Our Mission',
    title: 'Transforming luxury into holistic well-being.',
    description:
      'To provide an sanctuary where architectural elegance and tailored wellness converge, allowing every guest to reset, detoxify, and reconnect with nature without sacrificing modern sophistication.',
    stats: [
      { label: 'Organic Materials', value: '100%' },
      { label: 'Tailored Programs', value: '24/7' },
    ],
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    title: 'Pioneering sustainable architectural sanctuaries globally.',
    description:
      'We envision a global network of minimalist retreats where design harmonizes seamlessly with local ecosystems, setting new standards for zero-impact, high-end hospitality.',
    stats: [
      { label: 'Carbon Neutrality', value: '2030' },
      { label: 'Eco-Certifications', value: 'Global' },
    ],
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
  },
  {
    id: 'values',
    label: 'Core Values',
    title: 'Grounded in authenticity, craft, and conscious luxury.',
    description:
      'Our foundation rests on uncompromising craftsmanship, deep respect for local heritage, transparent sustainability, and genuine, intuitive care for every individual.',
    stats: [
      { label: 'Local Artisans', value: '85%+' },
      { label: 'Guest Retention', value: '98%' },
    ],
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
  },
];

export default function AboutMission() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance Scroll Trigger
      gsap.from('.anim-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef }
  );

  // Tab switch animation
  const handleTabChange = (index: number) => {
    if (index === activeTab) return;

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setActiveTab(index);
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      },
    });
  };

  const current = pillarData[activeTab];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FDFBF7] text-stone-900 px-6 lg:px-16  font-sans"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="anim-header text-xs uppercase tracking-widest text-[#d8976b] font-semibold">
              The Purpose
            </span>
            <h2 className="anim-header text-4xl sm:text-5xl font-normal tracking-tight text-stone-950">
              Guiding Principles
            </h2>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="anim-header flex items-center gap-2 p-1.5 bg-stone-200/60 backdrop-blur-md rounded-full border border-stone-300/50 self-start md:self-auto">
            {pillarData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(idx)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-stone-950 text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-[2.5rem] border border-stone-200/80 shadow-xl shadow-stone-200/50"
        >
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F8BE93]/20 text-[#c2753f] text-xs font-semibold tracking-wider uppercase">
              {current.label}
            </span>

            <h3 className="text-3xl sm:text-4xl font-normal text-stone-950 leading-tight">
              {current.title}
            </h3>

            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              {current.description}
            </p>

            {/* Key Stat Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
              {current.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-medium text-stone-950">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-500 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg border border-stone-100">
            <Image
              src={current.image}
              alt={current.label}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}