// src/components/home/branches/BranchControls.tsx
'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BranchControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function BranchControls({ onPrev, onNext }: BranchControlsProps) {
  return (
    <div className="flex items-center justify-center gap-2 pt-16 branch-controls-anim">
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="p-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <button
        onClick={onNext}
        aria-label="Next"
        className="p-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}