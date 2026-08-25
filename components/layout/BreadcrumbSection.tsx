// src/components/common/BreadcrumbSection.tsx
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbSectionProps = {
  /** Small uppercase label above the title */
  eyebrow?: string;
  title: string;
  /** Supporting text under the title */
  description?: string;
  /** Trail shown above the eyebrow, e.g. Home / Hotels */
  crumbs?: BreadcrumbItem[];
  /** Background image URL for the hero banner */
  bgImage?: string;
};

const DEFAULT_BG = 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80';

export default function BreadcrumbSection({
  eyebrow,
  title,
  description,
  crumbs,
  bgImage = DEFAULT_BG,
}: BreadcrumbSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      if (crumbs && crumbs.length > 0) {
        tl.from('.anim-crumbs', { y: 20, opacity: 0 });
      }
      if (eyebrow) {
        tl.from('.anim-eyebrow', { y: 20, opacity: 0 }, '-=0.8');
      }
      tl.from('.anim-title', { y: 30, opacity: 0 }, crumbs || eyebrow ? '-=0.7' : undefined)
        .from('.anim-sub', { y: 20, opacity: 0 }, '-=0.6');
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-1/2 flex flex-col justify-between bg-stone-100 overflow-hidden font-sans"
    >
      {/* 1. FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft lighting overlay to guarantee dark text legibility on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent w-full md:w-3/5" />
      </div>

      {/* 2. TOP CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto pt-80 md:pt-100 pb-20 px-6 sm:px-10 lg:px-12 w-full">
        <div className="max-w-2xl space-y-6">

          {eyebrow ? (
            <p className="anim-eyebrow text-xs font-medium uppercase tracking-[0.28em] text-amber-500">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="anim-title text-5xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.1]">
            {title}
          </h1>

          {description ? (
            <p className="anim-sub text-slate-200 text-base sm:text-lg font-normal leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {/* 3. BOTTOM ARCH AREA */}
      <div className="relative z-20 w-full mt-20">
        <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg
            className="relative block w-full h-20 sm:h-28 md:h-36 text-white fill-current"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,90 960,90 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}