// src/components/home/hero/HeroTitle.tsx
'use client';

interface HeroTitleProps {
  title: string;
  subtitle: string;
}

export default function HeroTitle({ title, subtitle }: HeroTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center my-auto">
      <div className="hero-text text-6xl sm:text-8xl md:text-9xl tracking-tight text-white/95 leading-none select-none">
        {title}
      </div>
      <h1 className="hero-text text-6xl sm:text-8xl md:text-9xl tracking-tight text-white/90 leading-none select-none -mt-2 sm:-mt-6">
        {subtitle}
      </h1>
    </div>
  );
}