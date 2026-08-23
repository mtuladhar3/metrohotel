'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { title: 'Excellence', desc: 'Setting the gold standard in tailored luxury.' },
  { title: 'Sustainability', desc: 'Committed to green initiatives and eco-conscious luxury.' },
  { title: 'Authenticity', desc: 'Reflecting the vibrant culture of our urban context.' },
];

export default function AboutValues() {
  const valuesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.value-card', {
      scrollTrigger: { trigger: valuesRef.current, start: 'top 85%' },
      scale: 0.95,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power2.out',
    });
  }, { scope: valuesRef });

  return (
    <section ref={valuesRef} className="bg-zinc-50 dark:bg-zinc-900/50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-zinc-900 dark:text-white">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="value-card p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-md border border-zinc-200/60 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{val.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}