// src/components/home/branches/BranchCard.tsx
'use client';

import { Branch } from '@/data/branches';

interface BranchCardProps {
  branch: Branch;
}

// Explicit map to prevent Tailwind purge issues
const rotationClasses: Record<string, string> = {
  '-rotate-6': 'md:-rotate-6',
  '-rotate-3': 'md:-rotate-3',
  'rotate-0': 'md:rotate-0',
  'rotate-3': 'md:rotate-3',
  'rotate-6': 'md:rotate-6',
};

const offsetClasses: Record<string, string> = {
  '-translate-y-4': 'md:-translate-y-4',
  'translate-y-0': 'md:translate-y-0',
  'translate-y-4': 'md:translate-y-4',
};

export default function BranchCard({ branch }: BranchCardProps) {
  const rotationClass = rotationClasses[branch.rotation] || '';
  const offsetClass = offsetClasses[branch.offset] || '';

  return (
    <div
      className={`group relative bg-white shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 ease-out cursor-pointer transform rotate-0 translate-y-0 ${rotationClass} ${offsetClass} hover:rotate-0! hover:translate-y-0! hover:scale-105 hover:z-30 w-full`}
    >
      {/* Image Wrapper */}
      <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100 rounded-t-2xl">
        <img
          src={branch.image}
          alt={branch.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Title Banner */}
      <div className="p-3 sm:p-5 text-center">
        <h3 className="text-sm sm:text-base lg:text-lg text-slate-900 font-normal leading-snug group-hover:text-amber-900 transition-colors">
          {branch.name}
        </h3>
      </div>
    </div>
  );
}