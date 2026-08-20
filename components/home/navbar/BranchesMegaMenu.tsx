// src/components/home/navbar/BranchesMegaMenu.tsx
'use client';

import { useEffect, useRef } from 'react';

interface BranchItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const BRANCHES: BranchItem[] = [
  {
    id: 1,
    title: 'MOUNTAIN CHALET',
    subtitle: 'Boutique Mountain Chalet',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    href: '#chalet',
  },
  {
    id: 2,
    title: 'ISLAND RESORT',
    subtitle: 'Private Island Sanctuary',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    href: '#island',
  },
  {
    id: 3,
    title: 'CITY APARTHOTEL',
    subtitle: 'Boutique Luxury Apartments',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    href: '#aparthotel',
  },
  {
    id: 4,
    title: 'COUNTRYSIDE LODGE',
    subtitle: 'Countryside Vacation Retreat',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    href: '#lodge',
  },
  {
    id: 5,
    title: 'MOUNTAIN HOTEL',
    subtitle: 'Resort in Heart of Swiss Alps',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    href: '#hotel',
  },
];

interface BranchesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BranchesMegaMenu({ isOpen, onClose }: BranchesMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');

    if (isOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        display: 'block',
      });

      gsap.fromTo(
        '.branch-card',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        display: 'none',
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      onMouseLeave={onClose}
      className="hidden overflow-hidden absolute top-full left-0 w-full bg-[#111111]/95 backdrop-blur-xl border-t border-b border-white/10 shadow-2xl text-white z-40"
    >
      <div className="max-w-7xl mx-auto py-10 px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {BRANCHES.map((branch) => (
            <a
              key={branch.id}
              href={branch.href}
              className="branch-card group flex flex-col cursor-pointer"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-slate-900 border border-white/10 group-hover:border-white/40 transition-all duration-300 shadow-lg">
                <img
                  src={branch.image}
                  alt={branch.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Title & Subtitle */}
              <div className="mt-4 text-center">
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-100 group-hover:text-white transition-colors">
                  {branch.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-light mt-1 truncate">
                  {branch.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}