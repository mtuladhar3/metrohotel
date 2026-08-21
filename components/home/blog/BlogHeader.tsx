// src/components/home/blog/BlogHeader.tsx
'use client';

export default function BlogHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16 blog-header-anim">
      {/* Main Title */}
      <div className="lg:col-span-7">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal leading-tight">
          Explore Stories for Your Next Stay
        </h2>
      </div>

      {/* Description Subtext */}
      <div className="lg:col-span-5 lg:pt-2">
        <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          The Michelin-starred Mirall restaurant, created from the ancient lemon house of Villa Baracchi, has an elegant indoor dining room and a striking panoramic terrace that overlooks.
        </p>
      </div>
    </div>
  );
}