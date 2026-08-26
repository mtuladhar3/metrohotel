// src/components/home/about/AboutHeader.tsx
'use client';

export default function AboutHeader() {
  return (
    <div className="about-header text-center flex flex-col items-center gap-3 mb-10">
      {/* <div className="w-9 h-9 rounded-md border border-slate-300 flex items-center justify-center text-slate-800 text-sm mb-1 shadow-2xs">
        ✦
      </div> */}

      <span className="text-[11px] uppercase tracking-[0.25em] text-slate-700 font-semibold">
  WELCOME TO HOTEL METRO
</span>

      <h2 className="text-4xl sm:text-6xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] max-w-3xl">
       We Don’t Just Host Stays, We Create Moments
      </h2>
    </div>
  );
}