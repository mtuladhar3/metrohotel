// src/components/home/properties/PropertyHeader.tsx
'use client';

export default function PropertyHeader() {
  return (
    <div className="properties-header grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
      {/* Title Column */}
      <div className="lg:col-span-5">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-medium text-slate-900 tracking-tight leading-[1.1]">
          Life Along <br /> The Coast
        </h2>
      </div>

      {/* Description Column */}
      <div className="lg:col-span-4">
        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
          The villas were crafted using a low-impact building method that embraces the land’s natural contours, allowing each structure to settle gently into the coastal landscape.
        </p>
      </div>

      {/* Button Column */}
      <div className="lg:col-span-3 flex lg:justify-end">
        <a
          href="#all-villas"
          className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-950 text-white hover:bg-slate-800 text-xs font-medium tracking-wide rounded-full transition-all duration-300 shadow-md active:scale-95"
        >
          View All Available Villas
        </a>
      </div>
    </div>
  );
}