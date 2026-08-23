'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const curators = [
  { name: 'Eleanor Vance', title: 'General Manager', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80' },
  { name: 'Marcus Chen', title: 'Executive Culinary Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80' },
  { name: 'Sophia Sterling', title: 'Head of Interior Experience', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80' },
];

export default function AboutTeam() {
  const teamRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: teamRef.current,
        start: 'top 75%',
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: teamRef });

  return (
    <section ref={teamRef} className="py-28 bg-white px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">Human Touch</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-stone-900">
            Meet the Curators
          </h2>
          <p className="text-stone-600 font-light text-base">
            The visionary minds behind our extraordinary hospitalities and seamless guest journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {curators.map((member, i) => (
            <div key={i} className="team-card group relative bg-[#FDFBF7] rounded-[2rem] overflow-hidden border border-stone-200/60 p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-900/10">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-3 pb-3">
                <h3 className="text-xl font-serif font-semibold text-stone-900">{member.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-amber-800 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}