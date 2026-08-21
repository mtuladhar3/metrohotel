// src/components/home/amenities/AmenitiesHeader.tsx
'use client';

export default function AmenitiesHeader() {
  return (
    <div className="amenities-header mb-16">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400 font-light">
          Our Facilities
        </span>
        <div className="w-8 h-[1px] bg-slate-500/50" />
      </div>
      <h2 className="text-4xl sm:text-5xl text-white tracking-wide font-normal">
        Hotel Amenities
      </h2>
    </div>
  );
}