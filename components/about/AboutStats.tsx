'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { number: '120+', label: 'Bespoke Suites', detail: 'Tailored architectural layouts' },
  { number: '3', label: 'Michelin Culinary Stars', detail: 'Curated by world-renowned chefs' },
  { number: '99.4%', label: 'Loyalty Rate', detail: 'Returning global guests' },
  { number: '24/7', label: 'Dedicated Concierge', detail: 'Seamless hyper-personalized service' },
];

export default function AboutStats() {
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.stat-box', {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, { scope: statsRef });

  return (
    <section ref={statsRef} className="py-24 bg-[#F8F5F0] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="stat-box bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xl shadow-stone-200/40 hover:-translate-y-1 transition-all duration-300"
          >
            <p className="text-4xl lg:text-5xl font-serif font-normal text-amber-900 mb-2 tracking-tight">
              {m.number}
            </p>
            <h3 className="text-lg font-semibold text-stone-900 mb-1">{m.label}</h3>
            <p className="text-xs text-stone-500 font-light">{m.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}