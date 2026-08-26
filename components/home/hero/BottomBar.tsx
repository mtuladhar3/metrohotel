'use client';

interface BottomBarProps {
  totalSlides: number;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export default function BottomBar({ totalSlides, currentSlide, onSelectSlide }: BottomBarProps) {
  return (
    <div className="hero-bottom-bar relative z-20 flex items-center justify-center px-6 pb-6 pt-4 lg:px-12">
      {/* Slider Indicators */}
      <div className="flex w-full max-w-xl items-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelectSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? 'true' : undefined}
              className="group flex-1 cursor-pointer py-3"
            >
              <div
                className={`h-[2px] w-full rounded-full transition-all duration-500 ${
                  isActive ? 'bg-white' : 'bg-white/30 group-hover:bg-white/60'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}