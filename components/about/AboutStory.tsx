'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.story-reveal', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="pb-20 bg-white text-stone-900 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-5 space-y-4">
            <span className="story-reveal text-xs uppercase tracking-widest text-amber-800 font-semibold">Our Origin</span>
            <h2 className="story-reveal text-4xl sm:text-5xl font-serif font-light leading-tight">
              Designed for those who appreciate the <span className="italic font-normal">subtle details</span>.
            </h2>
          </div>
          <p className="story-reveal lg:col-span-7 text-stone-600 text-lg font-light leading-relaxed">
            Every corner of Metrohotel is thoughtfully conceptualized to promote rest, connection, and culinary discovery. From organic linen selection to hand-carved stone accents, our property represents a convergence of local craftsmanship and international luxury standards.
          </p>
        </div>

        {/* Asymmetrical Magazine Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="story-reveal md:col-span-7 relative h-[450px] rounded-3xl overflow-hidden shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
              alt="Lobby Craftsmanship"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent p-8 flex items-end">
              <span className="text-white font-serif text-xl font-light">The Master Lounge</span>
            </div>
          </div>

          <div className="story-reveal md:col-span-5 relative h-[450px] rounded-3xl overflow-hidden shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80"
              alt="Spa & Wellness"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent p-8 flex items-end">
              <span className="text-white font-serif text-xl font-light">Wellness & Thermal Spa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}