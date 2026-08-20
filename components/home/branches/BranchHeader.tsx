// src/components/home/branches/BranchHeader.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BranchHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 branch-header-anim max-w-6xl mx-auto px-4">
      <div className="max-w-2xl">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight mb-4">
         Your Stay, Wherever You Go
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed">
          Whether you're seeking soulful relaxation or exciting exploration, Marina offers a thoughtful selection of activities to suit your pace.
        </p>
      </div>

      <Link
        href="/activities"
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 text-xs tracking-wider uppercase whitespace-nowrap self-start md:self-end"
      >
        <span>Explore more</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}