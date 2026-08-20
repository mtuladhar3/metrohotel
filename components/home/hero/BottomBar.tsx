// src/components/home/hero/BottomBar.tsx
'use client';

interface BottomBarProps {
  totalSlides: number;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export default function BottomBar({ totalSlides, currentSlide, onSelectSlide }: BottomBarProps) {
  return (
    <div className="hero-bottom-bar flex items-center justify-center px-6 lg:px-12 pb-6 pt-4 relative z-20">
      {/* Slider Indicators */}
      <div className="flex items-center gap-3 w-full max-w-xl">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelectSlide(index)}
            className="flex-1 py-3 cursor-pointer group"
          >
            <div
              className={`h-[2px] w-full rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

    </div>
  );
}