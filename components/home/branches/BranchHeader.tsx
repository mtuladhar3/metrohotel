// src/components/home/branches/BranchHeader.tsx
'use client';

import BranchControls from './BranchControls';

interface BranchHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function BranchHeader({ onPrev, onNext }: BranchHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 branch-header-anim max-w-7xl mx-auto px-4">
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight mb-4">
          Your Stay, Wherever You Go
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed">
          Whether you&apos;re seeking soulful relaxation or exciting exploration, Marina offers a thoughtful selection of activities to suit your pace.
        </p>
      </div>

      <div className="self-start md:self-end">
        <BranchControls onPrev={onPrev} onNext={onNext} />
      </div>
    </div>
  );
}